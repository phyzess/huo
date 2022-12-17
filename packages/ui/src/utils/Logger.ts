import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { palette } from '../theme/palette';
import { Nullable, UndefinedAble } from '../tool-types';

dayjs.extend(duration);

interface ILoggerOptions {
	useTimestamps?: boolean; // insert a timestamp in front of each log
	includeSessionMetadata?: boolean; // whether to include session start, end, duration, and when log is cleared
	useLocalStorage?: boolean; // store the output using localStorage and continuously add to the same log each session
	recordLogs?: boolean; // disable the core functionality of logger
	autoTrim?: boolean; // to avoid the log eating up potentially endless memory
	maxLines?: number; // if autoTrim is true, this many most recent lines are saved
	tailNumLines?: number; // default number of lines tail gets
	logFilename?: string; // filename of log downloaded with downloadLog()
	maxDepth?: number; // max recursion depth for logged objects
	localStorageKey?: string; // localStorage key
	indent?: string; // string to use for indent (2 spaces)
	quoteStrings?: boolean; // whether or not to put quotes around strings
}

interface ILoggerStorage {
	startTime: string;
	log: string;
	lastLog: string;
}

enum E_LOG_TYPE {
	PRIMARY = 'PRIMARY',
	INFO = 'INFO',
	SUCCESS = 'SUCCESS',
	WARNING = 'WARNING',
	ERROR = 'ERROR',
}

type TLogParam = string | Object | Array<TLogParam>;

const defaultOptions = {
	useTimestamps: false,
	includeSessionMetadata: true,
	useLocalStorage: false,
	recordLogs: true,
	autoTrim: true,
	maxLines: 3000,
	tailNumLines: 25,
	logFilename: 'huo-logger.txt',
	maxDepth: 20,
	localStorageKey: 'huo-logger',
	indent: '  ',
	quoteStrings: true,
};

class Logger {
	private _useTimestamps = false;
	private _maxDepth = 20;
	private _includeSessionMetadata = true;
	private _useLocalStorage = false;
	private _recordLogs = true;
	private _autoTrim = true;
	private _maxLines = 3000;
	private _tailNumLines = 25;
	private _logFilename = 'huo-logger.txt';
	private _localStorageKey = 'huo-logger';
	private _indent = '  ';
	private _quoteStrings = true;

	private _startTime: UndefinedAble<Dayjs>;

	private _tags: string[] = [];

	private _storedLogs = '';

	private _mergedOptions;

	public constructor(options?: Partial<ILoggerOptions>) {
		const mergedOptions = { ...options, ...defaultOptions };

		this._mergedOptions = mergedOptions;
		this._applyOptions(mergedOptions);

		// START/RESUME LOG
		if (this._useLocalStorage && window && !!window.localStorage) {
			const stored = this._loadFromLocalStorage();
			if (stored) {
				this._storedLogs = stored.log;
				this._startTime = dayjs();
				const prevEndAt = dayjs(stored.lastLog);
				this._logMetadata(`Last session end: ${stored.lastLog}`);
				this._logMetadata(`Last ${this._formatSessionDuration(this._startTime, prevEndAt)}`);
				this._startLog();
			} else {
				this._startLog();
			}
		} else {
			this._useLocalStorage = false;
			this._startLog();
		}
	}

	public clone = ({ tags, options }: { tags?: string[]; options?: Partial<ILoggerOptions> }) => {
		const cloned = new Logger({ ...this._mergedOptions, ...options });
		cloned.batchTags(this._tags);

		if (tags) {
			cloned.batchTags(tags);
		}

		return cloned;
	};

	public get logs() {
		return this._storedLogs;
	}

	public get tags() {
		return this._tags;
	}

	public batchTags = (newTags: string[]) => {
		this._tags = [...this._tags, ...newTags];
	};

	public tag = (newTag: string) => {
		this._tags.push(newTag);

		return () => this.deleteTag(newTag);
	};

	public deleteTag = (tag: string) => {
		this._tags = this._tags.filter((t) => t !== tag);
	};

	public trace = () => console.trace();

	public time = () => console.time();

	public timeEnd = () => console.timeEnd();

	public log = (...param: TLogParam[]) => {
		this._coreLog(E_LOG_TYPE.PRIMARY, ...param);
	};

	public info = (...param: TLogParam[]) => {
		this._coreLog(E_LOG_TYPE.INFO, ...param);
	};

	public warning = (...param: TLogParam[]) => {
		this._coreLog(E_LOG_TYPE.WARNING, ...param);
	};

	public success = (...param: TLogParam[]) => {
		this._coreLog(E_LOG_TYPE.SUCCESS, ...param);
	};

	public error = (...param: TLogParam[]) => {
		this._coreLog(E_LOG_TYPE.ERROR, ...param);
	};

	/**
	 * clear all stored logs.
	 */
	public clear = () => {
		this._storedLogs = '';
		this._logMetadata(`Session started: ${this._formatDate(this._startTime)}`);
		this._logMetadata('Log cleared ' + this._formatDate());
		if (this._useLocalStorage) this._saveToLocalStorage();
	};

	/**
	 * get last lines logs.
	 */
	public tails = (lines?: number): string => this._trimLog(lines || this._tailNumLines);

	/**
	 * find logs of your search term in the log
	 */
	public search(term: string): string {
		const rgx = new RegExp(term, 'ig');
		const lines = this._storedLogs.split('\n');
		const matched = [];
		// can't use a simple filter & map here because we need to add the line number
		for (let i = 0; i < lines.length; i++) {
			const addr = `[${i}] `;
			if (lines[i].match(rgx)) {
				matched.push(addr + lines[i].trim());
			}
		}
		let result = matched.join('\n');
		if (!result.length) result = `Nothing found for "${term}".`;
		return result;
	}

	/**
	 * download logs.
	 */
	public downloadLogs = () => {
		if (window) {
			const logFile = this._getLog();
			const blob = new Blob([logFile], { type: 'data:text/plain;charset=utf-8' });
			const a = document.createElement('a');
			a.href = window.URL.createObjectURL(blob);
			a.target = '_blank';
			a.download = this._logFilename;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			window.URL.revokeObjectURL(a.href);
		} else {
			console.error('downloadLog only works in the browser');
		}
	};

	private _coreLog = (type = E_LOG_TYPE.PRIMARY, ...logParams: TLogParam[]) => {
		const tagsStr = this._tags.join(', ');
		const logPrefix = ` [${tagsStr}] > [${type}] > `;

		if (logParams.length === 1) {
			const log = logParams[0];
			if (typeof log === 'object') {
				console.dir(logParams);
			} else {
				// @ts-ignore
				const color = palette.light[type.toLowerCase()].main;
				console.log(
					`%c${logPrefix}%c ${log} %c`,
					`background:${color};border:1px solid ${color}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
					`border:1px solid ${color}; padding: 1px; border-radius: 0 4px 4px 0; color: ${color};`,
					'background:transparent',
				);
			}
		} else {
			console.log(logPrefix, ...logParams);
		}

		if (this._recordLogs) {
			this._recordLog(logPrefix, ...logParams);
		}
	};

	/**
	 * records a log
	 */
	private _recordLog(logPrefix: string, ...logParams: unknown[]): void {
		if (this._useTimestamps) {
			this._storedLogs += this._formatDate() + ' ';
		}
		this._storedLogs += `${logPrefix}${logParams.map((param) => this._stringify(param)).join(' ')}`;
		this._storedLogs += '\n';
		if (this._autoTrim) this._storedLogs = this._trimLog(this._maxLines);
		if (this._useLocalStorage) {
			const saveObject = {
				startTime: this._startTime,
				log: this._storedLogs,
				lastLog: dayjs(),
			};
			window.localStorage.setItem(this._localStorageKey, JSON.stringify(saveObject));
		}
	}

	private _getLog(): string {
		const retrievalTime = dayjs();
		// if recording is off, so dev knows why they don't have any logs
		if (!this._storedLogs) {
			const revert = this.tag('Inner Logger');
			this.warning('Log recording is off');
			revert();
		}

		// if using local storage, get values
		if (this._useLocalStorage && window && window.localStorage) {
			const stored = this._loadFromLocalStorage();
			if (stored) {
				this._startTime = dayjs(stored.startTime);
				this._storedLogs = stored.log;
			}
		}

		if (this._includeSessionMetadata && this._startTime) {
			return (
				this._storedLogs
				+ `---- ${this._formatSessionDuration(retrievalTime, this._startTime)} ----\n`
			);
		}
		return this._storedLogs;
	}

	private _applyOptions = (options: ILoggerOptions) => {
		for (const [key, value] of Object.entries(options)) {
			// @ts-ignore
			this[`_${key}`] = value;
		}
	};

	private _startLog = () => {
		this._startTime = dayjs();
		this._logMetadata(`Session started: ${this._formatDate(this._startTime)}`);
	};

	/**
	 * get last maxLines logs.
	 */
	private _trimLog = (maxLines: number): string => {
		let lines = this._storedLogs.split('\n');
		lines.pop();
		if (lines.length > maxLines) {
			lines = lines.slice(lines.length - maxLines);
		}
		return lines.join('\n') + '\n';
	};

	/**
	 * save current stored logs into localStorage
	 */
	private _saveToLocalStorage = () => {
		const saveObject = {
			startTime: this._startTime,
			log: this._storedLogs,
			lastLog: dayjs(),
		};
		window.localStorage.setItem(this._localStorageKey, JSON.stringify(saveObject));
	};

	/**
	 * load stored logs from localStorage
	 */
	private _loadFromLocalStorage = (): Nullable<ILoggerStorage> => {
		const saved = window.localStorage.getItem(this._localStorageKey);
		if (saved) {
			return JSON.parse(saved) as ILoggerStorage;
		}
		return null;
	};

	/**
	 * stringify any data
	 */
	private _stringify(obj: any, depth = 0): string {
		if (depth >= this._maxDepth) {
			return '... (max-depth reached)';
		}
		const type = this._determineType(obj);
		switch (type) {
			case 'Object':
				return this._stringifyObject(obj, depth);
			case 'Array':
				return this._stringifyArray(obj, depth);
			case 'function':
				return this._stringifyFunction(obj, depth);
			case 'RegExp':
				return '/' + obj.source + '/' + obj.flags;
			case 'Date':
			case 'string':
				return this._quoteStrings ? `"${obj}"` : String(obj);
			case 'boolean':
				return obj ? 'true' : 'false';
			case 'number':
				return String(obj);
			case 'null':
			case 'undefined':
				return type;
			case 'Logger':
				return '... (Logger)'; // prevent endless loop
			default:
				return '?';
		}
	}

	/**
	 * recursively stringify object
	 */
	private _stringifyObject(obj: any, startingDepth = 0): string {
		// return JSON.stringify(obj, null, this.indent); // can't control depth/line-breaks/quotes
		let result = '{';
		let depth = startingDepth;
		if (this._objectSize(obj) > 0) {
			result += '\n';
			depth++;
			let i = 0;
			for (const prop in obj) {
				if (Object.hasOwn(obj, prop)) {
					result += this._indentsForDepth(depth);
					result += prop + ': ';
					const subresult = this._stringify(obj[prop], depth);
					if (subresult) {
						result += subresult;
					}
					if (i < this._objectSize(obj) - 1) result += ',';
					result += '\n';
					i++;
				}
			}
			depth--;
			result += this._indentsForDepth(depth);
		}
		result += '}';
		return result;
	}

	/**
	 * recursively stringify array
	 */
	private _stringifyArray(arr: Array<any>, startingDepth = 0): string {
		// return JSON.stringify(arr, null, this.indent); // can't control depth/line-breaks/quotes
		let result = '[';
		let depth = startingDepth;
		let lastLineNeedsNewLine = false;
		if (arr.length > 0) {
			depth++;
			for (let i = 0; i < arr.length; i++) {
				const subtype = this._determineType(arr[i]);
				let needsNewLine = false;
				if (subtype === 'Object' && this._objectSize(arr[i]) > 0) needsNewLine = true;
				if (subtype === 'Array' && arr[i].length > 0) needsNewLine = true;
				if (!lastLineNeedsNewLine && needsNewLine) result += '\n';
				const subresult = this._stringify(arr[i], depth);
				if (subresult) {
					if (needsNewLine) result += this._indentsForDepth(depth);
					result += subresult;
					if (i < arr.length - 1) result += ', ';
					if (needsNewLine) result += '\n';
				}
				lastLineNeedsNewLine = needsNewLine;
			}
			depth--;
		}
		result += ']';
		return result;
	}

	/**
	 * pretty-printing functions is a lib unto itself - this simply prints with indents
	 */
	private _stringifyFunction(fn: any, startingDepth = 0): string {
		let depth = startingDepth;
		return String(fn)
			.split('\n')
			.map((line) => {
				if (line.match(/\}/)) depth--;
				const val = this._indentsForDepth(depth) + line.trim();
				if (line.match(/\{/)) depth++;
				return val;
			})
			.join('\n');
	}

	private _formatDate(ts = dayjs()): string {
		return `[${ts.toISOString()}]`;
	}

	/**
	 * check data type
	 */
	private _determineType = (object: any): string => {
		if (object === null) {
			return 'null';
		} else if (object === undefined) {
			return 'undefined';
		} else {
			let type = typeof object as string;
			if (type === 'object') {
				if (Array.isArray(object)) {
					type = 'Array';
				} else {
					if (object instanceof Date) {
						type = 'Date';
					} else if (object instanceof RegExp) {
						type = 'RegExp';
					} else if (object instanceof Logger) {
						type = 'Logger';
					} else {
						type = 'Object';
					}
				}
			}
			return type;
		}
	};

	/**
	 * save metadata into storedLogs for key operation.
	 */
	private _logMetadata(msg: string): void {
		if (this._includeSessionMetadata) {
			this._storedLogs += `---- ${msg} ----\n`;
		}
	}

	private _formatSessionDuration(curTime: Dayjs, prevTime: Dayjs): string {
		const duration = dayjs.duration(curTime.diff(prevTime));
		return `Session duration: ${duration.get('hours')}hrs, ${
			duration.get(
				'minutes',
			)
		}mins, ${duration.get('seconds')}sec, ${duration.get('milliseconds')}ms`;
	}

	/**
	 * check how many own keys in a obj.
	 */
	private _objectSize(obj: any): number {
		let size = 0;
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) size++;
		}
		return size;
	}

	private _indentsForDepth = (depth: number) => this._indent.repeat(Math.max(depth, 0));
}

export type { ILoggerOptions, ILoggerStorage };
export { Logger };

import { AUTH_RECOIL } from '@/recoils/auth/constants';
import { huoLogger } from '@/utils';
import { Client, Logger as NotionhqLogger } from '@notionhq/client';
import { ClientOptions } from '@notionhq/client/build/src/Client';
import { CORS_PREFIX } from '../constants';
import { k } from '../ky';

const logger = huoLogger.clone({ tags: ['NotionhqClient'] });

class NotionhqClient {
	private _instance!: Client;

	public getInstance() {
		if (this._instance) {
			return this._instance;
		}

		return this._init();
	}

	/** private **/
	private _init() {
		const auth = this._getOAuthToken();

		if (!auth) {
			return;
		}

		const instance = new Client({
			auth,
			logger: this._logger,
			fetch: this._fetch,
		});
		this._instance = instance;
		return instance;
	}

	private _logger: NotionhqLogger = (...params) => {
		logger.log(...params);
	};

	private _getOAuthToken = () => {
		const persistOAuth = JSON.parse(localStorage.getItem(AUTH_RECOIL.NOTION_OAUTH) ?? '');
		return persistOAuth['access_token'];
	};

	private _fetch: ClientOptions['fetch'] = (url, params) => {
		const prefixedUrl = `${CORS_PREFIX}${url}`;
		return k(prefixedUrl, params);
	};
}

const notion = new NotionhqClient();

export { notion };

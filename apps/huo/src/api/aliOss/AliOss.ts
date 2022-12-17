import { getEnv } from '@/envTokens';
import AliOss from 'ali-oss';
import dayjs from 'dayjs';

const ALI_OSS_SEED_ACCESS_KEY_ID = getEnv('HUO_ALI_OSS_SEED_ACCESS_KEY_ID');
const ALI_OSS_SEED_ACCESS_KEY_SECRET = getEnv('HUO_ALI_OSS_SEED_ACCESS_KEY_SECRET');

class Oss {
	private _instance!: AliOss;

	public constructor() {
		this._init();
	}

	public getInstance() {
		if (this._instance) {
			return this._instance;
		}

		return this._init();
	}

	public async put(file: Buffer | Blob | File, filename?: string): Promise<AliOss.PutObjectResult> {
		const name = filename || dayjs().valueOf().toString();
		const res = await this._instance.put(name, file);
		return res;
	}

	private _init() {
		const accessKeyId = ALI_OSS_SEED_ACCESS_KEY_ID;
		const accessKeySecret = ALI_OSS_SEED_ACCESS_KEY_SECRET;
		const instance = new AliOss({
			region: 'oss-cn-hangzhou',
			accessKeyId,
			accessKeySecret,
			bucket: 'seed',
		});
		this._instance = instance;
		return instance;
	}
}

const aliOss = new Oss();

export { aliOss, Oss };

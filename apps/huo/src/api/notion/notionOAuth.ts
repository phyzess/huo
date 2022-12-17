import { getEnv } from '@/envTokens';
import { encode2Base64 } from '@phyzess/huo-ui';
import { CORS_PREFIX } from '../constants';
import { k } from '../ky';
import { NOTION_API } from './constants';
import type { INotionOAuth, INotionOAuthTokenParams } from './types';

const CLIENT_ID = getEnv('HUO_NOTION_CLIENT_ID');
const CLIENT_SECRET = getEnv('HUO_NOTION_CLIENT_SECRET');

const url = `${CORS_PREFIX}${NOTION_API.NOTION_OAUTH_TOKEN}`;

const requestNotionOauthToken = async ({ code, redirectUri }: INotionOAuthTokenParams): Promise<INotionOAuth> => {
	const basicAuth = encode2Base64(`${CLIENT_ID}:${CLIENT_SECRET}`);
	const response = k.post(url, {
		headers: {
			Authorization: `Basic ${basicAuth}`,
		},
		json: {
			grant_type: 'authorization_code',
			code,
		},
		timeout: false,
	});
	return response.json();
};

export { requestNotionOauthToken };

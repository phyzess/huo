import type { INotionOAuth } from '@/api/notion';
import { Nullable } from '@phyzess/huo-ui';
import { atom } from 'recoil';
import { localStorageEffect } from '../utils';
import { AUTH_RECOIL } from './constants';

const notionOAuthAtom = atom<Nullable<INotionOAuth>>({
	key: AUTH_RECOIL.NOTION_OAUTH,
	default: null,
	effects: [
		localStorageEffect(AUTH_RECOIL.NOTION_OAUTH),
	],
});

export { notionOAuthAtom };

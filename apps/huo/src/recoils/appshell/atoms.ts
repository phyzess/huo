import { atom } from 'recoil';
import { APPSHELL_RECOILS } from './constants';
import type { TAppshellLoadingStatus } from './types';

const appshellLoadingStatusAtom = atom<TAppshellLoadingStatus>({
	key: APPSHELL_RECOILS.APPSHELL_LOADING_STATUS,
	default: 'idle',
});

export { appshellLoadingStatusAtom };

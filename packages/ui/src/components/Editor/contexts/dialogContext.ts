import { createContext } from 'react';
import { E_ELEMENT } from '../constants';
import { IImage } from '../types';

type TLinkManageDialogMode = 'insert' | 'wrap' | 'edit';

interface ILinkManageDialogState {
	label?: string;
	url?: string;
	id?: string;
	selectionCollapsed?: boolean;
	mode?: TLinkManageDialogMode;
}

interface IImageManageDialogState {
	images?: IImage[];
}

interface IDialogState {
	[E_ELEMENT.LINK]: ILinkManageDialogState & {
		open: boolean;
	};
	[E_ELEMENT.IMAGE]: IImageManageDialogState & {
		open: boolean;
	};
}

interface IAction<T, K extends keyof T> {
	type: K;
	value: Partial<T[K]>;
}

type TSetOpenStateAction = (action: IAction<IDialogState, keyof IDialogState>) => void;

interface IDialogContext {
	dialogState: IDialogState;
	setDialogContext: TSetOpenStateAction;
}

const dialogContextInitialState: IDialogState = {
	[E_ELEMENT.LINK]: {
		open: false,
		url: '',
		label: '',
		id: '',
		selectionCollapsed: false,
		mode: 'insert',
	},
	[E_ELEMENT.IMAGE]: {
		open: false,
		images: [],
	},
};

const dialogContextReducer = (
	state: IDialogState,
	action: IAction<IDialogState, keyof IDialogState>,
) => ({
	...state,
	[action.type]: {
		...state[action.type],
		...action.value,
	},
});

const DialogContext = createContext<IDialogContext>({
	dialogState: dialogContextInitialState,
	setDialogContext: () => {
		//
	},
});

export { DialogContext, dialogContextInitialState, dialogContextReducer };
export type { IDialogState, ILinkManageDialogState, TLinkManageDialogMode };

import { ReactNode } from 'react';
import { XOR } from '../../tool-types';
import type { IButtonProps } from '../Button';

interface IModalContainerBaseProps {
	fullWidth?: boolean;
	fullScreen?: boolean;
	maskClosable?: boolean;
	modalBoxClassName?: string;
	onClick?: () => void;
	children?: ReactNode;
}

type ModalContainerProps =
	& XOR<
		{
			open?: boolean;
		},
		{
			htmlFor?: string;
		}
	>
	& IModalContainerBaseProps;

interface IModalBaseProps {
	title?: ReactNode;
	showCloseIconBtn?: boolean;
	cancelText?: string;
	cancelBtnProps?: IButtonProps;
	confirmText?: string;
	confirmBtnProps?: IButtonProps;
	showCloseIcon?: boolean;
	children?: ReactNode;
	onCancel?: () => void;
	onConfirm?: () => void;
}

type ModalProps = IModalBaseProps & ModalContainerProps;

interface IModalFuncConfig extends Omit<ModalProps, 'children' | 'open' | 'htmlFor'> {
	content?: ReactNode;
}

interface IModalStaticFuncReturn {
	destroy: () => void;
	update: (config: IModalFuncConfig) => void;
}

export type { IModalFuncConfig, IModalStaticFuncReturn, ModalContainerProps, ModalProps };

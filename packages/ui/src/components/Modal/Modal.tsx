import { FC, useCallback, useMemo } from 'react';
import { ScribblesCross } from '../../icons';
import { ModalContainer } from './ModalContainer';
import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({
	open,
	htmlFor,
	children,
	title,
	cancelText = 'Cancel',
	confirmText = 'Confirm',
	cancelBtnProps,
	confirmBtnProps,
	showCloseIcon,
	maskClosable,
	modalBoxClassName,
	fullWidth = false,
	fullScreen = false,
	onCancel,
	onConfirm,
}) => {
	const modalTitle = useMemo(
		() => title && <h3 className='font-bold text-lg'>{title}</h3>,
		[title],
	);

	const handleConfirm = useCallback(() => {
		onConfirm?.();
	}, [onConfirm]);

	const handleCancel = useCallback(() => {
		onCancel?.();
	}, [onCancel]);

	const handleMaskClick = () => {
		if (maskClosable) {
			onCancel?.();
		}
	};

	const modalAction = useMemo(
		() =>
			(onConfirm || onCancel) && (
				<div className='modal-action'>
					{onCancel && (
						<label
							htmlFor={htmlFor}
							className='btn btn-outline'
							onClick={handleCancel as any}
							{...cancelBtnProps}
						>
							{cancelText}
						</label>
					)}
					{onConfirm && (
						<label
							htmlFor={htmlFor}
							className='btn'
							onClick={handleConfirm as any}
							{...confirmBtnProps}
						>
							{confirmText}
						</label>
					)}
				</div>
			),
		[
			cancelBtnProps,
			cancelText,
			confirmBtnProps,
			confirmText,
			handleCancel,
			handleConfirm,
			htmlFor,
			onCancel,
			onConfirm,
		],
	);

	const control = htmlFor ? { htmlFor } : { open };

	return (
		<ModalContainer
			{...control}
			maskClosable={maskClosable}
			fullWidth={fullWidth}
			fullScreen={fullScreen}
			modalBoxClassName={modalBoxClassName}
			onClick={handleMaskClick}
		>
			{showCloseIcon && (
				<label htmlFor={htmlFor} className='btn btn-sm btn-circle absolute right-2 top-2 p-[3px]'>
					<ScribblesCross />
				</label>
			)}
			{modalTitle}
			<div className='py-4'>{children}</div>
			{modalAction}
		</ModalContainer>
	);
};

export { Modal };

import classnames from 'classnames';
import { FC, MouseEvent, useCallback, useMemo } from 'react';
import { ModalContainerProps } from './types';

const ModalContainer: FC<ModalContainerProps> = ({
	open,
	htmlFor,
	maskClosable,
	fullWidth,
	fullScreen,
	modalBoxClassName,
	onClick,
	children,
}) => {
	const cls = classnames('modal-mask modal bg-slate-800/80', {
		'modal-open': !!open,
	});

	const boxCls = classnames(
		'modal-box',
		'relative',
		{
			flex: fullScreen,
			'flex-col': fullScreen,
			'justify-between': fullScreen,
			'w-full': fullWidth || fullScreen,
			'max-w-full': fullWidth || fullScreen,
			'h-full': fullScreen,
			'max-h-screen': fullScreen,
		},
		modalBoxClassName,
	);

	const handleMaskClick = useCallback(
		(e: MouseEvent<HTMLLabelElement | HTMLDivElement>) => {
			// @ts-ignore
			if (e.target.className.includes('modal-mask') && maskClosable) {
				onClick?.();
			}
		},
		[maskClosable, onClick],
	);

	const mask = useMemo(
		() =>
			htmlFor && maskClosable
				? (
					<label htmlFor={htmlFor} className={cls} onClick={handleMaskClick}>
						<label className={boxCls} htmlFor=''>
							{children}
						</label>
					</label>
				)
				: (
					<div className={cls} onClick={handleMaskClick}>
						<div className={boxCls}>{children}</div>
					</div>
				),
		[boxCls, children, cls, handleMaskClick, htmlFor, maskClosable],
	);

	return (
		<>
			{htmlFor && <input type='checkbox' id={htmlFor} className='modal-toggle' />}
			{mask}
		</>
	);
};

export { ModalContainer };

import classnames from 'classnames';
import { FC } from 'react';
import { IImageWrapperProps } from './types';

const ImageWrapper: FC<IImageWrapperProps> = ({
	width,
	height,
	backgroundColor,
	className,
	children,
	onClick,
}) => {
	const cls = classnames('flex justify-center align-center relative', className);
	const style = {
		width,
		height,
		backgroundColor: backgroundColor ?? 'inherit',
	};

	return (
		<div className={cls} style={style} onClick={onClick}>
			{children}
		</div>
	);
};

export { ImageWrapper };

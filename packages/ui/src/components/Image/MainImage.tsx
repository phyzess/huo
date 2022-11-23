import classnames from 'classnames';
import { FC } from 'react';
import { IMainImageProps } from './types';

const objectFitCls = {
	contain: 'object-contain',
	cover: 'object-cover',
	fill: 'object-fill',
	none: 'object-none',
	'scale-down': 'object-scale-down',
};

const MainImage: FC<IMainImageProps> = ({
	src,
	alt,
	objectFit,
	loaded,
	className,
	onLoad,
	onError,
}) => {
	const cls = classnames(
		'relative w-full h-full',
		objectFitCls[objectFit],
		{
			invisible: !loaded,
		},
		className,
	);

	return <img className={cls} src={src} alt={alt} onLoad={onLoad} onError={onError} />;
};

export { MainImage };

import { FC, SyntheticEvent, useMemo, useState } from 'react';
import { ScribblesMess } from '../../icons';
import { CircularProgress } from '../CircularProgress';
import { IconWrapper } from './IconWrapper';
import { ImageWrapper } from './ImageWrapper';
import { MainImage } from './MainImage';
import { IImageInfo, IImageProps } from './types';

const DEFAULT = {
	WIDTH: '100%',
	HEIGHT: '100%',
};

const Image: FC<IImageProps> = ({
	src = '',
	alt = '',
	width = DEFAULT.WIDTH,
	height = DEFAULT.HEIGHT,
	showLoading = false,
	errorIcon = true,
	objectFit = 'cover',
	backgroundColor = 'inherit',
	className = '',
	wrapperClassName = '',
	iconWrapperClassName = '',
	onLoad,
	onError,
	onClick,
}) => {
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);

	const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
		setLoaded(true);
		setError(false);
		if (onLoad) {
			const target = event.target as unknown as Event['target'] & IImageInfo;
			const info: IImageInfo = {
				naturalWidth: target.naturalWidth,
				naturalHeight: target.naturalHeight,
			};

			onLoad(info);
		}
	};

	const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
		setError(true);
		setLoaded(false);
		if (onError) {
			onError(event);
		}
	};

	const handleClick = () => {
		onClick?.();
	};

	const ErrorIcon = useMemo(
		() => (typeof errorIcon !== 'boolean' && errorIcon) || <ScribblesMess className='w-24 h-24' />,
		[errorIcon],
	);

	const LoadingIndicator = useMemo(
		() => (typeof showLoading !== 'boolean' && showLoading) || <CircularProgress />,
		[showLoading],
	);

	return (
		<ImageWrapper
			width={width}
			height={height}
			backgroundColor={backgroundColor}
			className={wrapperClassName}
			onClick={handleClick}
		>
			<MainImage
				src={src}
				alt={alt}
				objectFit={objectFit}
				className={className}
				loaded={loaded}
				onLoad={handleLoad}
				onError={handleError}
			/>
			{(!!showLoading || !!errorIcon) && (
				<IconWrapper visible={!loaded} className={iconWrapperClassName}>
					<>
						{!!errorIcon && error && ErrorIcon}
						{!!showLoading && !error && !loaded && LoadingIndicator}
					</>
				</IconWrapper>
			)}
		</ImageWrapper>
	);
};

export { Image };

import { CSSProperties, ImgHTMLAttributes, ReactNode, SyntheticEvent } from 'react';

type TObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

interface IImageWrapperProps {
	width: number | string;
	height: number | string;
	backgroundColor: string;
	children?: ReactNode;
	className?: string;
	styles?: CSSProperties;
	onClick?: () => void;
}

interface IMainImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	objectFit: TObjectFit;
	loaded: boolean;
}

interface IIconWrapperProps {
	visible?: boolean;
	className?: string;
	children?: ReactNode;
}

interface IImageInfo {
	naturalWidth: number;
	naturalHeight: number;
}

interface IImageProps extends Partial<Omit<IImageWrapperProps, 'styles'>>, Partial<Omit<IMainImageProps, 'onLoad'>> {
	src: string;
	alt?: string;
	showLoading?: boolean;
	errorIcon?: SVGElement;

	className?: string;
	wrapperClassName?: string;
	iconWrapperClassName?: string;

	onLoad?: (info: IImageInfo) => void;
	onError?: (event: SyntheticEvent<HTMLImageElement>) => void;
	onClick?: () => void;
}

export type { IIconWrapperProps, IImageInfo, IImageProps, IImageWrapperProps, IMainImageProps };

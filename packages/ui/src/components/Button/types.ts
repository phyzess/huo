import { MouseEvent, ReactNode } from 'react';
import type { TBrand, TShape, TSize, TState } from '../../types';

interface IButtonProps {
	type?: TBrand;
	state?: TState;
	shape?: TShape;
	size?: TSize;
	disabled?: boolean;
	loading?: boolean;
	active?: boolean;
	outline?: boolean;
	className?: string;
	children?: ReactNode;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export type { IButtonProps };

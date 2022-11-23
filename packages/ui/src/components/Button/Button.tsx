import classnames from 'classnames';
import { FC, useMemo } from 'react';
import type { IButtonProps } from './types';

const BUTTON_BASE_CLS = 'btn';

const Button: FC<IButtonProps> = ({
	type,
	state,
	shape,
	size,
	disabled,
	loading,
	active,
	outline,
	className,
	children,
	onClick,
}) => {
	const classes = useMemo(() => {
		return classnames(
			BUTTON_BASE_CLS,
			{
				// type
				'btn-primary': type === 'primary',
				'btn-secondary': type === 'secondary',
				'btn-accent': type === 'accent',
				'btn-ghost': type === 'ghost',
				'btn-link': type === 'link',
				// state
				'btn-info': state === 'info',
				'btn-success': state === 'success',
				'btn-warning': state === 'warning',
				'btn-error': state === 'error',
				// shape
				'btn-square': shape === 'square',
				'btn-circle': shape === 'circle',
				// size
				'btn-lg': size === 'lg',
				'btn-sm': size === 'sm',
				'btn-xs': size === 'xs',
				// disabled
				disabled: !!disabled,
				loading: !!loading,
				'btn-active': !!active,
				'btn-outline': !!outline,
			},
			className,
		);
	}, [active, className, disabled, loading, outline, shape, size, state, type]);

	return (
		<button type='button' className={classes} onClick={onClick}>
			{children}
		</button>
	);
};

export { Button };

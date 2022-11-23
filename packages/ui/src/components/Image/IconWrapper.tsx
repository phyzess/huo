import classnames from 'classnames';
import { FC } from 'react';
import { IIconWrapperProps } from './types';

const IconWrapper: FC<IIconWrapperProps> = ({ visible, className, children }) => {
	const cls = classnames(
		'flex items-center w-full',
		{
			invisible: !visible,
		},
		className,
	);
	return <div className={cls}>{children}</div>;
};

export { IconWrapper };

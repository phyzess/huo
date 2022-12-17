import classnames from 'classnames';
import { FC } from 'react';
import { ScribblesSwirl1 } from '../icons';

interface ICircularProgressProps {
	className?: string;
	size?: number;
}

const CircularProgress: FC<ICircularProgressProps> = ({ className, size }) => {
	const cls = classnames('inline-block animate-spin', className);
	return <ScribblesSwirl1 className={cls} size={size} />;
};

export { CircularProgress };

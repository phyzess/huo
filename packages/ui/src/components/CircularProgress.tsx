import classnames from 'classnames';
import { FC } from 'react';
import { ScribblesSwirl1 } from '../icons';

interface ICircularProgressProps {
	className?: string;
}

const CircularProgress: FC<ICircularProgressProps> = ({ className }) => {
	const cls = classnames('inline-block animate-spin', className);
	return <ScribblesSwirl1 className={cls} />;
};

export { CircularProgress };

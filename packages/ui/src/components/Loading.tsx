import classnames from 'classnames';
import { FC, ReactElement, ReactNode } from 'react';
import { CircularProgress } from './CircularProgress';

const LOADING_CLS = 'huo-loading';

interface ILoading {
	loading?: boolean;
	loadingContentVisible?: boolean;
	inlineBlock?: boolean;
	className?: string;
	fullWidth?: boolean;
	size?: number;
	keepMountLoadingComp?: boolean;
	children?: ReactElement;
}
const Loading: FC<ILoading> = ({
	loadingContentVisible = false,
	inlineBlock = false,
	loading,
	className,
	fullWidth,
	children,
	size = 24,
	keepMountLoadingComp = true,
}) => {
	if (!loading && !keepMountLoadingComp) {
		return children ?? null;
	}

	const wrapperCls = classnames(
		LOADING_CLS,
		'relative',
		{
			'inline-block': inlineBlock,
			'w-fit': !fullWidth,
			'w-full': fullWidth,
		},
		className,
	);
	const contentCls = classnames(`${LOADING_CLS}__content`, 'inline-block', {
		'opacity-30': loading && loadingContentVisible,
		invisible: loading && !loadingContentVisible,
		'w-full': fullWidth,
	});
	const spinnerCls = classnames(`${LOADING_CLS}__spinner`, 'absolute inset-0 m-auto', {
		hidden: !loading,
	});

	return (
		<div className={wrapperCls}>
			<div className={contentCls}>{children}</div>
			<CircularProgress size={size} className={spinnerCls} />
		</div>
	);
};

export { Loading };

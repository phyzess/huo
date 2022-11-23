import classnames from 'classnames';
import { FC, ReactNode } from 'react';
import { CircularProgress } from './CircularProgress';

interface ILoading {
  loading?: boolean;
  loadingContentVisible?: boolean;
  inlineBlock?: boolean;
  className?: string;
  fullWidth?: boolean;
  children?: ReactNode;
}
const Loading: FC<ILoading> = ({
  loadingContentVisible = false,
  inlineBlock = false,
  loading,
  className,
  fullWidth,
  children,
}) => {
  const wrapperCls = classnames(
    'relative w-fit p-3',
    {
      'inline-block': inlineBlock,
      'w-full': fullWidth,
    },
    className
  );
  const contentCls = classnames('inline-block', {
    'opacity-30': loading && loadingContentVisible,
    invisible: loading && !loadingContentVisible,
    'w-full': fullWidth,
  });
  const spinnerCls = classnames('absolute inset-0 m-auto', {
    hidden: !loading,
  });

  return (
    <div className={wrapperCls}>
      <div className={contentCls}>{children}</div>
      <CircularProgress className={spinnerCls} />
    </div>
  );
};

export { Loading };

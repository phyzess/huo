import React, { memo } from 'react';

interface IPageBaseProps {
	children?: React.ReactNode;
}

const PageContainer = memo((props: IPageBaseProps) => {
	return <div className='mx-auto h-screen' {...props} />;
});

const PageHeaderContainer = memo((props: IPageBaseProps) => {
	return <div className='fixed left-0 flex justify-between items-center px-5 w-full h-[60px]' {...props} />;
});

export { PageContainer, PageHeaderContainer };

import React, { memo } from 'react';

interface IPageBaseProps {
	children?: React.ReactNode;
}

const PageContainer = memo((props: IPageBaseProps) => {
	return <div className='huo-page__container mx-auto h-screen overflow-hidden flex flex-col flex-nowrap' {...props} />;
});

const PageHeaderContainer = memo((props: IPageBaseProps) => {
	return (
		<div className='huo-page__header flex justify-between items-center px-5 w-full h-[60px] min-h-[60px]' {...props} />
	);
});

const PageContentContainer = memo((props: IPageBaseProps) => {
	return <div className='huo-page__content flex-1 w-full overflow-auto' {...props} />;
});

export { PageContainer, PageContentContainer, PageHeaderContainer };

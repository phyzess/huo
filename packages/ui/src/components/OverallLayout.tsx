import React, { memo } from 'react';

interface IOverallLayoutProps {
	children?: React.ReactNode;
}

const OverallLayout = memo((props: IOverallLayoutProps) => {
	return <div className='container mx-auto h-screen' {...props} />;
});

export { OverallLayout };

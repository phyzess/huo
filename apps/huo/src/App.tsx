import HuoSvg from '@/assets/huo.svg';
import { Image, PageContainer, PageHeaderContainer, themeChange, ThemeSwap } from '@phyzess/huo-ui';
import { useEffect } from 'react';

const App = () => {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<PageContainer>
			<PageHeaderContainer>
				<Image src={HuoSvg} width={30} height={30} />
				<ThemeSwap />
			</PageHeaderContainer>
		</PageContainer>
	);
};

export default App;

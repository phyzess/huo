import HuoSvg from '@/assets/huo.svg';
import { ROUTER_PATH as SEEDS_ROUTER_PATH } from '@/containers/seeds';
import { useNotionOAuthRequest } from '@/hooks';
import { appshellLoadingStatusAtom, notionOAuthAtom } from '@/recoils';
import {
	Image,
	Loading,
	PageContainer,
	PageContentContainer,
	PageHeaderContainer,
	themeChange,
	ThemeSwap,
} from '@phyzess/huo-ui';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { NotionOAuthLoginButton } from '../authorization';
import { ROUTER_PATH as ROOT_ROUTER_PATH } from './constants';

const Appshell = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [appSellLoadingState] = useRecoilState(appshellLoadingStatusAtom);
	const [notionOAuth] = useRecoilState(notionOAuthAtom);

	useEffect(() => {
		themeChange(false);
	}, []);

	useEffect(() => {
		if (notionOAuth && location.pathname === ROOT_ROUTER_PATH) {
			navigate(`${ROOT_ROUTER_PATH}${SEEDS_ROUTER_PATH}`);
		}
	}, [location, navigate, notionOAuth]);

	useNotionOAuthRequest();

	return (
		<PageContainer>
			<PageHeaderContainer>
				<Image src={HuoSvg} width={30} height={30} />
				<div className='flex'>
					<ThemeSwap />
					<NotionOAuthLoginButton />
				</div>
			</PageHeaderContainer>
			<PageContentContainer>
				<Loading fullWidth loading={appSellLoadingState === 'loading'} keepMountLoadingComp={false}>
					<Outlet />
				</Loading>
			</PageContentContainer>
		</PageContainer>
	);
};

export { Appshell };

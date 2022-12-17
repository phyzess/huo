import { Appshell, ROUTER_PATH } from '@/containers/appshell';
import { ROUTER_PATH as SEEDS_ROUTER_PATH, Seeds } from '@/containers/seeds';
import type { RouteObject } from 'react-router-dom';

const router: RouteObject = {
	path: ROUTER_PATH,
	element: <Appshell />,
	children: [
		{
			path: SEEDS_ROUTER_PATH,
			element: <Seeds />,
		},
	],
};

export { router };

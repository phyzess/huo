import { useEffect } from 'react';

const useDispose = <T extends Function>(func: T) => {
	useEffect(() => {
		return () => {
			func();
		};
	}, []);
};

export { useDispose };

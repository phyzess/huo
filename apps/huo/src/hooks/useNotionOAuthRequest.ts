import { requestNotionOauthToken } from '@/api';
import { appshellLoadingStatusAtom, notionOAuthAtom } from '@/recoils';
import { Nullable } from '@phyzess/huo-ui';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const useNotionOAuthRequest = () => {
	const [code, setCode] = useState<Nullable<string>>(null);
	const [searchParams, setSearchParams] = useSearchParams();

	const setAppshellLoadingStatus = useSetRecoilState(appshellLoadingStatusAtom);
	const setNotionOAuthAtom = useSetRecoilState(notionOAuthAtom);

	const { isSuccess, isError, data } = useQuery({
		queryKey: ['notionOAuth', code],
		queryFn: () => requestNotionOauthToken({ code: code ?? '' }),
		enabled: !!code,
	});

	useEffect(() => {
		if (searchParams.has('code') && searchParams.has('state')) {
			const code = searchParams.get('code');
			setAppshellLoadingStatus('loading');
			setCode(code);

			searchParams.delete('code');
			searchParams.delete('state');
			setSearchParams(searchParams);
		}
	}, []);

	useEffect(() => {
		if (isSuccess) {
			setNotionOAuthAtom(data);
			setAppshellLoadingStatus('success');
		}
	}, [data, isSuccess, setAppshellLoadingStatus, setNotionOAuthAtom]);

	useEffect(() => {
		if (isError) {
			setAppshellLoadingStatus('failed');
		}
	}, [isError, setAppshellLoadingStatus]);

	useEffect(() => {
		if (isSuccess || isError) {
			setCode(null);
		}
	}, [isSuccess, isError]);
};

export { useNotionOAuthRequest };

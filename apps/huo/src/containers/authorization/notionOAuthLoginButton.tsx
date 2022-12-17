import { notionOAuthAtom } from '@/recoils';
import { User } from '@carbon/icons-react';
import { memo } from 'react';
import { useRecoilState } from 'recoil';

const NotionOAuthLoginButton = memo(() => {
	const [notionOAuth] = useRecoilState(notionOAuthAtom);
	return notionOAuth ? null : (
		<a
			rel='noopener'
			title='notion auth'
			className='btn btn-square btn-ghost btn-sm'
			href='https://api.notion.com/v1/oauth/authorize?client_id=b0955376-6d51-4711-b7e1-280ba703afac&response_type=code&owner=user'
		>
			<User />
		</a>
	);
});

export { NotionOAuthLoginButton };

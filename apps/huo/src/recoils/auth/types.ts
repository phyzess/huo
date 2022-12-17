/**
 * * refer to: https://developers.notion.com/docs/authorization#step-4-notion-responds-with-an-access_token-and-some-additional-information
 */
interface INotionOAuth {
	access_token: string;
	token_type: 'bearer';
	bot_id: string;
	workspace_name: string;
	workspace_icon: string;
	workspace_id: string;
	owner: {
		type: 'user';
		user: {
			object: 'user';
			id: string;
			name: string;
			avatar_url: null;
			type: 'person' | 'bot';
			person: {
				email: string;
			};
		};
	};
	duplicated_template_id: null;
}

export type { INotionOAuth };

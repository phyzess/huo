import type {
	BlockObjectResponse,
	CreatePageParameters,
	DatabaseObjectResponse,
	GetPageResponse,
	ListBlockChildrenResponse,
	PageObjectResponse,
	ParagraphBlockObjectResponse,
	PartialBlockObjectResponse,
	RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { ArrayElement, UndefinedAble, ValueOf } from '@phyzess/huo-ui';

type ApiColor = ParagraphBlockObjectResponse['paragraph']['color'];

type CreatePageParametersChildren = Exclude<CreatePageParameters['children'], undefined>;

type CreatePageParametersProperties = CreatePageParameters['properties'];

type BlockObjectRequestUnion = ArrayElement<CreatePageParametersChildren>;

type PropertiesUnion = ValueOf<CreatePageParametersProperties>;

type RichTextItemRequest = ArrayElement<Extract<PropertiesUnion, { type?: UndefinedAble<'rich_text'> }>['rich_text']>;

type PickType<U, T> = Extract<
	U,
	{ type?: UndefinedAble<T> }
>;

type PickBlockObjectRequest<T extends BlockObjectRequestUnion['type']> = PickType<
	BlockObjectRequestUnion,
	T
>;

type BlockResponseResult = PartialBlockObjectResponse | BlockObjectResponse;

type BlockResponseResultEnhanced = BlockResponseResult & {
	children?: BlockResponseEnhanced;
};

type BlockResponseEnhanced = ListBlockChildrenResponse & {
	results: Array<
		BlockResponseResultEnhanced
	>;
};

interface INotionOAuthTokenParams {
	code: string;
	redirectUri?: string;
}

type MultiSelectDatabaseProperty = Extract<
	ValueOf<DatabaseObjectResponse['properties']>,
	{ type: 'multi_select' }
>;

type PageObjectResponseTags = Extract<
	ValueOf<PageObjectResponse['properties']>,
	{ type: 'multi_select' }
>;

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

export type { INotionOAuth, INotionOAuthTokenParams };

/** **** notionhq client api endpoints reexport ******/
export type {
	ApiColor,
	BlockResponseEnhanced,
	BlockResponseResultEnhanced,
	CreatePageParameters,
	GetPageResponse,
	ListBlockChildrenResponse,
	MultiSelectDatabaseProperty,
	PageObjectResponse,
	PageObjectResponseTags,
	PickBlockObjectRequest,
	PickType,
	RichTextItemRequest,
	RichTextItemResponse,
};

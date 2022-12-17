import type {
	ApiColor,
	PickBlockObjectRequest,
	PickType,
	RichTextItemRequest,
	RichTextItemResponse,
} from '@/api/notion';
import { E_ELEMENT, UndefinedAble } from '@phyzess/huo-ui';
import { ReactNode } from 'react';

interface IAnnotations {
	bold?: boolean;
	italic?: boolean;
	strikethrough?: boolean;
	underline?: boolean;
	code?: boolean;
	color?: ApiColor;
}

interface ILink {
	url: string;
}

type RichText = PickType<RichTextItemRequest, 'text'> & {
	text: {
		content: string;
		link: null;
	};
};

type LinkText = PickType<RichTextItemRequest, 'text'> & {
	text: {
		content: string;
		link: ILink;
	};
};

type ParagraphBlock = PickBlockObjectRequest<'paragraph'>;

type HeadingType = 'heading_1' | 'heading_2' | 'heading_3';
type HeadingBlock<T extends HeadingType> = PickBlockObjectRequest<T>;

type QuoteBlock = PickBlockObjectRequest<'quote'>;

type ListItemType = 'bulleted_list_item' | 'numbered_list_item';
type ListItemBlock<T extends ListItemType> = PickBlockObjectRequest<T>;

type ImageBlock = PickBlockObjectRequest<'image'> & {
	image: {
		external: {
			url: string;
			name?: string;
			mimeType?: string;
		};
		type: 'external';
		caption?: UndefinedAble<RichTextItemRequest[]>;
	};
};

type SyncedBlock = PickBlockObjectRequest<'synced_block'>;

type TBlockTypes =
	| ParagraphBlock
	| HeadingBlock<HeadingType>
	| QuoteBlock
	| ListItemBlock<ListItemType>
	| ImageBlock;

type SerializeNode =
	| ParagraphBlock
	| HeadingBlock<HeadingType>
	| QuoteBlock
	| ListItemBlock<ListItemType>
	| ImageBlock
	| RichText
	| LinkText
	| SyncedBlock;

type SerializeBlocks = Exclude<SerializeNode, RichText | LinkText>[];

type TBlockType = `${E_ELEMENT}`;

type TContentType = 'default' | 'file' | 'external';

interface ISeedDefaultBlock {
	type: Exclude<TBlockType, 'IMAGE'>;
	contentType: 'default';
	content: {
		rich_text: RichTextItemResponse[];
		color: ApiColor;
		children?: ReactNode;
	};
}

interface ISeedFileBlock {
	contentType: 'file';
	content: {
		type: 'file';
		file: { url: string; expiry_time: string };
		caption: Array<RichTextItemResponse>;
	};
}

interface ISeedExternalBlock {
	contentType: 'external';
	content: {
		type: 'external';
		external: { url: string };
		caption: Array<RichTextItemResponse>;
	};
}

type TSeedBlockContent = ISeedDefaultBlock | ISeedFileBlock | ISeedExternalBlock;

interface ISeedBlock<CT extends TSeedBlockContent['contentType'], T = TBlockType> {
	type: T;
	contentType: CT;
	content: Extract<TSeedBlockContent, { contentType: CT }>['content'];
	indentCoeff: number;
	siblingIndex: number;
	children?: TSeedBlockList;
}

type TSeedBlockItem = ISeedBlock<'default'> | ISeedBlock<'file'> | ISeedBlock<'external'>;

type TSeedBlockList = Array<TSeedBlockItem>;

interface ISeed {
	createdAt: string;
	tags: string[];
	content: TSeedBlockList;
}

export type {
	HeadingBlock,
	HeadingType,
	IAnnotations,
	ImageBlock,
	ISeed,
	ISeedBlock,
	ISeedDefaultBlock,
	LinkText,
	ListItemBlock,
	ListItemType,
	ParagraphBlock,
	QuoteBlock,
	RichText,
	SerializeBlocks,
	SerializeNode,
	TBlockType,
	TBlockTypes,
	TContentType,
	TSeedBlockItem,
	TSeedBlockList,
};

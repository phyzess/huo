import { Descendant, E_ELEMENT, IBaseTextElement, ILinkElement, SlateText } from '@phyzess/huo-ui';
import type {
	CustomElement,
	CustomText,
	IHeadingElement,
	IImageElement,
	IListElement,
	IListItemElement,
} from '@phyzess/huo-ui';
import { BLOCK_TYPE_ENUM } from '../constants';
import {
	HeadingBlock,
	HeadingType,
	ImageBlock,
	LinkText,
	ListItemBlock,
	ListItemType,
	ParagraphBlock,
	QuoteBlock,
	RichText,
	SerializeBlocks,
	SerializeNode,
} from '../types';
import { genNodeAnnotations } from './annotations';

const serializeRichText = (node: CustomText): RichText => {
	const annotations = genNodeAnnotations(node);
	return {
		type: 'text',
		text: {
			content: node.text,
			link: null,
		},
		annotations,
	};
};

const serializeParagraph = (node: CustomElement, children: RichText[]): ParagraphBlock => {
	return {
		type: 'paragraph',
		paragraph: {
			rich_text: children,
		},
	};
};

const serializeHeading = (
	node: IHeadingElement,
	children: RichText[],
): HeadingBlock<HeadingType> => {
	let type: HeadingType;
	switch (node.type) {
		case E_ELEMENT.HEADING_ONE:
			type = BLOCK_TYPE_ENUM.HEADING_ONE;
			break;
		case E_ELEMENT.HEADING_TWO:
			type = BLOCK_TYPE_ENUM.HEADING_TWO;
			break;
		default:
			type = BLOCK_TYPE_ENUM.HEADING_THREE;
			break;
	}
	return {
		type,
		[type]: {
			rich_text: children,
		},
	} as unknown as HeadingBlock<HeadingType>;
};

const serializeBlockQuote = (node: CustomElement, children: RichText[]): QuoteBlock => {
	return {
		type: 'quote',
		quote: {
			rich_text: children,
		},
	};
};

const serializeImage = (node: IImageElement, children: any): ImageBlock => {
	return {
		type: BLOCK_TYPE_ENUM.IMAGE,
		image: {
			type: 'external',
			external: {
				url: node.url,
				name: node.name,
				mimeType: node.mimeType,
			},
		},
	};
};

const serializeLink = (node: ILinkElement, children: RichText[]): LinkText[] =>
	children.map((richText) => {
		return {
			...richText,
			text: {
				...richText.text,
				link: {
					type: 'url',
					url: node.url,
				},
			},
		};
	});

const serializeListItem = (
	node: IListItemElement,
	children: RichText[],
): ListItemBlock<ListItemType> => {
	const appendChildren = children.slice(1);

	switch (node.parentType) {
		case E_ELEMENT.BULLETED_LIST:
			return {
				type: 'bulleted_list_item',
				bulleted_list_item: {
					rich_text: [children[0]],
					children: (appendChildren.length !== 0 ? appendChildren : undefined) as any,
				},
			};
		default:
			return {
				type: 'numbered_list_item',
				numbered_list_item: {
					rich_text: [children[0]],
					children: (appendChildren.length !== 0 ? appendChildren : undefined) as any,
				},
			};
	}
};

const serializeList = (node: IListElement, children: RichText[]) => {
	let type: ListItemType;
	switch (node.type) {
		case E_ELEMENT.BULLETED_LIST:
			type = BLOCK_TYPE_ENUM.BULLETED_LIST;
			break;
		default:
			type = BLOCK_TYPE_ENUM.NUMBERED_LIST;
			break;
	}
	return children;
};

/**
 * process with list children
 */
const preSerializeChildren = (node: CustomElement): (CustomText | IListItemElement)[] => {
	if (node.type !== E_ELEMENT.NUMBERED_LIST && node.type !== E_ELEMENT.BULLETED_LIST) {
		return (node as Exclude<CustomElement, IListElement>).children;
	}
	const children: IListItemElement[] = [];
	node.children.forEach((cur) => {
		if (cur.type === E_ELEMENT.LIST_ITEM) {
			children.push(cur);
			return;
		}
		const lastSibling = children.pop();
		if (!lastSibling) {
			return;
		}
		const newChildren = preSerializeChildren(cur);
		const newLastSibling = {
			...lastSibling,
			children: lastSibling.children.concat(newChildren),
		};
		return children.push(newLastSibling);
	});
	return children;
};

const serializeTag = (node: IBaseTextElement, savedTags: string[]) => {
	savedTags.push(node.children[0].text);
	return undefined;
};

const serializeItem = (node: CustomElement | CustomText, tags: string[]) => {
	if (SlateText.isText(node)) {
		return serializeRichText(node);
	}

	const childrenPreSerialized = preSerializeChildren(node);
	const children: SerializeNode[] = childrenPreSerialized
		.map((n) => serializeItem(n, tags))
		.reduce<SerializeNode[]>((reduced, serialized) => {
			if (!serialized) {
				return reduced;
			}
			return reduced.concat(serialized);
		}, []);

	switch (node.type) {
		case E_ELEMENT.PARAGRAPH:
			return serializeParagraph(node, children as unknown as RichText[]);
		case E_ELEMENT.HEADING_ONE:
		case E_ELEMENT.HEADING_TWO:
		case E_ELEMENT.HEADING_THREE:
			return serializeHeading(node, children as unknown as RichText[]);
		case E_ELEMENT.BLOCK_QUOTE:
			return serializeBlockQuote(node, children as unknown as RichText[]);
		case E_ELEMENT.IMAGE:
			return serializeImage(node, children);
		case E_ELEMENT.LINK:
			return serializeLink(node, children as unknown as RichText[]);
		case E_ELEMENT.LIST_ITEM:
			return serializeListItem(node, children as any);
		case E_ELEMENT.NUMBERED_LIST:
		case E_ELEMENT.BULLETED_LIST:
			return serializeList(node, children as any);
		case E_ELEMENT.TAG:
			return serializeTag(node, tags);
		default:
			return children;
	}
};

const serialize = (
	descendants: Descendant[],
): {
	tags: string[];
	children: SerializeBlocks;
} => {
	const tags: string[] = [];
	const children = serializeItem({ children: descendants } as any, tags) as SerializeBlocks;
	return {
		tags,
		children,
	};
};

export { serialize };

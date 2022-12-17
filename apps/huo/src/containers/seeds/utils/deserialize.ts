import { BlockResponseEnhanced, BlockResponseResultEnhanced, GetPageResponse } from '@/api/notion';
import { E_ELEMENT, UndefinedAble } from '@phyzess/huo-ui';
import dayjs from 'dayjs';
import { BLOCK_TYPE_ENUM } from '../constants';
import { ISeed, ISeedBlock, TSeedBlockItem, TSeedBlockList } from '../types';

const getFallbackItem = (indentCoeff: number): ISeedBlock<'default'> => ({
	type: 'PARAGRAPH',
	contentType: 'default',
	indentCoeff,
	siblingIndex: 0,
	content: {
		rich_text: [],
		color: 'default',
	},
});

const getSiblingIndex = (siblingsBefore: TSeedBlockItem[], type: E_ELEMENT) => {
	const sameTypeSiblingBefore = siblingsBefore.filter((sibling) => sibling.type === type);
	return sameTypeSiblingBefore.length + 1;
};

const deserializeItem = (
	item: BlockResponseResultEnhanced,
	siblingsBefore: TSeedBlockItem[],
	indentCoeff: number,
): TSeedBlockItem => {
	if (!('type' in item)) {
		return getFallbackItem(indentCoeff);
	}

	let children: TSeedBlockList = [];
	if (item['has_children']) {
		children = item.children?.results.reduce(
			(acc: TSeedBlockItem[], result: BlockResponseResultEnhanced): TSeedBlockItem[] => {
				return [...acc, deserializeItem(result, acc, indentCoeff + 1)];
			},
			[],
		) ?? [];
	}

	switch (item.type) {
		case BLOCK_TYPE_ENUM.BLOCK_QUOTE: {
			const siblingIndex = getSiblingIndex(siblingsBefore, E_ELEMENT.BLOCK_QUOTE);

			const result: ISeedBlock<'default'> = {
				type: E_ELEMENT.BLOCK_QUOTE,
				contentType: 'default',
				content: item[item.type],
				children,
				indentCoeff,
				siblingIndex,
			};
			return result;
		}

		case BLOCK_TYPE_ENUM.HEADING_ONE: {
			const siblingIndex = getSiblingIndex(siblingsBefore, E_ELEMENT.HEADING_ONE);

			const result: ISeedBlock<'default'> = {
				type: E_ELEMENT.HEADING_ONE,
				contentType: 'default',
				content: item[item.type],
				children,
				indentCoeff,
				siblingIndex,
			};
			return result;
		}

		case BLOCK_TYPE_ENUM.HEADING_TWO: {
			const siblingIndex = getSiblingIndex(siblingsBefore, E_ELEMENT.HEADING_TWO);

			const result: ISeedBlock<'default'> = {
				type: E_ELEMENT.HEADING_TWO,
				contentType: 'default',
				content: item[item.type],
				children,
				indentCoeff,
				siblingIndex,
			};
			return result;
		}

		case BLOCK_TYPE_ENUM.HEADING_THREE: {
			const siblingIndex = getSiblingIndex(siblingsBefore, E_ELEMENT.HEADING_THREE);

			const result: ISeedBlock<'default'> = {
				type: E_ELEMENT.HEADING_THREE,
				contentType: 'default',
				content: item[item.type],
				children,
				indentCoeff,
				siblingIndex,
			};
			return result;
		}

		case BLOCK_TYPE_ENUM.IMAGE: {
			const siblingIndex = getSiblingIndex(siblingsBefore, E_ELEMENT.IMAGE);

			const result = {
				type: E_ELEMENT.IMAGE,
				contentType: 'file',
				content: item[item.type],
				children,
				indentCoeff,
				siblingIndex,
			};

			if (item.image.type === 'external') {
				result.contentType = 'external';
				return result as ISeedBlock<'external'>;
			}

			return result as ISeedBlock<'file'>;
		}

		case BLOCK_TYPE_ENUM.BULLETED_LIST: {
			const siblingIndex = getSiblingIndex(siblingsBefore, E_ELEMENT.BULLETED_LIST);

			const result: ISeedBlock<'default'> = {
				type: E_ELEMENT.BULLETED_LIST,
				contentType: 'default',
				content: item[item.type],
				children,
				indentCoeff,
				siblingIndex,
			};
			return result;
		}

		case BLOCK_TYPE_ENUM.NUMBERED_LIST: {
			const siblingIndex = getSiblingIndex(siblingsBefore, E_ELEMENT.NUMBERED_LIST);

			const result: ISeedBlock<'default'> = {
				type: E_ELEMENT.NUMBERED_LIST,
				contentType: 'default',
				content: item[item.type],
				children,
				indentCoeff,
				siblingIndex,
			};
			return result;
		}

		case BLOCK_TYPE_ENUM.PARAGRAPH: {
			const siblingIndex = getSiblingIndex(siblingsBefore, E_ELEMENT.PARAGRAPH);

			const result: ISeedBlock<'default'> = {
				type: E_ELEMENT.PARAGRAPH,
				contentType: 'default',
				content: item[item.type],
				children,
				indentCoeff,
				siblingIndex,
			};
			return result;
		}
		default: {
			return getFallbackItem(indentCoeff);
		}
	}
};

const deserialize = (
	page: UndefinedAble<GetPageResponse>,
	blocks: UndefinedAble<BlockResponseEnhanced>,
): UndefinedAble<ISeed> => {
	if (!page || !('properties' in page)) {
		return undefined;
	}

	let tags: string[] = [];
	if (
		page['properties']['Tags']
		&& page['properties']['Tags'].type === 'multi_select'
	) {
		tags = page['properties']['Tags'].multi_select.map((tag) => tag.name);
	}

	const content: TSeedBlockList = blocks?.results
		.reduce((acc: TSeedBlockItem[], result) => {
			return [...acc, deserializeItem(result, acc, 0)];
		}, [])
		.filter((_) => !!_) ?? [];

	return {
		createdAt: dayjs(page.created_time).format('YYYY/MM/DD HH:mm:ss'),
		tags,
		content,
	};
};

export { deserialize };

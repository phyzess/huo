import { notion } from '@/api/notion';
import type { BlockResponseEnhanced } from '@/api/notion';
import { UndefinedAble } from '@phyzess/huo-ui';
import { useQuery } from '@tanstack/react-query';

const retrieveBlocksChildren = async (
	blockId: string,
	recursive = false,
): Promise<UndefinedAble<BlockResponseEnhanced>> => {
	const blocks = await notion.getInstance()?.blocks.children.list({ block_id: blockId });

	if (recursive && blocks) {
		blocks.results = await Promise.all(
			blocks.results.map(async (result) => {
				if ('has_children' in result && result.has_children) {
					const children = await retrieveBlocksChildren(
						result.id,
						recursive,
					);
					return {
						...result,
						children,
					};
				}
				return result;
			}),
		);
	}

	return blocks;
};

const useBlocks = (blockId: string, recursive = false) => {
	const result = useQuery({
		queryKey: ['blocks', blockId],
		queryFn: ({ queryKey: [_, blockId] }) => retrieveBlocksChildren(blockId, recursive),
	});

	return result;
};

export { useBlocks };

import { notion } from '@/api/notion';
import { useQuery } from '@tanstack/react-query';
import { useBlocks } from './useBlocks';

const useSeed = (seedId: string) => {
	const { isLoading: isPageLoading, isSuccess: isPageSuccess, data: page } = useQuery({
		queryKey: ['seedItem', seedId],
		queryFn: ({ queryKey: [_, seedId] }) => notion.getInstance()?.pages.retrieve({ page_id: seedId }),
		enabled: !!seedId,
	});

	const { isLoading: isBlocksLoading, isSuccess: isBlocksSuccess, data: blocks } = useBlocks(seedId, true);

	return {
		isLoading: isPageLoading || isBlocksLoading,
		isSuccess: isPageSuccess && isBlocksSuccess,
		page,
		blocks,
	};
};

export { useSeed };

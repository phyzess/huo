import { notion, PageObjectResponseTags } from '@/api/notion';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { SEED_DEFAULT_TAG, SEED_NOTION_DB_ID } from '../constants';
import { group } from '../utils';

const useSeedsList = ({
	itemNumberPerGroup = 1,
	filterTag = 'all',
}: {
	itemNumberPerGroup?: number;
	filterTag?: string;
}) => {
	const { isLoading, data } = useQuery({
		queryKey: ['seeds', SEED_NOTION_DB_ID],
		queryFn: ({ queryKey: [_, dbId] }) =>
			notion.getInstance()?.databases.query({
				database_id: dbId,
				filter: {
					and: [
						{
							property: 'Tags',
							multi_select: {
								contains: SEED_DEFAULT_TAG.name,
							},
						},
					],
				},
				sorts: [
					{
						timestamp: 'created_time',
						direction: 'descending',
					},
				],
			}),
	});

	const filterByTag = useMemo(() =>
		filterTag !== 'all'
			? data?.results?.filter((result) => {
				if (!('properties' in result)) {
					return false;
				}
				const tags = result.properties['Tags'] as PageObjectResponseTags;
				return tags?.multi_select?.findIndex((opt) => opt.name === filterTag) !== -1;
			})
			: data?.results, [data?.results, filterTag]);

	const seeds = useMemo(() => group(filterByTag ?? [], itemNumberPerGroup), [filterByTag, itemNumberPerGroup]);

	return { isLoading, seeds };
};

export { useSeedsList };

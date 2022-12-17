import { notion } from '@/api/notion';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { SEED_DEFAULT_TAG, SEED_NOTION_DB_ID } from '../constants';
import { group } from '../utils';

const useSeedsList = ({
	itemNumberPerGroup = 1,
}: {
	itemNumberPerGroup?: number;
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

	const seeds = useMemo(() => group(data?.results ?? [], itemNumberPerGroup), [data?.results, itemNumberPerGroup]);

	return { isLoading, seeds };
};

export { useSeedsList };

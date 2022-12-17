import { notion } from '@/api/notion';
import type { MultiSelectDatabaseProperty } from '@/api/notion';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { SEED_NOTION_DB_ID } from '../constants';

const useSeedsRetrieve = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['seeds', 'retrieve', SEED_NOTION_DB_ID],
		queryFn: ({ queryKey: [, , dbId] }) => notion.getInstance()?.databases.retrieve({ database_id: dbId }),
	});

	const tags = useMemo<MultiSelectDatabaseProperty['multi_select']['options']>(() => {
		const tagsProperty = data?.properties['Tags'] as MultiSelectDatabaseProperty;
		return tagsProperty?.multi_select?.options ?? [];
	}, [
		data?.properties,
	]);

	return { isLoading, database: data, tags };
};

export { useSeedsRetrieve };

import { CreatePageParameters } from '@/api/notion';
import dayjs from 'dayjs';
import { SEED_DEFAULT_TAG, SEED_NOTION_DB_ID } from '../constants';

const createSeed = (
	newSeed: CreatePageParameters['children'],
	tags: string[],
): CreatePageParameters => {
	const day = dayjs();
	return {
		parent: {
			database_id: SEED_NOTION_DB_ID,
		},
		properties: {
			Name: {
				title: [
					{
						text: {
							content: `${SEED_DEFAULT_TAG.name} ${day.format('YYYY-MM-DD HH:mm:ss')}`,
						},
					},
				],
			},
			Tags: {
				type: 'multi_select',
				multi_select: [
					SEED_DEFAULT_TAG,
					...tags.map((tag) => ({
						name: tag,
					})),
				],
			},
			Date: {
				type: 'date',
				date: {
					start: day.toISOString(),
					end: null,
					time_zone: null,
				},
			},
		},
		children: newSeed,
	};
};

export { createSeed };

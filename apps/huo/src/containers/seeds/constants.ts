import { getEnv } from '@/envTokens';

const SEEDS_CLS_PREFIX = 'huo-seeds';

const ROUTER_PATH = 'seeds';

enum BLOCK_TYPE_ENUM {
	PARAGRAPH = 'paragraph',
	HEADING_ONE = 'heading_1',
	HEADING_TWO = 'heading_2',
	HEADING_THREE = 'heading_3',
	BLOCK_QUOTE = 'quote',
	NUMBERED_LIST = 'numbered_list_item',
	BULLETED_LIST = 'bulleted_list_item',
	IMAGE = 'image',
	SYNCED_BLOCK = 'synced_block',
}

const SEED_DEFAULT_TAG = {
	name: 'seed',
};

const SEED_NOTION_DB_ID = getEnv('HUO_SEED_NOTION_DB_ID');

export { BLOCK_TYPE_ENUM, ROUTER_PATH, SEED_DEFAULT_TAG, SEED_NOTION_DB_ID, SEEDS_CLS_PREFIX };

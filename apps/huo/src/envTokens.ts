interface ImportMetaEnv {
	readonly HUO_ALI_OSS_SEED_ACCESS_KEY_ID: string;
	readonly HUO_ALI_OSS_SEED_ACCESS_KEY_SECRET: string;
	readonly HUO_NOTION_CLIENT_ID: string;
	readonly HUO_NOTION_CLIENT_SECRET: string;
	readonly HUO_SEED_NOTION_DB_ID: string;
}

const getEnv = (key: keyof ImportMetaEnv) => import.meta.env[key];

export { getEnv };

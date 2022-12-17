import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const CORS_WORKER = 'https://cors-worker.phyzess.workers.dev';
const CORS_WORKER_DEV = 'http://127.0.0.1:8787';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		envPrefix: 'HUO',
		plugins: [
			basicSsl(),
			tsconfigPaths(),
			react(),
		],
		server: {
			https: true,
			host: '127.0.0.1',
			port: 3001,
			open: true,
			cors: true,
			proxy: {
				'^/corsproxy/.*': {
					// target: CORS_WORKER,
					target: CORS_WORKER_DEV,
					changeOrigin: true,
				},
			},
		},
	};
});

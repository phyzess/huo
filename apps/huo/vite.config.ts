import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [tsconfigPaths(), react()],
		server: {
			host: '127.0.0.1',
			port: 3001,
			open: true,
			cors: true,
		},
	};
});

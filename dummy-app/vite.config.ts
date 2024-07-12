import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from 'node:url';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 8084
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		sourcemap: true,
		manifest: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/main.ts')
			},
			output: {
				dir: './dist/dummy-app',
				entryFileNames: '[name].js',
				assetFileNames: '[name][extname]'
			}
		},
	}
})

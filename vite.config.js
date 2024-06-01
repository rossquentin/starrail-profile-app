import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	root: './src',
	server: {
		fs: {
			allow: [
				'./static',
			]
		}
	},
	build: {
		outDir: 'public',
		emptyOutDir: true,
	}
});

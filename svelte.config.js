import { sveltePreprocess } from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

const config = {
	preprocess: sveltePreprocess({
		scss: {}
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;

import createStaticAdapter from "@sveltejs/adapter-static";
import {vitePreprocess as createVitePreprocess} from "@sveltejs/vite-plugin-svelte";
const staticAdapter = createStaticAdapter();
const vitePreprocess = createVitePreprocess();

/** @type {import("@sveltejs/kit").Config} */
const svelteConfig = {
	kit: {
		adapter: staticAdapter,
		files: {
			assets: "./src/static",
		},
	},
	preprocess: vitePreprocess,
};

export default svelteConfig;

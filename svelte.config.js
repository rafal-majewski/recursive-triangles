import createStaticAdapter from "@sveltejs/adapter-static";
import {vitePreprocess as createVitePreprocess} from "@sveltejs/vite-plugin-svelte";
const staticAdapter = createStaticAdapter();
const vitePreprocess = createVitePreprocess();

function determineBase() {
	if (process.env["GITHUB_ACTIONS"] === "true") {
		return "/recursive-triangles";
	}

	return "";
}

const base = determineBase();

/** @type {import("@sveltejs/kit").Config} */
const svelteConfig = {
	kit: {
		adapter: staticAdapter,
		files: {
			assets: "./src/static",
		},
		paths: {
			base,
		},
	},
	preprocess: vitePreprocess,
};

export default svelteConfig;

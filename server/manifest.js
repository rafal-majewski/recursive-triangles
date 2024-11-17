const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.Cuizi-QJ.js","app":"_app/immutable/entry/app.DWyX_Dxh.js","imports":["_app/immutable/entry/start.Cuizi-QJ.js","_app/immutable/chunks/entry.BmlftndO.js","_app/immutable/chunks/runtime.PpVUs9l6.js","_app/immutable/entry/app.DWyX_Dxh.js","_app/immutable/chunks/runtime.PpVUs9l6.js","_app/immutable/chunks/store.BIpUktQj.js","_app/immutable/chunks/disclose-version.gPFD8Ba8.js","_app/immutable/chunks/if.A4QjoaoA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-LwdihMxT.js')),
			__memo(() => import('./chunks/1-CcfXtxFz.js')),
			__memo(() => import('./chunks/2-CxiSDSLt.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

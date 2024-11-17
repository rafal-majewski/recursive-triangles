import { I as push, S as escape_html, T as store_get, V as unsubscribe_stores, K as pop } from './index-DKhKtWRp.js';
import { p as page } from './stores-DxbGYt71.js';
import './exports-CTha0ECg.js';

function Error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</p>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-vLpS1KSk.js.map

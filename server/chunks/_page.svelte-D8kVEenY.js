import { I as push, T as store_get, W as ensure_array_like, S as escape_html, K as pop, X as add_styles, V as unsubscribe_stores } from './index-DKhKtWRp.js';
import { p as page } from './stores-DxbGYt71.js';
import './exports-CTha0ECg.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function getNumberFromUrlSearchParams(params, parameterName) {
  const parameterValues = params.getAll(parameterName);
  if (parameterValues.length > 1) {
    return null;
  }
  const [parameterValue] = parameterValues;
  if (typeof parameterValue === "undefined") {
    return null;
  }
  const parameterValueAsNumber = Number(parameterValue);
  if (Number.isNaN(parameterValueAsNumber)) {
    return null;
  }
  return parameterValueAsNumber;
}
function getStringFromUrlSearchParams(params, parameterName) {
  const parameterValues = params.getAll(parameterName);
  if (parameterValues.length > 1) {
    return null;
  }
  const [parameterValue] = parameterValues;
  if (typeof parameterValue === "undefined") {
    return null;
  }
  return parameterValue;
}
function getTriangleAlgorithmFromUrlSearchParams(params, triangleAlgorithms, algorithmIdParameterName) {
  const algorithmId = getStringFromUrlSearchParams(params, algorithmIdParameterName);
  if (algorithmId === null) {
    return null;
  }
  return triangleAlgorithms[algorithmId] ?? null;
}
function parseQueryFromUrlSearchParams(params, algorithmParameterName, colorCountParameterName, supportedAlgorithms) {
  const algorithm = getTriangleAlgorithmFromUrlSearchParams(
    params,
    supportedAlgorithms,
    algorithmParameterName
  );
  const colorCount = getNumberFromUrlSearchParams(params, colorCountParameterName);
  return {
    algorithm,
    colorCount
  };
}
function computeColor(cell, colorCount) {
  return `hsl(${Number(cell % BigInt(colorCount)) * (360 / colorCount)}, 100%, 50%)`;
}
function TriangleRowCellDisplayer($$payload, $$props) {
  push();
  const { cell, colorCount } = $$props;
  const color = computeColor(cell, colorCount);
  $$payload.out += `<span${add_styles({ "background-color": color })} class="cell svelte-1v5xkt0">${escape_html(cell)}</span>`;
  pop();
}
function TriangleRowDisplayer($$payload, $$props) {
  const { row, colorCount } = $$props;
  const each_array = ensure_array_like(row);
  $$payload.out += `<div class="row svelte-1tt7hn9"><!--[-->`;
  for (let cellIndex = 0, $$length = each_array.length; cellIndex < $$length; cellIndex++) {
    let cell = each_array[cellIndex];
    TriangleRowCellDisplayer($$payload, { cell, colorCount });
  }
  $$payload.out += `<!--]--></div>`;
}
function computeExpandedTriangle(triangle, computeNextRow) {
  const nextRow = computeNextRow(triangle);
  return [...triangle, nextRow];
}
function createTriangleAnimator(initialComputeNextTriangleRow) {
  let triangle = [];
  let computeNextTriangleRow = initialComputeNextTriangleRow;
  function animate() {
    triangle = computeExpandedTriangle(triangle, computeNextTriangleRow);
  }
  function setAnimationInterval() {
    const intervalId2 = setInterval(animate, 1e3);
    return intervalId2;
  }
  let intervalId = setAnimationInterval();
  function changeComputeNextTriangleRow(newComputeNextTriangleRow) {
    computeNextTriangleRow = newComputeNextTriangleRow;
    triangle = [];
    clearInterval(intervalId);
    intervalId = setAnimationInterval();
  }
  return {
    get triangle() {
      return triangle;
    },
    changeComputeNextTriangleRow
  };
}
function TriangleDisplayer($$payload, $$props) {
  push();
  const { computeNextTriangleRow, colorCount } = $$props;
  const triangleAnimator = createTriangleAnimator(computeNextTriangleRow);
  const each_array = ensure_array_like(triangleAnimator.triangle);
  $$payload.out += `<div class="triangle-displayer svelte-17nlpx9"><div class="triangle-displayer__content svelte-17nlpx9"><!--[-->`;
  for (let rowIndex = 0, $$length = each_array.length; rowIndex < $$length; rowIndex++) {
    let row = each_array[rowIndex];
    TriangleRowDisplayer($$payload, { row, colorCount });
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function QueryFormAlgorithmSelect($$payload, $$props) {
  const {
    currentAlgorithmId,
    supportedAlgorithms,
    parameterName
  } = $$props;
  const each_array = ensure_array_like(Object.values(supportedAlgorithms));
  $$payload.out += `<label>Algorithm: <select${attr("name", parameterName)}>`;
  if (currentAlgorithmId === null) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<option value="" disabled selected></option>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let supportedAlgorithm = each_array[$$index];
    $$payload.out += `<option${attr("value", supportedAlgorithm.id)}${attr("selected", currentAlgorithmId === supportedAlgorithm.id, true)}>${escape_html(supportedAlgorithm.name)}</option>`;
  }
  $$payload.out += `<!--]--></select></label>`;
}
function QueryFormColorCountInput($$payload, $$props) {
  const { currentColorCount, parameterName } = $$props;
  $$payload.out += `<label>Color count: <input type="number"${attr("name", parameterName)} min="1"${attr("value", currentColorCount ?? 1)}></label>`;
}
function QueryForm($$payload, $$props) {
  push();
  const {
    currentQuery,
    supportedAlgorithms,
    algorithmIdUrlSearchParameterName,
    colorCountUrlSearchParameterName
  } = $$props;
  $$payload.out += `<form><div>`;
  QueryFormAlgorithmSelect($$payload, {
    currentAlgorithmId: currentQuery.algorithm?.id ?? null,
    supportedAlgorithms,
    parameterName: algorithmIdUrlSearchParameterName
  });
  $$payload.out += `<!----> `;
  QueryFormColorCountInput($$payload, {
    currentColorCount: currentQuery.colorCount,
    parameterName: colorCountUrlSearchParameterName
  });
  $$payload.out += `<!----></div> <button type="submit">Apply</button></form>`;
  pop();
}
function Page($$payload, $$props) {
  push();
  const {
    supportedAlgorithms,
    colorCountUrlSearchParameterName,
    algorithmIdUrlSearchParameterName,
    query
  } = $$props;
  $$payload.out += `<main>`;
  QueryForm($$payload, {
    currentQuery: query,
    supportedAlgorithms,
    colorCountUrlSearchParameterName,
    algorithmIdUrlSearchParameterName
  });
  $$payload.out += `<!----> `;
  if (query.algorithm !== null && query.colorCount !== null) {
    $$payload.out += "<!--[-->";
    TriangleDisplayer($$payload, {
      computeNextTriangleRow: query.algorithm.computeNextTriangleRow,
      colorCount: query.colorCount
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
function pascalComputeNextTriangleRow(triangle) {
  const newRow = [];
  if (triangle.length === 0) {
    newRow.push(1n);
  } else {
    for (let cellIndex = 0; cellIndex <= triangle[triangle.length - 1].length; cellIndex += 1) {
      const leftAboveCell = triangle[triangle.length - 1][cellIndex - 1] ?? 0n;
      const rightAboveCell = triangle[triangle.length - 1][cellIndex] ?? 0n;
      newRow.push(leftAboveCell + rightAboveCell);
    }
  }
  return newRow;
}
const pascalTriangleAlgorithm = {
  id: "pascal",
  name: "Pascal's",
  computeNextTriangleRow: pascalComputeNextTriangleRow
};
function computeBinomialCoefficient(n, k) {
  if (k === 0n || k === n) {
    return 1n;
  }
  let accumulatedResult = 1n;
  for (let i = 1n; i <= k; i += 1n) {
    accumulatedResult *= n - i + 1n;
  }
  for (let i = 1n; i <= k; i += 1n) {
    accumulatedResult /= i;
  }
  return accumulatedResult;
}
function surjectionCountComputeNextTriangleRow(triangle) {
  const newRow = [];
  const n = BigInt(triangle.length) + 1n;
  for (let m = 1n; m <= n; m += 1n) {
    let accumulatedCell = 0n;
    for (let k = 0n; k <= m; k += 1n) {
      accumulatedCell += (-1n) ** k * computeBinomialCoefficient(m, k) * (m - k) ** n;
    }
    newRow.push(accumulatedCell);
  }
  return newRow;
}
const surjectionCountTriangleAlgorithm = {
  id: "surjection-count",
  name: "Surjection count",
  computeNextTriangleRow: surjectionCountComputeNextTriangleRow
};
const supportedTriangleAlgorithms = {
  [pascalTriangleAlgorithm.id]: pascalTriangleAlgorithm,
  [surjectionCountTriangleAlgorithm.id]: surjectionCountTriangleAlgorithm
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const algorithmIdUrlSearchParameterName = "algorithm";
  const colorCountUrlSearchParameterName = "color-count";
  const query = parseQueryFromUrlSearchParams(store_get($$store_subs ??= {}, "$page", page).url.searchParams, algorithmIdUrlSearchParameterName, colorCountUrlSearchParameterName, supportedTriangleAlgorithms);
  Page($$payload, {
    query,
    colorCountUrlSearchParameterName,
    algorithmIdUrlSearchParameterName,
    supportedAlgorithms: supportedTriangleAlgorithms
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D8kVEenY.js.map

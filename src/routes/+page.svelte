<script lang="ts">
	import {page} from "$app/stores";
	import Page from "../lib/page/Page.svelte";
	import type {Query} from "../lib/query/Query.ts";
	import {getTriangleAlgorithmFromUrlSearchParams} from "../lib/query/getTriangleAlgorithmFromUrlSearchParams.ts";
	import {parseQueryFromUrlSearchParams} from "../lib/query/parseQueryFromUrlSearchParams.ts";
	import {supportedTriangleAlgorithms} from "../lib/supported-triangle-algorithms/supportedTriangleAlgorithms.ts";
	const algorithmIdUrlSearchParameterName = "algorithm";
	const colorCountUrlSearchParameterName = "color-count";

	const query: Query = $derived<Query>(
		parseQueryFromUrlSearchParams(
			$page.url.searchParams,
			algorithmIdUrlSearchParameterName,
			colorCountUrlSearchParameterName,
			supportedTriangleAlgorithms,
		),
	);
</script>

<Page
	{query}
	{colorCountUrlSearchParameterName}
	{algorithmIdUrlSearchParameterName}
	supportedAlgorithms={supportedTriangleAlgorithms}
/>

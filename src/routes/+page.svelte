<script lang="ts">
	import {building as isBeingBuilt} from "$app/environment";
	import {page} from "$app/stores";
	import Page from "../lib/page/Page.svelte";
	import type {Query} from "../lib/query/Query.ts";
	import {parseQueryFromUrlSearchParams} from "../lib/query/parseQueryFromUrlSearchParams.ts";
	import {supportedTriangleAlgorithms} from "../lib/supported-triangle-algorithms/supportedTriangleAlgorithms.ts";
	const algorithmIdUrlSearchParameterName = "algorithm";
	const colorCountUrlSearchParameterName = "color-count";

	function determineQuery(): Query | null {
		if (isBeingBuilt) {
			return null;
		}

		return parseQueryFromUrlSearchParams(
			$page.url.searchParams,
			algorithmIdUrlSearchParameterName,
			colorCountUrlSearchParameterName,
			supportedTriangleAlgorithms,
		);
	}

	const query: Query | null = $derived<Query | null>(determineQuery());
</script>

<Page
	{query}
	{colorCountUrlSearchParameterName}
	{algorithmIdUrlSearchParameterName}
	supportedAlgorithms={supportedTriangleAlgorithms}
/>

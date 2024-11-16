<script lang="ts">
	import {page} from "$app/stores";
	import Page from "../lib/page/Page.svelte";
	import {getTriangleAlgorithmFromUrlSearchParams} from "../lib/query/getTriangleAlgorithmFromUrlSearchParams.ts";
	import {supportedTriangleAlgorithms} from "../lib/supported-triangle-algorithms/supportedTriangleAlgorithms.ts";
	import type {TriangleAlgorithm} from "../lib/triangle-algorithms/TriangleAlgorithm.ts";
	const algorithmIdUrlSearchParameterName = "algorithm";

	const currentAlgorithm: TriangleAlgorithm | null = $derived(
		getTriangleAlgorithmFromUrlSearchParams(
			$page.url.searchParams,
			supportedTriangleAlgorithms,
			algorithmIdUrlSearchParameterName,
		),
	);
</script>

<Page
	{currentAlgorithm}
	{algorithmIdUrlSearchParameterName}
	supportedAlgorithms={supportedTriangleAlgorithms}
/>

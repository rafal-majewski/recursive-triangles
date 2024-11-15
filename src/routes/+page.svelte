<script lang="ts">
	import {page} from "$app/stores";
	import {getTriangleAlgorithmFromUrlSearchParams} from "../lib/triangle-algorithms/getTriangleAlgorithmFromUrlSearchParams.ts";
	import Page from "../lib/Page.svelte";
	import {supportedTriangleAlgorithms} from "../lib/supported-triangle-algorithms/supportedTriangleAlgorithms.ts";
	import type {TriangleAlgorithm} from "../lib/triangle-algorithms/TriangleAlgorithm.ts";
	const selectedAlgorithmSearchParameterName = "algorithm";

	const selectedAlgorithm: TriangleAlgorithm | null = $derived(
		getTriangleAlgorithmFromUrlSearchParams(
			$page.url.searchParams,
			supportedTriangleAlgorithms,
			selectedAlgorithmSearchParameterName,
		),
	);
</script>

<Page
	{selectedAlgorithm}
	{selectedAlgorithmSearchParameterName}
	supportedAlgorithms={supportedTriangleAlgorithms}
/>

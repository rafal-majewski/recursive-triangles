<script lang="ts">
	import QueryForm from "$lib/query-form/QueryForm.svelte";
	import type {Query} from "../query/Query.ts";
	import type {TriangleAlgorithms} from "../triangle-algorithms/TriangleAlgorithms.ts";
	import TriangleDisplayer from "../triangle-displayer/TriangleDisplayer.svelte";

	const {
		algorithmIdUrlSearchParameterName,
		colorCountUrlSearchParameterName,
		query,
		supportedAlgorithms,
	}: Readonly<{
		algorithmIdUrlSearchParameterName: string;
		colorCountUrlSearchParameterName: string;
		query: Query;
		supportedAlgorithms: TriangleAlgorithms;
	}> = $props();
</script>

<main>
	<QueryForm
		currentQuery={query}
		{supportedAlgorithms}
		{colorCountUrlSearchParameterName}
		{algorithmIdUrlSearchParameterName}
	/>
	{#if query.algorithm !== null && query.colorCount !== null}
		<TriangleDisplayer
			computeNextTriangleRow={query.algorithm.computeNextTriangleRow}
			colorCount={query.colorCount}
		/>
	{/if}
</main>

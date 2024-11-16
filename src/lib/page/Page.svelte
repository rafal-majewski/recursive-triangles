<script lang="ts">
	import QueryForm from "../query-form/QueryForm.svelte";
	import type {TriangleAlgorithm} from "../triangle-algorithms/TriangleAlgorithm.ts";
	import type {TriangleAlgorithms} from "../triangle-algorithms/TriangleAlgorithms.ts";
	import TriangleDisplayer from "../triangle-displayer/TriangleDisplayer.svelte";

	const {
		algorithmIdUrlSearchParameterName,
		currentAlgorithm,
		supportedAlgorithms,
	}: Readonly<{
		algorithmIdUrlSearchParameterName: string;
		currentAlgorithm: TriangleAlgorithm | null;
		supportedAlgorithms: TriangleAlgorithms;
	}> = $props();

	const currentAlgorithmId = $derived(currentAlgorithm === null ? null : currentAlgorithm.id);
</script>

<main>
	<QueryForm {currentAlgorithmId} {supportedAlgorithms} {algorithmIdUrlSearchParameterName} />
	{#if currentAlgorithm !== null}
		<TriangleDisplayer computeNextTriangleRow={currentAlgorithm.computeNextTriangleRow} />
	{/if}
</main>

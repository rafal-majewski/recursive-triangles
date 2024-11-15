<script lang="ts">
	import AlgorithmMenu from "./algorithm-menu/AlgorithmMenu.svelte";
	import type {TriangleAlgorithm} from "./triangle-algorithms/TriangleAlgorithm.ts";
	import type {TriangleAlgorithms} from "./triangle-algorithms/TriangleAlgorithms.ts";
	import TriangleDisplayer from "./triangle-displayer/TriangleDisplayer.svelte";

	const {
		selectedAlgorithm,
		supportedAlgorithms,
		selectedAlgorithmSearchParameterName,
	}: Readonly<{
		selectedAlgorithm: null | TriangleAlgorithm;
		supportedAlgorithms: TriangleAlgorithms;
		selectedAlgorithmSearchParameterName: string;
	}> = $props();

	const selectedAlgorithmId = $derived(selectedAlgorithm === null ? null : selectedAlgorithm.id);
</script>

<main>
	<AlgorithmMenu
		{selectedAlgorithmId}
		{supportedAlgorithms}
		{selectedAlgorithmSearchParameterName}
	/>
	{#if selectedAlgorithm !== null}
		<TriangleDisplayer computeNextTriangleRow={selectedAlgorithm.computeNextTriangleRow} />
	{/if}
</main>

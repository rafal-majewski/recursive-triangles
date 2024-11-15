<script lang="ts">
	import type {ComputeNextTriangleRow} from "../triangle-algorithms/ComputeNextTriangleRow.ts";
	import TriangleRowDisplayer from "./row/TriangleRowDisplayer.svelte";
	import type {TriangleAnimator} from "./triangle-animator/TriangleAnimator.ts";

	const {
		computeNextTriangleRow,
	}: Readonly<{
		computeNextTriangleRow: ComputeNextTriangleRow;
	}> = $props();

	const triangleAnimator: TriangleAnimator = createTriangleAnimator(computeNextTriangleRow);
	let previousComputeNextTriangleRow = computeNextTriangleRow;

	$effect((): void => {
		if (previousComputeNextTriangleRow !== computeNextTriangleRow) {
			triangleAnimator.changeComputeNextTriangleRow(computeNextTriangleRow);
			previousComputeNextTriangleRow = computeNextTriangleRow;
		}
	});
</script>

<div class="triangle-displayer">
	<div class="triangle-displayer__content">
		{#each triangleAnimator.triangle as row, rowIndex (rowIndex)}
			<TriangleRowDisplayer {row} />
		{/each}
	</div>
</div>

<style lang="scss">
	.triangle-displayer {
		display: grid;
	}

	.triangle-displayer__content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

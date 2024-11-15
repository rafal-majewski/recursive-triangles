<script lang="ts">
	import {computeExpandedTriangle} from "../triangle-algorithms/computeExpandedTriangle.ts";
	import {initialTriangle} from "../triangle/initialTriangle.ts";
	import type {ComputeNextTriangleRow} from "../triangle-algorithms/ComputeNextTriangleRow.ts";
	import type {Triangle} from "../triangle/Triangle.ts";
	import TriangleRowDisplayer from "./row/TriangleRowDisplayer.svelte";

	const {
		computeNextTriangleRow,
	}: Readonly<{
		computeNextTriangleRow: ComputeNextTriangleRow;
	}> = $props();

	let triangle: Triangle = $state.raw(initialTriangle);

	$effect(function handleComputeNextTriangleRowChange(): void | (() => void) {
		const intervalId = setInterval(function animate(): void {
			triangle = computeExpandedTriangle(triangle, computeNextTriangleRow);
		}, 1000);

		return function handleUnmount(): void {
			clearInterval(intervalId);
		};
	});
</script>

<div class="triangle-displayer">
	<div class="triangle-displayer__content">
		{#each triangle as row, rowIndex (rowIndex)}
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

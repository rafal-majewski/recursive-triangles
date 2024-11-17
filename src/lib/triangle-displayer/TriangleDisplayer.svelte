<script lang="ts">
	import {pascalComputeNextTriangleRow} from "../pascal-triangle-algorithm/pascalComputeNextTriangleRow.ts";
	import TriangleRowDisplayer from "./row/TriangleRowDisplayer.svelte";
	import type {TriangleAnimator} from "./triangle-animator/TriangleAnimator.ts";
	import {createTriangleAnimator} from "./triangle-animator/createTriangleAnimator.svelte.ts";
	const triangleAnimator: TriangleAnimator = createTriangleAnimator(pascalComputeNextTriangleRow);
</script>

<div class="triangle-displayer">
	<div class="triangle-displayer__content">
		{#each triangleAnimator.triangle as row, rowIndex (rowIndex)}
			<TriangleRowDisplayer {row} />
		{/each}
	</div>
</div>

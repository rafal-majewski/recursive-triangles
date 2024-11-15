<script lang="ts">
	import type {Triangle} from "../triangle/Triangle.ts";
	import TriangleRowDisplayer from "./row/TriangleRowDisplayer.svelte";

	const {
		triangle,
	}: Readonly<{
		triangle: Triangle;
	}> = $props();
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

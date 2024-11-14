<script lang="ts">
	import type {Triangle} from "../triangle/Triangle.ts";
	import TriangleRowDisplayer from "./row/TriangleRowDisplayer.svelte";

	const {
		triangle,
	}: Readonly<{
		triangle: Triangle;
	}> = $props();
</script>

<div>
	{#each triangle as row, rowIndex (rowIndex)}
		<TriangleRowDisplayer {row} />
	{/each}
</div>

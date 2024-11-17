<script lang="ts">
	import type {TriangleRow} from "../../triangle/row/TriangleRow.ts";
	import TriangleRowCellDisplayer from "./cell/TriangleRowCellDisplayer.svelte";

	const {
		colorCount,
		row,
	}: Readonly<{
		colorCount: number;
		row: TriangleRow;
	}> = $props();
</script>

<div class="row">
	{#each row as cell, cellIndex (cellIndex)}
		<TriangleRowCellDisplayer {cell} {colorCount} />
	{/each}
</div>

<style lang="scss">
	.row {
		display: flex;
	}
</style>

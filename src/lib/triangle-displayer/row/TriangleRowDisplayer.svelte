<script lang="ts">
	import type {TriangleRow} from "../../triangle/row/TriangleRow.ts";
	import TriangleRowCellDisplayer from "./cell/TriangleRowCellDisplayer.svelte";

	const {
		row,
	}: Readonly<{
		row: TriangleRow;
	}> = $props();
</script>

<div class="row">
	{#each row as cell, cellIndex (cellIndex)}
		<TriangleRowCellDisplayer {cell} />
	{/each}
</div>

<style lang="scss">
	.row {
		display: flex;
	}
</style>

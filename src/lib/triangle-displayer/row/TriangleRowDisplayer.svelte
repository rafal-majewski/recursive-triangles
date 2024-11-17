<script lang="ts">
	import type {TriangleRow} from "../../triangle/row/TriangleRow.ts";

	const {
		row,
	}: Readonly<{
		row: TriangleRow;
	}> = $props();
</script>

<div>
	{#each row as cell, cellIndex (cellIndex)}
		{cell}
	{/each}
</div>

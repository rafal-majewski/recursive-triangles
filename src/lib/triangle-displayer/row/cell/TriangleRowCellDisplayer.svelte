<script lang="ts">
	import {computeColor} from "./computeColor.ts";

	const {
		cell,
		colorCount,
	}: Readonly<{
		cell: bigint;
		colorCount: number;
	}> = $props();

	const color = $derived(computeColor(cell, colorCount));
</script>

<span class="cell" style:background-color={color}>{cell}</span>

<style lang="scss">
	.cell {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		overflow: hidden;
	}
</style>

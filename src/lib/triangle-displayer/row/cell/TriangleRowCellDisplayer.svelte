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
		width: calc(2rem * sqrt(3) / 2);
		height: 2rem;
		overflow: hidden;
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		font-size: 0.5rem;
	}
</style>

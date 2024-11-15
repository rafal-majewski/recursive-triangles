<script lang="ts">
	const {
		cell,
	}: Readonly<{
		cell: number;
	}> = $props();
</script>

<span class="cell">{cell}</span>

<style lang="scss">
	.cell {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		overflow: hidden;
	}
</style>

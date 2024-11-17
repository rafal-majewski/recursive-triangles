<script lang="ts">
	const {
		currentColorCount,
		parameterName,
	}: Readonly<{
		currentColorCount: null | number;
		parameterName: string;
	}> = $props();
</script>

<label>
	Color count:
	<input type="number" name={parameterName} min="1" value={currentColorCount ?? 1} />
</label>

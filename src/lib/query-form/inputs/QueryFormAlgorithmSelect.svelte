<script lang="ts">
	import type {TriangleAlgorithms} from "../../triangle-algorithms/TriangleAlgorithms.ts";

	const {
		currentAlgorithmId,
		parameterName,
		supportedAlgorithms,
	}: Readonly<{
		currentAlgorithmId: null | string;
		parameterName: string;
		supportedAlgorithms: TriangleAlgorithms;
	}> = $props();
</script>

<label>
	Algorithm:
	<select name={parameterName}>
		{#if currentAlgorithmId === null}
			<option value="" disabled selected></option>
		{/if}
		{#each Object.values(supportedAlgorithms) as supportedAlgorithm (supportedAlgorithm.id)}
			<option value={supportedAlgorithm.id} selected={currentAlgorithmId === supportedAlgorithm.id}>
				{supportedAlgorithm.name}
			</option>
		{/each}
	</select>
</label>

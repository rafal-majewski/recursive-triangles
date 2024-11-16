<script lang="ts">
	import type {TriangleAlgorithms} from "../triangle-algorithms/TriangleAlgorithms.ts";
	import QueryFormAlgorithmSelect from "./inputs/QueryFormAlgorithmSelect.svelte";

	const {
		algorithmIdUrlSearchParameterName,
		currentAlgorithmId,
		supportedAlgorithms,
	}: Readonly<{
		algorithmIdUrlSearchParameterName: string;
		currentAlgorithmId: null | string;
		supportedAlgorithms: TriangleAlgorithms;
	}> = $props();
</script>

<form>
	<QueryFormAlgorithmSelect
		{currentAlgorithmId}
		{supportedAlgorithms}
		parameterName={algorithmIdUrlSearchParameterName}
	/>
	<button type="submit">Apply</button>
</form>

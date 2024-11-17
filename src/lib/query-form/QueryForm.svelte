<script lang="ts">
	import type {Query} from "../query/Query.ts";
	import type {TriangleAlgorithms} from "../triangle-algorithms/TriangleAlgorithms.ts";
	import QueryFormAlgorithmSelect from "./inputs/QueryFormAlgorithmSelect.svelte";
	import QueryFormColorCountInput from "./inputs/QueryFormColorCountInput.svelte";

	const {
		algorithmIdUrlSearchParameterName,
		colorCountUrlSearchParameterName,
		currentQuery,
		supportedAlgorithms,
	}: Readonly<{
		algorithmIdUrlSearchParameterName: string;
		colorCountUrlSearchParameterName: string;
		currentQuery: null | Query;
		supportedAlgorithms: TriangleAlgorithms;
	}> = $props();
</script>

<form>
	<div>
		<QueryFormAlgorithmSelect
			currentAlgorithmId={currentQuery?.algorithm?.id ?? null}
			{supportedAlgorithms}
			parameterName={algorithmIdUrlSearchParameterName}
		/>
		<QueryFormColorCountInput
			currentColorCount={currentQuery?.colorCount ?? null}
			parameterName={colorCountUrlSearchParameterName}
		/>
	</div>
	<button type="submit">Apply</button>
</form>

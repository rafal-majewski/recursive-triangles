<script lang="ts">
	import {goto} from "$app/navigation";
	import {page} from "$app/stores";
	import type {TriangleAlgorithms} from "../triangle-algorithms/TriangleAlgorithms.ts";

	const {
		selectedAlgorithmId,
		supportedAlgorithms,
		selectedAlgorithmSearchParameterName,
	}: Readonly<{
		selectedAlgorithmId: null | string;
		supportedAlgorithms: TriangleAlgorithms;
		selectedAlgorithmSearchParameterName: string;
	}> = $props();

	function handleSelectionChange(event: Event): void {
		const selectHtmlElement = event.target as HTMLSelectElement;
		const newSelectedAlgorithmId = selectHtmlElement.value;
		const urlWithUpdatedQuery = new URL($page.url);

		if (selectedAlgorithmId === "") {
			urlWithUpdatedQuery.searchParams.delete(selectedAlgorithmSearchParameterName);
		} else {
			urlWithUpdatedQuery.searchParams.set(
				selectedAlgorithmSearchParameterName,
				newSelectedAlgorithmId,
			);
		}

		goto(urlWithUpdatedQuery);
	}
</script>

<select onchange={handleSelectionChange}>
	<option value="" disabled selected={selectedAlgorithmId === null}>Select an algorithm</option>
	{#each Object.values(supportedAlgorithms) as supportedAlgorithm (supportedAlgorithm.id)}
		<option value={supportedAlgorithm.id} selected={selectedAlgorithmId === supportedAlgorithm.id}>
			{supportedAlgorithm.name}
		</option>
	{/each}
</select>

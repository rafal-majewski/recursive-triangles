<script lang="ts">
	import {computeExpandedPascalTriangle} from "./pascal-algorithm/computeExpandedPascalTriangle.ts";
	import TriangleDisplayer from "./triangle-displayer/TriangleDisplayer.svelte";
	import type {Triangle} from "./triangle/Triangle.ts";
	let pascalTriangle = $state.raw<Triangle>([[1]]);

	$effect(function handleMount(): () => void {
		const intervalId = setInterval(function animate(): void {
			pascalTriangle = computeExpandedPascalTriangle(pascalTriangle);
		}, 1000);

		return function handleUnmount(): void {
			clearInterval(intervalId);
		};
	});
</script>

<main>
	<TriangleDisplayer triangle={pascalTriangle} />
</main>

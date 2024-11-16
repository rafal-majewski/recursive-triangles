import type {Triangle} from "../../triangle/Triangle.ts";
import type {ComputeNextTriangleRow} from "../../triangle-algorithms/ComputeNextTriangleRow.ts";
import {computeExpandedTriangle} from "../../triangle-algorithms/computeExpandedTriangle.ts";
import type {TriangleAnimator} from "./TriangleAnimator.ts";

export function createTriangleAnimator(
	initialComputeNextTriangleRow: ComputeNextTriangleRow,
): TriangleAnimator {
	let triangle = $state<Triangle>([]);
	let computeNextTriangleRow = initialComputeNextTriangleRow;

	function animate(): void {
		triangle = computeExpandedTriangle(triangle, computeNextTriangleRow);
	}

	function setAnimationInterval(): ReturnType<typeof setInterval> {
		const intervalId = setInterval(animate, 1000);
		return intervalId;
	}

	let intervalId = setAnimationInterval();

	function changeComputeNextTriangleRow(newComputeNextTriangleRow: ComputeNextTriangleRow): void {
		computeNextTriangleRow = newComputeNextTriangleRow;
		triangle = [];
		clearInterval(intervalId);
		intervalId = setAnimationInterval();
	}

	return {
		changeComputeNextTriangleRow,
		get triangle(): Triangle {
			return triangle;
		},
	};
}

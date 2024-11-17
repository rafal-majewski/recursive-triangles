import type {Triangle} from "../../triangle/Triangle.ts";
import type {ComputeNextTriangleRow} from "../../triangle-algorithms/ComputeNextTriangleRow.ts";
import {computeExpandedTriangle} from "../../triangle-algorithms/computeExpandedTriangle.ts";
import type {TriangleAnimator} from "./TriangleAnimator.ts";

export function createTriangleAnimator(
	computeNextTriangleRow: ComputeNextTriangleRow,
): TriangleAnimator {
	let triangle = $state<Triangle>([]);

	function animate(): void {
		triangle = computeExpandedTriangle(triangle, computeNextTriangleRow);
	}

	setInterval(animate, 1000);

	return {
		get triangle(): Triangle {
			return triangle;
		},
	};
}

import type {Triangle} from "../../triangle/Triangle.ts";
import type {ComputeNextTriangleRow} from "../../triangle-algorithms/ComputeNextTriangleRow.ts";

export type TriangleAnimator = Readonly<{
	changeComputeNextTriangleRow(newComputeNextTriangleRow: ComputeNextTriangleRow): void;
	triangle: Triangle;
}>;

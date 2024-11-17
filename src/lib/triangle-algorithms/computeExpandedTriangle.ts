import type {Triangle} from "../triangle/Triangle.ts";
import type {ComputeNextTriangleRow} from "./ComputeNextTriangleRow.ts";

export function computeExpandedTriangle(
	triangle: Triangle,
	computeNextRow: ComputeNextTriangleRow,
): Triangle {
	const nextRow = computeNextRow(triangle);
	return [...triangle, nextRow];
}

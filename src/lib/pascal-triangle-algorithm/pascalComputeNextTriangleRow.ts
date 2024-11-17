import type {Triangle} from "../triangle/Triangle.ts";
import type {TriangleRow} from "../triangle/row/TriangleRow.ts";

export function pascalComputeNextTriangleRow(triangle: Triangle): TriangleRow {
	const newRow: bigint[] = [];

	if (triangle.length === 0) {
		newRow.push(1n);
	} else {
		for (let cellIndex = 0; cellIndex <= triangle[triangle.length - 1].length; cellIndex += 1) {
			const leftAboveCell = triangle[triangle.length - 1][cellIndex - 1] ?? 0n;
			const rightAboveCell = triangle[triangle.length - 1][cellIndex] ?? 0n;
			newRow.push(leftAboveCell + rightAboveCell);
		}
	}

	return newRow;
}

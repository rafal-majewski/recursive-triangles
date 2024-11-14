import type {Triangle} from "../triangle/Triangle.ts";
import type {TriangleRow} from "../triangle/row/TriangleRow.ts";

export function computeNextPascalTriangleRow(triangle: Triangle): TriangleRow {
	const newRow: number[] = [];

	for (let cellIndex = 0; cellIndex <= triangle[triangle.length - 1].length; cellIndex += 1) {
		const leftCell = triangle[triangle.length - 1][cellIndex - 1] ?? 0;
		const rightCell = triangle[triangle.length - 1][cellIndex] ?? 0;
		newRow.push(leftCell + rightCell);
	}

	return newRow;
}

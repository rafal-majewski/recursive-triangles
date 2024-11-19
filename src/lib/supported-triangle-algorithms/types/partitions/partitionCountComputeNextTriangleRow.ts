import type {Triangle} from "../../../triangle/Triangle.ts";
import type {TriangleRow} from "../../../triangle/row/TriangleRow.ts";

export function partitionCountComputeNextTriangleRow(triangle: Triangle): TriangleRow {
	const newRow: bigint[] = [];
	const n = triangle.length + 1;

	if (n === 1) {
		newRow.push(1n);
	} else {
		for (let k = 1; k <= n; k += 1) {
			const nMinus1Cell = triangle[n - 1 - 1][k - 1 - 1] ?? 0n;
			const nMinusKCell = triangle[n - k - 1]?.[k - 1] ?? 0n;
			newRow.push(nMinus1Cell + nMinusKCell);
		}
	}

	return newRow;
}

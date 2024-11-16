import type {Triangle} from "../../../triangle/Triangle.ts";
import type {TriangleRow} from "../../../triangle/row/TriangleRow.ts";
import {computeBinomialCoefficient} from "./computeBinomialCoefficient.ts";

export function surjectionCountComputeNextTriangleRow(triangle: Triangle): TriangleRow {
	const newRow: bigint[] = [];
	const n = BigInt(triangle.length) + 1n;

	for (let m = 1n; m <= n; m += 1n) {
		let accumulatedCell = 0n;

		for (let k = 0n; k <= m; k += 1n) {
			accumulatedCell += (-1n) ** k * computeBinomialCoefficient(m, k) * (m - k) ** n;
		}

		newRow.push(accumulatedCell);
	}

	return newRow;
}

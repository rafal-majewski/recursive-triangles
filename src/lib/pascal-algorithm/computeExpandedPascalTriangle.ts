import type {Triangle} from "../triangle/Triangle.ts";
import {computeNextPascalTriangleRow} from "./computeNextPascalTriangleRow.ts";

export function computeExpandedPascalTriangle(triangle: Triangle): Triangle {
	const nextRow = computeNextPascalTriangleRow(triangle);
	return [...triangle, nextRow];
}

import type {TriangleAlgorithm} from "../../../triangle-algorithms/TriangleAlgorithm.ts";
import {surjectionCountComputeNextTriangleRow} from "./surjectionCountComputeNextTriangleRow.ts";

export const surjectionCountTriangleAlgorithm = {
	computeNextTriangleRow: surjectionCountComputeNextTriangleRow,
	id: "surjection-count",
	name: "Surjection count",
} as const satisfies TriangleAlgorithm;

import type {TriangleAlgorithm} from "../../../triangle-algorithms/TriangleAlgorithm.ts";
import {pascalComputeNextTriangleRow} from "./pascalComputeNextTriangleRow.ts";

export const pascalTriangleAlgorithm = {
	id: "pascal",
	name: "Pascal's",
	computeNextTriangleRow: pascalComputeNextTriangleRow,
} as const satisfies TriangleAlgorithm;

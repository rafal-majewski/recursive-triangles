import type {TriangleAlgorithm} from "../../../triangle-algorithms/TriangleAlgorithm.ts";
import {pascalComputeNextTriangleRow} from "./pascalComputeNextTriangleRow.ts";

export const pascalTriangleAlgorithm = {
	computeNextTriangleRow: pascalComputeNextTriangleRow,
	id: "pascal",
	name: "Pascal's",
} as const satisfies TriangleAlgorithm;

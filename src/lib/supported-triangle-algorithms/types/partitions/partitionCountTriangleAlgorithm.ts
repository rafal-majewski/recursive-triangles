import type {TriangleAlgorithm} from "../../../triangle-algorithms/TriangleAlgorithm.ts";
import {partitionCountComputeNextTriangleRow} from "./partitionCountComputeNextTriangleRow.ts";

export const partitionCountTriangleAlgorithm = {
	computeNextTriangleRow: partitionCountComputeNextTriangleRow,
	id: "partition-count",
	name: "Partition count",
} as const satisfies TriangleAlgorithm;

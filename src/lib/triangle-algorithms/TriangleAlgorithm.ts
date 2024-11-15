import type {ComputeNextTriangleRow} from "./ComputeNextTriangleRow.ts";

export type TriangleAlgorithm = Readonly<{
	id: string;
	name: string;
	computeNextTriangleRow: ComputeNextTriangleRow;
}>;

import type {ComputeNextTriangleRow} from "./ComputeNextTriangleRow.ts";

export type TriangleAlgorithm = Readonly<{
	computeNextTriangleRow: ComputeNextTriangleRow;
	id: string;
	name: string;
}>;

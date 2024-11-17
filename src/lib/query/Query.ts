import type {TriangleAlgorithm} from "../triangle-algorithms/TriangleAlgorithm.ts";

export type Query = Readonly<{
	algorithm: TriangleAlgorithm | null;
	colorCount: null | number;
}>;

import type {TriangleAlgorithms} from "../triangle-algorithms/TriangleAlgorithms.ts";
import {pascalTriangleAlgorithm} from "./types/pascal/PascalTriangleAlgorithm.ts";

export const supportedTriangleAlgorithms = {
	[pascalTriangleAlgorithm.id]: pascalTriangleAlgorithm,
} as const satisfies TriangleAlgorithms;

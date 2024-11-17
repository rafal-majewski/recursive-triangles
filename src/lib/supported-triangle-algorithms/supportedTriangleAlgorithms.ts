import type {TriangleAlgorithms} from "../triangle-algorithms/TriangleAlgorithms.ts";
import {pascalTriangleAlgorithm} from "./types/pascal/pascalTriangleAlgorithm.ts";
import {surjectionCountTriangleAlgorithm} from "./types/surjection-count/surjectionCountTriangleAlgorithm.ts";

export const supportedTriangleAlgorithms = {
	[pascalTriangleAlgorithm.id]: pascalTriangleAlgorithm,
	[surjectionCountTriangleAlgorithm.id]: surjectionCountTriangleAlgorithm,
} as const satisfies TriangleAlgorithms;

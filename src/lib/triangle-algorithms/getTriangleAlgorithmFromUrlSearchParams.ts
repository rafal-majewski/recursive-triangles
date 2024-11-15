import {getTriangleAlgorithmIdFromUrlSearchParams} from "./getTriangleAlgorithmIdFromUrlSearchParams.ts";
import type {TriangleAlgorithm} from "./TriangleAlgorithm.ts";
import type {TriangleAlgorithms} from "./TriangleAlgorithms.ts";

export function getTriangleAlgorithmFromUrlSearchParams(
	params: URLSearchParams,
	triangleAlgorithms: TriangleAlgorithms,
	algorithmParameterName: string,
): TriangleAlgorithm | null {
	const algorithmId = getTriangleAlgorithmIdFromUrlSearchParams(params, algorithmParameterName);

	if (algorithmId === null) {
		return null;
	}

	return triangleAlgorithms[algorithmId] ?? null;
}

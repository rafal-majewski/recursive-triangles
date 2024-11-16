import type {TriangleAlgorithm} from "../triangle-algorithms/TriangleAlgorithm.ts";
import type {TriangleAlgorithms} from "../triangle-algorithms/TriangleAlgorithms.ts";
import {getStringFromUrlSearchParams} from "../url-search-params-utilities/getStringFromUrlSearchParams.ts";

export function getTriangleAlgorithmFromUrlSearchParams(
	params: URLSearchParams,
	triangleAlgorithms: TriangleAlgorithms,
	algorithmIdParameterName: string,
): TriangleAlgorithm | null {
	const algorithmId = getStringFromUrlSearchParams(params, algorithmIdParameterName);

	if (algorithmId === null) {
		return null;
	}

	return triangleAlgorithms[algorithmId] ?? null;
}

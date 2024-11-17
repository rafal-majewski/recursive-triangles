import type {TriangleAlgorithm} from "../triangle-algorithms/TriangleAlgorithm.ts";
import type {TriangleAlgorithms} from "../triangle-algorithms/TriangleAlgorithms.ts";
import {getNumberFromUrlSearchParams} from "../url-search-params-utilities/getNumberFromUrlSearchParams.ts";
import type {Query} from "./Query.ts";
import {getTriangleAlgorithmFromUrlSearchParams} from "./getTriangleAlgorithmFromUrlSearchParams.ts";

export function parseQueryFromUrlSearchParams(
	params: URLSearchParams,
	algorithmParameterName: string,
	colorCountParameterName: string,
	supportedAlgorithms: TriangleAlgorithms,
): Query {
	const algorithm: TriangleAlgorithm | null = getTriangleAlgorithmFromUrlSearchParams(
		params,
		supportedAlgorithms,
		algorithmParameterName,
	);

	const colorCount = getNumberFromUrlSearchParams(params, colorCountParameterName);

	return {
		algorithm,
		colorCount,
	};
}

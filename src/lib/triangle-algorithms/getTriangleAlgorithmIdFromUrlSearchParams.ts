import type {TriangleAlgorithm} from "./TriangleAlgorithm.ts";

export function getTriangleAlgorithmIdFromUrlSearchParams(
	params: URLSearchParams,
	algorithmParameterName: string,
): TriangleAlgorithm["id"] | null {
	const algorithmIds: readonly string[] = params.getAll(algorithmParameterName);

	if (algorithmIds.length > 1) {
		return null;
	}

	return algorithmIds[0] ?? null;
}

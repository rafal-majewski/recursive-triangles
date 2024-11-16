export function getStringFromUrlSearchParams(
	params: URLSearchParams,
	parameterName: string,
): null | string {
	const parameterValues: readonly string[] = params.getAll(parameterName);

	if (parameterValues.length > 1) {
		return null;
	}

	const [parameterValue] = parameterValues;

	if (typeof parameterValue === "undefined") {
		return null;
	}

	return parameterValue;
}

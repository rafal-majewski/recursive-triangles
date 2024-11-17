export function getNumberFromUrlSearchParams(
	params: URLSearchParams,
	parameterName: string,
): null | number {
	const parameterValues: readonly string[] = params.getAll(parameterName);

	if (parameterValues.length > 1) {
		return null;
	}

	const [parameterValue] = parameterValues;

	if (typeof parameterValue === "undefined") {
		return null;
	}

	const parameterValueAsNumber = Number(parameterValue);

	if (Number.isNaN(parameterValueAsNumber)) {
		return null;
	}

	return parameterValueAsNumber;
}

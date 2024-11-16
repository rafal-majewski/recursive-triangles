export function computeBinomialCoefficient(n: bigint, k: bigint): bigint {
	if (k === 0n || k === n) {
		return 1n;
	}

	let accumulatedResult = 1n;

	for (let i = 1n; i <= k; i += 1n) {
		accumulatedResult *= n - i + 1n;
	}

	for (let i = 1n; i <= k; i += 1n) {
		accumulatedResult /= i;
	}

	return accumulatedResult;
}

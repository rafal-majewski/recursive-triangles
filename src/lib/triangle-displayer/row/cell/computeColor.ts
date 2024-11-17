export function computeColor(cell: bigint, colorCount: number): string {
	return `hsl(${Number(cell % BigInt(colorCount)) * (360 / colorCount)}, 100%, 50%)`;
}

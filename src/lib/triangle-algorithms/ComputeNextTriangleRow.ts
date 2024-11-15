import type {Triangle} from "../triangle/Triangle";
import type {TriangleRow} from "../triangle/row/TriangleRow";
export type ComputeNextTriangleRow = (triangle: Triangle) => TriangleRow;

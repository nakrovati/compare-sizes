/** Units of measurement of the sides of the object being compared */
export type Dimensions = "cm" | "ft" | "in" | "m" | "mi" | "mm" | "ya";

/** Object interface for the Three.js scene */
export interface Box {
  color: string;
  dimensionAbbr: Dimensions;
  height: number;
  length: number;
  name: string;
  positionX?: number;
  width: number;
}

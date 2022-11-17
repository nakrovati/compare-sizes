/** Units of measurement of the sides of the object being compared */
export type Dimensions = "mm" | "cm" | "m" | "in" | "ft" | "ya" | "mi";

/** Object interface for the Three.js scene */
export interface Box {
  name: string;
  width: number;
  height: number;
  length: number;
  color: string;
  dimensionAbbr: Dimensions;
  positionX?: number;
}

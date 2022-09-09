import { describe, expect, test } from "vitest";
import { convertToMM } from "./dimensionsConverter";

describe("Dimension converter", () => {
  test("conversion from millimeters to millimeters", () => {
    const dimensionAbbr = "mm";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(1);
  });

  test("conversion from centimeters to millimeters", () => {
    const dimensionAbbr = "cm";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(10);
  });

  test("conversion from meters to millimeters", () => {
    const dimensionAbbr = "m";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(1000);
  });

  test("conversion from inches to millimeters", () => {
    const dimensionAbbr = "in";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(25.4);
  });

  test("test conversion from millimeters to millimeters rounded to ten thousandths", () => {
    const dimensionAbbr = "in";
    const value = 12.3455;
    expect(convertToMM(value, dimensionAbbr)).toBe(313.5757);
  });
});

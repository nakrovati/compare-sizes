import { describe, expect, test } from "vitest";

import convertToMM from "./convertLengthUnits";

describe("Dimension converter", () => {
  // Millimeters
  test("Convert 1 millimeter to millimeters", () => {
    const value = 1;
    const dimensionAbbr = "mm";

    expect(convertToMM(value, dimensionAbbr)).toBe(1);
  });

  // Centimeters
  test("Convert 1 centimeter to millimeters", () => {
    const value = 1;
    const dimensionAbbr = "cm";

    expect(convertToMM(value, dimensionAbbr)).toBe(10);
  });

  // Meters
  test("Convert 1 meter to millimeters", () => {
    const value = 1;
    const dimensionAbbr = "m";

    expect(convertToMM(value, dimensionAbbr)).toBe(1000);
  });

  // Inches
  test("Convert 1 inch to millimeters", () => {
    const value = 1;
    const dimensionAbbr = "in";

    expect(convertToMM(value, dimensionAbbr)).toBe(25.4);
  });

  test("Convert inches to millimeters rounded to ten thousandths", () => {
    const value = 12.345;
    const dimensionAbbr = "in";

    expect(convertToMM(value, dimensionAbbr)).toBe(313.563);
  });

  // Feet
  test("Convert 1 foot to millimeters", () => {
    const value = 1;
    const dimensionAbbr = "ft";

    expect(convertToMM(value, dimensionAbbr)).toBe(304.8);
  });

  test("Convert feet to millimeters rounded to ten thousandths", () => {
    const value = 12.345;
    const dimensionAbbr = "ft";

    expect(convertToMM(value, dimensionAbbr)).toBe(3762.756);
  });

  // Yards
  test("Convert 1 yard to millimeters", () => {
    const value = 1;
    const dimensionAbbr = "ya";

    expect(convertToMM(value, dimensionAbbr)).toBe(914.4);
  });

  test("Convert yards to millimeters rounded to ten thousandths", () => {
    const value = 12.345;
    const dimensionAbbr = "ya";

    expect(convertToMM(value, dimensionAbbr)).toBe(11_288.268);
  });

  // Miles
  test("Convert 1 mile to millimeters", () => {
    const value = 1;
    const dimensionAbbr = "mi";

    expect(convertToMM(value, dimensionAbbr)).toBe(1_609_344);
  });

  test("Convert miles to millimeters rounded to ten thousandths", () => {
    const value = 12.345;
    const dimensionAbbr = "mi";

    expect(convertToMM(value, dimensionAbbr)).toBe(19_867_351.68);
  });
});

import { describe, expect, test } from "vitest";
import { convertToMM } from "./dimensionsConverter";

describe("Dimension converter", () => {
  // Millimeters
  test("Convert 1 millimeter to millimeters", () => {
    const dimensionAbbr = "mm";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(1);
  });

  // Centimeters
  test("Convert 1 centimeter to millimeters", () => {
    const dimensionAbbr = "cm";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(10);
  });

  // Meters
  test("Convert 1 meter to millimeters", () => {
    const dimensionAbbr = "m";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(1000);
  });

  // Inches
  test("Convert 1 inch to millimeters", () => {
    const dimensionAbbr = "in";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(25.4);
  });

  test("Convert inches to millimeters rounded to ten thousandths", () => {
    const dimensionAbbr = "in";
    const value = 12.345;
    expect(convertToMM(value, dimensionAbbr)).toBe(313.563);
  });

  // Feets
  test("Convert 1 feet to millimeters", () => {
    const dimensionAbbr = "ft";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(304.8);
  });

  test("Convert feets to millimeters rounded to ten thousandths", () => {
    const dimensionAbbr = "ft";
    const value = 12.345;
    expect(convertToMM(value, dimensionAbbr)).toBe(3762.756);
  });

  // Yards
  test("Convert 1 yard to millimeters", () => {
    const dimensionAbbr = "ya";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(914.4);
  });

  test("Convert yards to millimeters rounded to ten thousandths", () => {
    const dimensionAbbr = "ya";
    const value = 12.345;
    expect(convertToMM(value, dimensionAbbr)).toBe(11_288.268);
  });

  // Miles
  test("Convert 1 mile to millimeters", () => {
    const dimensionAbbr = "mi";
    const value = 1;
    expect(convertToMM(value, dimensionAbbr)).toBe(1_609_344);
  });

  test("Convert miles to millimeters rounded to ten thousandths", () => {
    const dimensionAbbr = "mi";
    const value = 12.345;
    expect(convertToMM(value, dimensionAbbr)).toBe(19_867_351.68);
  });
});

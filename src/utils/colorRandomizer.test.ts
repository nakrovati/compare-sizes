import { describe, it, expect } from "vitest";
import { getRandomColor, toThreeColor } from "./colorRandomizer";

describe("Color randomizer", () => {
  it("should it gives a random color", () => {
    expect(getRandomColor()).toMatch(/^#[A-Z0-9]{6}/);
  });
});

describe("Color converter", () => {
  it("this converts the color to three.js format", () => {
    expect(toThreeColor(getRandomColor())).toBeTypeOf("number");
  });
});

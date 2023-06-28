import { describe, expect, it } from "vitest";

import { getRandomColor, toThreeColor } from "./colorRandomizer";

describe("Color randomizer", () => {
  it("Gives a random color", () => {
    expect(getRandomColor()).toMatch(/^#[A-Z0-9]{6}/);
  });
});

describe("Color converter", () => {
  it("Converts the color to three.js format", () => {
    expect(toThreeColor(getRandomColor())).toBeTypeOf("number");
  });
});

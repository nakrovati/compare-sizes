import { describe, expect, it } from "vitest";

import { getRandomColor, toThreeColor } from "~/utils/colorRandomizer";

describe("Color randomizer", () => {
  it("Gives a random color", () => {
    expect(getRandomColor()).toMatch(/^#[\dA-Z]{6}/);
  });
});

describe("Color converter", () => {
  it("Converts the color to three.js format", () => {
    expect(toThreeColor(getRandomColor())).toBeTypeOf("number");
  });
});

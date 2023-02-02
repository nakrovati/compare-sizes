import { describe, it, expect } from "vitest";
import parseItemParams from "./parseItemParams";

describe("Item params parser", () => {
  it("Contains width, height and length", () => {
    const value = "10,20,30";

    const result = {
      data: "10,20,30",
      width: 10,
      height: 20,
      length: 30,
    };

    expect(parseItemParams(value)).toStrictEqual(result);
  });

  it("Contains width, height and length with spaces", () => {
    const value = "10, 20, 30";

    const result = {
      data: "10, 20, 30",
      width: 10,
      height: 20,
      length: 30,
    };

    expect(parseItemParams(value)).toStrictEqual(result);
  });

  it("Contains decimal width, height and length", () => {
    const value = "10.55, 20.55, 30.55";

    const result = {
      data: "10.55, 20.55, 30.55",
      width: 10.55,
      height: 20.55,
      length: 30.55,
    };

    expect(parseItemParams(value)).toStrictEqual(result);
  });

  it("Contains width, height length and anything else after the decimal point", () => {
    const value = "10, 20, 30, 400";

    const result = { data: "10, 20, 30", width: 10, height: 20, length: 30 };

    expect(parseItemParams(value)).toStrictEqual(result);
  });

  it("Contains non-numeric characters", () => {
    const value = "1a00, 2/0, 30q0";

    expect(parseItemParams(value)).toBe(undefined);
  });

  it("Contains height and width", () => {
    const value = "10,20"; // Without length

    expect(parseItemParams(value)).toBe(undefined);
  });

  it("Contains only height", () => {
    const value = "10";

    expect(parseItemParams(value)).toBe(undefined);
  });

  it("Contains an empty string", () => {
    const value = "";

    expect(parseItemParams(value)).toBe(undefined);
  });
});

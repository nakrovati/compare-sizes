import { describe, it, expect } from "vitest";
import validateItemParams from "./itemParamsValidator";

describe("Item params validator", () => {
  it("contains width, height and length", () => {
    expect(validateItemParams("10,20,30")).toStrictEqual({
      data: "10,20,30",
      width: 10,
      height: 20,
      length: 30,
    });
  });

  it("contains width, height and length with spaces", () => {
    expect(validateItemParams("10, 20, 30")).toStrictEqual({
      data: "10, 20, 30",
      width: 10,
      height: 20,
      length: 30,
    });
  });

  it("contains decimal width, height and length", () => {
    expect(validateItemParams("10.55, 20.55, 30.55")).toStrictEqual({
      data: "10.55, 20.55, 30.55",
      width: 10.55,
      height: 20.55,
      length: 30.55,
    });
  });

  it("contains width, height length and anything else after the decimal point", () => {
    expect(validateItemParams("10, 20, 30, 400")).toStrictEqual({
      data: "10, 20, 30",
      width: 10,
      height: 20,
      length: 30,
    });
  });

  it("contains non-numeric characters", () => {
    expect(validateItemParams("1a00, 2/0, 30q0")).toBe(undefined);
  });

  it("contains height and width", () => {
    expect(validateItemParams("10, 20")).toBe(undefined);
  });

  it("contains only height", () => {
    expect(validateItemParams("10")).toBe(undefined);
  });

  it("contains an empty string", () => {
    expect(validateItemParams("")).toBe(undefined);
  });
});

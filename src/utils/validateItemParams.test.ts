import { describe, it, expect } from "vitest";
import validateItemParams from "./validateItemParams";

describe("Validate item params", () => {
  it("contains height, width and length", () => {
    expect(validateItemParams("10,20,30")).toStrictEqual({
      data: "10,20,30",
      height: 10,
      width: 20,
      length: 30,
    });
  });

  it("contains height, width and length with spaces", () => {
    expect(validateItemParams("10, 20, 30")).toStrictEqual({
      data: "10, 20, 30",
      height: 10,
      width: 20,
      length: 30,
    });
  });

  it("contains decimal height, width and length", () => {
    expect(validateItemParams("10.55, 20.55, 30.55")).toStrictEqual({
      data: "10.55, 20.55, 30.55",
      height: 10.55,
      width: 20.55,
      length: 30.55,
    });
  });

  it("height, width, length and anything else after the decimal point", () => {
    expect(validateItemParams("10, 20, 30, 400")).toStrictEqual({
      data: "10, 20, 30",
      height: 10,
      width: 20,
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

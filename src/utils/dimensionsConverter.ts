function convertToMM(value: number, dimensionAbbr: string) {
  if (dimensionAbbr === "cm") {
    return value * 10;
  }
  if (dimensionAbbr === "m") {
    return value * 1_000;
  }
  if (dimensionAbbr === "in") {
    return +(value * 25.4).toFixed(4);
  }
  return value;
}

export { convertToMM };

export default function convertToMM(value: number, dimensionAbbr?: string) {
  switch (dimensionAbbr) {
    case "mm":
      return value;

    case "cm":
      return value * 10;

    case "m":
      return value * 1_000;

    case "in":
      return +(value * 25.4).toFixed(4);

    case "ft":
      return +(value * 304.8).toFixed(4);

    case "ya":
      return +(value * 914.4).toFixed(4);

    case "mi":
      return +(value * 1_609_344).toFixed(4);

    default:
      return value;
  }
}

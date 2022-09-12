/** Generates a random color as a string, e.g. 540D6E */
function getRandomColor(): string {
  const colorsArray: string[] = [
    "#9D44B5",
    "#34312D",
    "#B5446E",
    "#80B192",
    "#8D918B",
    "#CE84AD",
    "#210124",
    "#00A878",
    "#750D37",
    "#345995",
    "#9B2915",
    "#50A2A7",
    "#0496FF",
    "#05204A",
    "#558564",
    "#5AB1BB",
    "#34D1BF",
    "#C492B1",
    "#E9B44C",
    "#57C4E5",
    "#84A9C0",
    "#9DACFF",
    "#FFFC31",
    "#FFB400",
    "#6FFFE9",
    "#96E072",
    "#B8B42D",
  ];

  return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

/** Converts hex color to a number */
function toThreeColor(color: string): number {
  return +color.replace(/#/, "0x");
}

export { getRandomColor, toThreeColor };

/** Generates a random color as a string, e.g. 540D6E */
import colorsJson from "@assets/colors.json";

function getRandomColor(): string {
  const colors = colorsJson.colors;

  return colors[Math.floor(Math.random() * colors.length)];
}

/** Converts hex color to a number */
function toThreeColor(color: string): number {
  return +color.replace(/#/, "0x");
}

export { getRandomColor, toThreeColor };

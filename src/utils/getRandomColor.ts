/** Generates a random color as a string, e.g. 540D6E */
function getRandomColor(): string {
  const colors: string[] = [
    "008000",
    "540D6E",
    "0B2027",
    "40798C",
    "70A9A1",
    "731963",
    "023047",
    "d62828",
    "3d405b",
    "621708",
    "31572c",
    "e07a5f",
    "003566",
    "6d597a",
    "9b5de5",
    "a98467",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

function toHex(color: string): string {
  return `#${color}`;
}

function toThreeColor(color: string): number {
  return +`0x${color}`;
}

export { getRandomColor, toHex, toThreeColor };

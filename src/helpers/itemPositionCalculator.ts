import { Box } from "~/types";
import { convertLengthUnits } from "~/utils";

export function calcCurrentPositionX(item: Box, items: Box[]) {
  const lastItem = items.at(-1);

  if (!lastItem) return 0;

  const lastItemPositionX = lastItem.positionX ?? 0;

  return (
    lastItemPositionX +
    convertLengthUnits(lastItem.width, lastItem.dimensionAbbr) / 2 +
    convertLengthUnits(item.width, item.dimensionAbbr) / 2
  );
}

import { describe, beforeEach, test, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useItemsStore } from "./items";
import { getRandomColor } from "Utils/colorRandomizer";
import type { Box } from "Types/types";

describe("Counter Store", () => {
  // Initializing pinia
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("max width getter", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.maxWidth).toBe(0);

    let name = "Item 1",
      width = 1,
      height = 1,
      length = 1,
      color = getRandomColor(),
      dimensionAbbr = "mm",
      positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

    const item1: Box = {
      name,
      width,
      height,
      length,
      color,
      dimensionAbbr,
      positionX,
    };

    itemsStore.addItem(item1);
    expect(itemsStore.maxWidth).toBe(1);

    name = "Item 2";
    width = 5;
    height = 5;
    length = 5;
    color = getRandomColor();
    dimensionAbbr = "mm";
    positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

    const item2: Box = {
      name,
      width,
      height,
      length,
      color,
      dimensionAbbr,
      positionX,
    };

    itemsStore.addItem(item2);
    expect(itemsStore.maxWidth).toBe(5);
  });

  test("max height getter", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.maxHeight).toBe(0);

    let name = "Item 1",
      width = 1,
      height = 1,
      length = 1,
      color = getRandomColor(),
      dimensionAbbr = "mm",
      positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

    const item1: Box = {
      name,
      width,
      height,
      length,
      color,
      dimensionAbbr,
      positionX,
    };

    itemsStore.addItem(item1);
    expect(itemsStore.maxHeight).toBe(1);

    name = "Item 2";
    width = 5;
    height = 5;
    length = 5;
    color = getRandomColor();
    dimensionAbbr = "mm";
    positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

    const item2: Box = {
      name,
      width,
      height,
      length,
      color,
      dimensionAbbr,
      positionX,
    };

    itemsStore.addItem(item2);
    expect(itemsStore.maxHeight).toBe(5);
  });

  test("max length getter", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.maxLength).toBe(0);

    let name = "Item 1",
      width = 1,
      height = 1,
      length = 1,
      color = getRandomColor(),
      dimensionAbbr = "mm",
      positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

    const item1: Box = {
      name,
      width,
      height,
      length,
      color,
      dimensionAbbr,
      positionX,
    };

    itemsStore.addItem(item1);
    expect(itemsStore.maxLength).toBe(1);

    name = "Item 2";
    width = 5;
    height = 5;
    length = 5;
    color = getRandomColor();
    dimensionAbbr = "mm";
    positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

    const item2: Box = {
      name,
      width,
      height,
      length,
      color,
      dimensionAbbr,
      positionX,
    };

    itemsStore.addItem(item2);
    expect(itemsStore.maxLength).toBe(5);
  });

  test("middle position 'X' getter", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.middlePositionX).toBe(0);

    let name = "Item 1",
      width = 1,
      height = 1,
      length = 1,
      color = getRandomColor(),
      dimensionAbbr = "mm",
      positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

    const item1: Box = {
      name,
      width,
      height,
      length,
      color,
      dimensionAbbr,
      positionX,
    };

    itemsStore.addItem(item1);
    expect(itemsStore.middlePositionX).toBe(0);

    name = "Item 2";
    width = 5;
    height = 5;
    length = 5;
    color = getRandomColor();
    dimensionAbbr = "mm";
    positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

    const item2: Box = {
      name,
      width,
      height,
      length,
      color,
      dimensionAbbr,
      positionX,
    };

    itemsStore.addItem(item2);
    expect(itemsStore.middlePositionX).toBe(1.5);
  });
});

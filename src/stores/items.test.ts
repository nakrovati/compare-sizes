import { describe, beforeEach, test, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useItemsStore } from "./items";
import { getRandomColor } from "Utils/colorRandomizer";
import type { Box } from "Types/types";

type CreateTestItem = (
  name: string,
  width: number,
  height: number,
  length: number,
  dimensionAbbr: string
) => Box;

describe("Counter Store", () => {
  // Initializing pinia
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("max width getter", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.maxWidth).toBe(0);

    const createTestItem: CreateTestItem = (
      name,
      width,
      height,
      length,
      dimensionAbbr
    ) => {
      const color = getRandomColor();
      const positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

      return { name, width, height, length, color, dimensionAbbr, positionX };
    };

    const item1 = createTestItem("Item 1", 1, 1, 1, "mm");
    itemsStore.addItem(item1);

    expect(itemsStore.maxWidth).toBe(1);

    const item2 = createTestItem("Item 2", 5, 5, 5, "mm");
    itemsStore.addItem(item2);

    expect(itemsStore.maxWidth).toBe(5);
  });

  test("max height getter", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.maxHeight).toBe(0);

    const createTestItem: CreateTestItem = (
      name,
      width,
      height,
      length,
      dimensionAbbr
    ) => {
      const color = getRandomColor();
      const positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

      return { name, width, height, length, color, dimensionAbbr, positionX };
    };

    const item1 = createTestItem("Item 1", 1, 1, 1, "mm");
    itemsStore.addItem(item1);

    expect(itemsStore.maxHeight).toBe(1);

    const item2 = createTestItem("Item 2", 5, 5, 5, "mm");
    itemsStore.addItem(item2);

    expect(itemsStore.maxHeight).toBe(5);
  });

  test("max length getter", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.maxLength).toBe(0);

    const createTestItem: CreateTestItem = (
      name,
      width,
      height,
      length,
      dimensionAbbr
    ) => {
      const color = getRandomColor();
      const positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

      return { name, width, height, length, color, dimensionAbbr, positionX };
    };

    const item1 = createTestItem("Item 1", 1, 1, 1, "mm");
    itemsStore.addItem(item1);

    expect(itemsStore.maxLength).toBe(1);

    const item2 = createTestItem("Item 2", 5, 5, 5, "mm");
    itemsStore.addItem(item2);

    expect(itemsStore.maxLength).toBe(5);
  });

  test("middle position 'X' getter", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.middlePositionX).toBe(0);

    const createTestItem: CreateTestItem = (
      name,
      width,
      height,
      length,
      dimensionAbbr
    ) => {
      const color = getRandomColor();
      const positionX = itemsStore.calcCurrentPositionX(width, dimensionAbbr);

      return { name, width, height, length, color, dimensionAbbr, positionX };
    };

    const item1 = createTestItem("Item 1", 1, 1, 1, "mm");
    itemsStore.addItem(item1);

    expect(itemsStore.middlePositionX).toBe(0);

    const item2 = createTestItem("Item 2", 5, 5, 5, "mm");
    itemsStore.addItem(item2);

    expect(itemsStore.middlePositionX).toBe(1.5);
  });
});

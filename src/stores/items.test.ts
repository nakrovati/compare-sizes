import { describe, beforeEach, expect, it } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useItemsStore } from "./items";
import { getRandomColor } from "Utils/colorRandomizer";
import type { Box } from "Types/types";

class Item implements Box {
  name: string;
  width: number;
  height: number;
  length: number;
  color: string;
  dimensionAbbr: string;

  constructor(
    name: string,
    width: number,
    height: number,
    length: number,
    color: string,
    dimensionAbbr: string
  ) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.length = length;
    this.color = color;
    this.dimensionAbbr = dimensionAbbr;
  }
}

describe("Counter Store", () => {
  // Initializing pinia
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // Test getters
  it("Give max width of items", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.maxWidth).toBe(0);

    const item1 = new Item("Item 1", 1, 1, 1, getRandomColor(), "mm");
    itemsStore.addItem(item1);

    expect(itemsStore.maxWidth).toBe(1);

    const item2 = new Item("Item 2", 5, 5, 5, getRandomColor(), "mm");
    itemsStore.addItem(item2);

    expect(itemsStore.maxWidth).toBe(5);
  });

  it("Give max height of items", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.maxHeight).toBe(0);

    const item1 = new Item("Item 1", 1, 1, 1, getRandomColor(), "mm");
    itemsStore.addItem(item1);

    expect(itemsStore.maxHeight).toBe(1);

    const item2 = new Item("Item 2", 5, 5, 5, getRandomColor(), "mm");
    itemsStore.addItem(item2);

    expect(itemsStore.maxHeight).toBe(5);
  });

  it("Give max length of items", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.maxLength).toBe(0);

    const item1 = new Item("Item 1", 1, 1, 1, getRandomColor(), "mm");
    itemsStore.addItem(item1);

    expect(itemsStore.maxLength).toBe(1);

    const item2 = new Item("Item 2", 5, 5, 5, getRandomColor(), "mm");
    itemsStore.addItem(item2);

    expect(itemsStore.maxLength).toBe(5);
  });

  it("Give middle position 'X' of items", () => {
    const itemsStore = useItemsStore();
    expect(itemsStore.middlePositionX).toBe(0);

    const item1 = new Item("Item 1", 1, 1, 1, getRandomColor(), "mm");
    itemsStore.addItem(item1);

    expect(itemsStore.middlePositionX).toBe(0);

    const item2 = new Item("Item 2", 5, 5, 5, getRandomColor(), "mm");
    itemsStore.addItem(item2);

    expect(itemsStore.middlePositionX).toBe(1.5);
  });

  // Test actions
});

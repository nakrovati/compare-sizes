import { nanoid } from "nanoid";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

import type { Box, Dimensions } from "~/types/index";

import { useItemsStore } from "~/stores/items";
import { getRandomColor } from "~/utils/index";

class Item implements Box {
  color: string;
  dimensionAbbr: Dimensions;
  height: number;
  id: string;
  length: number;
  name: string;
  width: number;

  constructor(
    id: string,
    name: string,
    width: number,
    height: number,
    length: number,
    color: string,
    dimensionAbbr: Dimensions,
  ) {
    this.id = id;
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
    const item1 = new Item(nanoid(), "Item 1", 1, 1, 1, getRandomColor(), "mm");
    const item2 = new Item(nanoid(), "Item 2", 5, 5, 5, getRandomColor(), "mm");

    itemsStore.addItem(item1);
    itemsStore.addItem(item2);

    expect(itemsStore.maxWidth).toBe(5);
  });

  it("Give max height of items", () => {
    const itemsStore = useItemsStore();
    const item1 = new Item(nanoid(), "Item 1", 1, 1, 1, getRandomColor(), "mm");
    const item2 = new Item(nanoid(), "Item 2", 5, 5, 5, getRandomColor(), "mm");

    itemsStore.addItem(item1);
    itemsStore.addItem(item2);

    expect(itemsStore.maxHeight).toBe(5);
  });

  it("Give max length of items", () => {
    const itemsStore = useItemsStore();
    const item2 = new Item(nanoid(), "Item 2", 5, 5, 5, getRandomColor(), "mm");
    const item1 = new Item(nanoid(), "Item 1", 1, 1, 1, getRandomColor(), "mm");

    itemsStore.addItem(item1);
    itemsStore.addItem(item2);

    expect(itemsStore.maxLength).toBe(5);
  });

  it("Give middle position 'X' of items", () => {
    const itemsStore = useItemsStore();
    const item1 = new Item(nanoid(), "Item 1", 1, 1, 1, getRandomColor(), "mm");
    const item2 = new Item(nanoid(), "Item 2", 5, 5, 5, getRandomColor(), "mm");

    itemsStore.addItem(item1);
    itemsStore.addItem(item2);

    expect(itemsStore.middlePositionX).toBe(1.5);
  });

  // Test actions
});

import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import {
  BoxGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
} from "three";

import type { Box } from "~/types/index";

import { scene } from "~/helpers/canvas";
import { calcCurrentPositionX } from "~/helpers/itemPositionCalculator";
import { useCanvasStore } from "~/stores/canvas";
import { convertLengthUnits, toThreeColor } from "~/utils/index";

export const useItemsStore = defineStore("items", {
  actions: {
    addItem(item: Box): void {
      item.positionX = calcCurrentPositionX(item, this.items);

      const itemForStore = item;
      this.items.push(itemForStore);

      const itemForScene = this.createItemForScene(item);
      scene.add(itemForScene);

      const canvasStore = useCanvasStore();
      canvasStore.updateCamera();
    },
    createItemForScene(item: Box): Mesh<BoxGeometry, MeshBasicMaterial> {
      const name = item.name;
      const width = convertLengthUnits(item.width, item.dimensionAbbr);
      const height = convertLengthUnits(item.height, item.dimensionAbbr);
      const length = convertLengthUnits(item.length, item.dimensionAbbr);
      const color = toThreeColor(item.color);
      const positionX = item.positionX;

      const geometry = new BoxGeometry(width, height, length);
      const material = new MeshBasicMaterial({ color });

      const itemForScene = new Mesh(geometry, material);

      const edgeGeometry = new EdgesGeometry(itemForScene.geometry);
      const edgeMaterial = new LineBasicMaterial({ color: 0xff_ff_ff });

      const wireframe = new LineSegments(edgeGeometry, edgeMaterial);

      itemForScene.name = name;
      itemForScene.position.setX(positionX ?? 0);
      itemForScene.add(wireframe);

      return itemForScene;
    },
    removeItem(id: Box["id"]): void {
      const canvasStore = useCanvasStore();

      this.items = this.items.filter((item) => item.id !== id);

      canvasStore.clearScene();

      this.repositionItems();

      canvasStore.initScene();
    },
    repositionItems(): void {
      const items = this.items;

      for (let i = 0; i < items.length; i++) {
        const prevItem = items[i - 1];
        const currentItem = items[i];

        if (currentItem === items[0]) {
          currentItem.positionX = 0;
          continue;
        }

        const prevItemPositionX = prevItem.positionX ?? 0;
        const prevItemHalfWidth =
          convertLengthUnits(prevItem.width, prevItem.dimensionAbbr) / 2;
        const currentItemHalfWidth =
          convertLengthUnits(currentItem.width, currentItem.dimensionAbbr) / 2;

        currentItem.positionX =
          prevItemPositionX + prevItemHalfWidth + currentItemHalfWidth;
      }
    },
  },
  getters: {
    /** Last item color */
    lastItemColor: (state): string | undefined => {
      const lastItem = state.items.at(-1);

      if (!lastItem) return undefined;

      return lastItem.color;
    },
    /** Height of highest element */
    maxHeight(state): number {
      if (state.items.length === 0) return 0;

      const heights = state.items.map((item) =>
        convertLengthUnits(item.height, item.dimensionAbbr),
      );

      return Math.max(...heights);
    },
    /** Length of the longest element */
    maxLength(state): number {
      if (state.items.length === 0) return 0;

      const lengths = state.items.map((item) =>
        convertLengthUnits(item.length, item.dimensionAbbr),
      );

      return Math.max(...lengths);
    },
    /** Width of widest element */
    maxWidth(state): number {
      if (state.items.length === 0) return 0;

      const width = state.items.map((item) =>
        convertLengthUnits(item.width, item.dimensionAbbr),
      );

      return Math.max(...width);
    },
    /** Maximum width of all item */
    middlePositionX(state): number {
      if (state.items.length <= 1) return 0;

      const firstItemPositionX = state.items.at(0)?.positionX ?? 0;
      const lastItemPositionX = state.items.at(-1)?.positionX ?? 0;

      return (firstItemPositionX + lastItemPositionX) / 2;
    },
  },
  state: () => ({
    items: useStorage<Array<Box>>("drawable-items", []),
  }),
});

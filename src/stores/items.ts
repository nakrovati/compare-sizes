import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import {
  MeshBasicMaterial,
  Mesh,
  BoxGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
} from "three";
import { useCanvasStore } from "Stores/canvas";
import { toThreeColor } from "Utils/colorRandomizer";
import { convertToMM } from "Utils/dimensionsConverter";
import { scene } from "Helpers/canvas";
import type { Box } from "Types/types";

export const useItemsStore = defineStore("items", {
  state: () => ({
    items: useStorage<Array<Box>>("drawable-items", []),
  }),
  getters: {
    /** Width of widest element */
    maxWidth: (state): number => {
      if (!state.items.length) return 0;

      const width: number[] = [];

      for (const item of state.items) {
        width.push(convertToMM(item.width, item.dimensionAbbr));
      }

      return Math.max(...width);
    },
    /** Height of highest element */
    maxHeight: (state): number => {
      if (!state.items.length) return 0;

      const heights: number[] = [];

      for (const item of state.items) {
        heights.push(convertToMM(item.height, item.dimensionAbbr));
      }

      return Math.max(...heights);
    },
    /** Length of the longest element */
    maxLength: (state): number => {
      if (!state.items.length) return 0;

      const lengths: number[] = [];

      for (const item of state.items) {
        lengths.push(convertToMM(item.height, item.dimensionAbbr));
      }

      return Math.max(...lengths);
    },
    /** Maximum width of all item */
    middlePositionX: (state): number => {
      if (!state.items.length || state.items.length === 1) return 0;

      const firstItemPositionX = state.items.at(0)?.positionX ?? 0;
      const lastItemPositionX = state.items.at(-1)?.positionX ?? 0;

      return (firstItemPositionX + lastItemPositionX) / 2;
    },
  },
  actions: {
    createItem(item: Box): Mesh<BoxGeometry, MeshBasicMaterial> {
      const width = convertToMM(item.width, item.dimensionAbbr);
      const height = convertToMM(item.height, item.dimensionAbbr);
      const length = convertToMM(item.length, item.dimensionAbbr);

      const geometry = new BoxGeometry(width, height, length);
      const material = new MeshBasicMaterial({
        color: toThreeColor(item.color),
      });

      const itemForScene = new Mesh(geometry, material);

      itemForScene.name = item.name;
      itemForScene.position.setX(item.positionX ?? 0);

      const geo = new EdgesGeometry(itemForScene.geometry);
      const mat = new LineBasicMaterial({ color: 0xffffff });
      const wireframe = new LineSegments(geo, mat);

      itemForScene.add(wireframe);

      return itemForScene;
    },
    addItem(item: Box): void {
      const itemForStore = item;
      this.items.push(itemForStore);

      const itemForScene = this.createItem(item);
      scene.add(itemForScene);

      const canvasStore = useCanvasStore();
      canvasStore.updateCamera();
    },
    initScene(): void {
      if (!this.items.length) return;

      const itemsForScene: Mesh<BoxGeometry, MeshBasicMaterial>[] = [];

      for (const item of this.items) {
        itemsForScene.push(this.createItem(item));
      }

      const canvasStore = useCanvasStore();

      scene.add(...itemsForScene);

      canvasStore.updateCamera();
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
          convertToMM(prevItem.width, prevItem.dimensionAbbr) / 2;
        const currentItemHalfWidth =
          convertToMM(currentItem.width, currentItem.dimensionAbbr) / 2;

        currentItem.positionX =
          prevItemPositionX + prevItemHalfWidth + currentItemHalfWidth;
      }
    },
    calcCurrentPositionX(width: number, dimensionAbbr: string) {
      const lastItem = this.items.at(-1);

      if (!lastItem) return 0;

      return (
        lastItem.positionX +
        convertToMM(lastItem.width, lastItem.dimensionAbbr) / 2 +
        convertToMM(width, dimensionAbbr) / 2
      );
    },
    clearScene(): void {
      scene.clear();
    },
    removeItem(index: number): void {
      const canvasStore = useCanvasStore();

      this.items.splice(index, 1);
      this.clearScene();
      this.repositionItems();
      this.initScene();

      canvasStore.updateCamera();
    },
  },
});

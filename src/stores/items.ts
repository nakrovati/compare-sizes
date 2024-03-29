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

import type { Box, Dimensions } from "~/types/index";

import { scene } from "~/helpers/canvas";
import { useCanvasStore } from "~/stores/canvas";
import { convertToMM, toThreeColor } from "~/utils/index";

export const useItemsStore = defineStore("items", {
  actions: {
    addItem(item: Box): void {
      item.positionX = this.calcCurrentPositionX(
        item.width,
        item.dimensionAbbr
      );

      const itemForStore = item;
      this.items.push(itemForStore);

      const itemForScene = this.createItem(item);
      scene.add(itemForScene);

      const canvasStore = useCanvasStore();
      canvasStore.updateCamera();
    },
    calcCurrentPositionX(width: number, dimensionAbbr: Dimensions) {
      const lastItem = this.items.at(-1);

      if (!lastItem) return 0;

      if (!lastItem.positionX) lastItem.positionX = 0;

      return (
        lastItem.positionX +
        convertToMM(lastItem.width, lastItem.dimensionAbbr) / 2 +
        convertToMM(width, dimensionAbbr) / 2
      );
    },
    createItem(item: Box): Mesh<BoxGeometry, MeshBasicMaterial> {
      const name = item.name,
        width = convertToMM(item.width, item.dimensionAbbr),
        height = convertToMM(item.height, item.dimensionAbbr),
        length = convertToMM(item.length, item.dimensionAbbr),
        color = toThreeColor(item.color),
        positionX = item.positionX;

      const geometry = new BoxGeometry(width, height, length),
        material = new MeshBasicMaterial({ color });

      const itemForScene = new Mesh(geometry, material);

      const edgeGeometry = new EdgesGeometry(itemForScene.geometry),
        edgeMaterial = new LineBasicMaterial({ color: 0xffffff });

      const wireframe = new LineSegments(edgeGeometry, edgeMaterial);

      itemForScene.name = name;
      itemForScene.position.setX(positionX ?? 0);
      itemForScene.add(wireframe);

      return itemForScene;
    },
    removeItem(index: number): void {
      const canvasStore = useCanvasStore();

      this.items.splice(index, 1);

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
          convertToMM(prevItem.width, prevItem.dimensionAbbr) / 2;
        const currentItemHalfWidth =
          convertToMM(currentItem.width, currentItem.dimensionAbbr) / 2;

        currentItem.positionX =
          prevItemPositionX + prevItemHalfWidth + currentItemHalfWidth;
      }
    },
  },
  getters: {
    // Last item color
    lastItemColor: (state): string | undefined => {
      const lastItem = state.items.at(-1);

      if (!lastItem) return undefined;

      return lastItem.color;
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
    /** Width of widest element */
    maxWidth: (state): number => {
      if (!state.items.length) return 0;

      const width: number[] = [];

      for (const item of state.items) {
        width.push(convertToMM(item.width, item.dimensionAbbr));
      }

      return Math.max(...width);
    },
    /** Maximum width of all item */
    middlePositionX: (state): number => {
      if (!state.items.length || state.items.length === 1) return 0;

      const firstItemPositionX = state.items.at(0)?.positionX ?? 0;
      const lastItemPositionX = state.items.at(-1)?.positionX ?? 0;

      return (firstItemPositionX + lastItemPositionX) / 2;
    },
  },
  state: () => ({
    items: useStorage<Array<Box>>("drawable-items", []),
  }),
});

import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import type { Box } from "Types/types";
import {
  MeshBasicMaterial,
  Mesh,
  BoxGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
} from "three";
import { scene } from "Helpers/canvas";
import { toThreeColor } from "Utils/getRandomColor";
import { convertToMM } from "Utils/dimensionsConverter";

export const useItemsStore = defineStore("items", {
  state: () => ({
    items: useStorage<Array<Box>>("drawable-items", []),
  }),
  getters: {
    /** Maximum height or width */
    maxFront: (state): number => {
      if (!state.items.length) return 0;

      const heights: number[] = [];
      const widths: number[] = [];

      for (let i = 0; i < state.items.length; i++) {
        heights.push(
          convertToMM(state.items[i].height, state.items[i].dimensionAbbr)
        );
        widths.push(
          convertToMM(state.items[i].width, state.items[i].dimensionAbbr)
        );
      }

      return Math.max(...heights, ...widths);
    },
  },
  actions: {
    createItem(item: Box): Mesh<BoxGeometry, MeshBasicMaterial> {
      const material = new MeshBasicMaterial({
        color: toThreeColor(item.color),
      });

      const width = convertToMM(item.width, item.dimensionAbbr);
      const height = convertToMM(item.height, item.dimensionAbbr);
      const length = convertToMM(item.length, item.dimensionAbbr);

      const geometry = new BoxGeometry(width, height, length);
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
      try {
        const itemForStore = item;
        this.items.push(itemForStore);

        const itemForScene = this.createItem(item);
        scene.add(itemForScene);
      } catch (error) {
        console.error(error);
      }
    },
    addItemsToScene(): void {
      const itemsForScene: Mesh<BoxGeometry, MeshBasicMaterial>[] = [];

      for (const item of this.items) {
        itemsForScene.push(this.createItem(item));
      }
      scene.add(...itemsForScene);
    },
    repositionItems(): void {
      const items = this.items;

      for (let i = 0; i < items.length; i++) {
        const prevItem = items[i - 1];
        const currentItem = items[i];

        if (currentItem === items[0]) {
          currentItem.positionX = 0;
        } else {
          const prevItemPositionX = prevItem.positionX ?? 0;
          const prevItemHalfWidth =
            convertToMM(prevItem.width, prevItem.dimensionAbbr) / 2;
          const currentItemHalfWidth =
            convertToMM(currentItem.width, currentItem.dimensionAbbr) / 2;

          currentItem.positionX =
            prevItemPositionX + prevItemHalfWidth + currentItemHalfWidth;
        }
      }
    },
    clearScene(): void {
      scene.clear();
    },
    removeItem(index: number): void {
      this.items.splice(index, 1);
      this.clearScene();
      this.repositionItems();
      this.addItemsToScene();
    },
  },
});

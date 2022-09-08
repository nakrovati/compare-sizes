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
        heights.push(state.items[i].height);
        widths.push(state.items[i].width);
      }

      return Math.max(...heights, ...widths);
    },
  },
  actions: {
    addItemsToScene() {
      const itemForScene: Mesh[] = [];

      for (const item of this.items) {
        itemForScene.push(this.createItem(item));
      }

      scene.add(...itemForScene);
    },
    repositionItems(): void {
      const items = this.items;

      for (let i = 0; i < items.length; i++) {
        if (items[i] === items[0]) {
          items[i].positionX = 0;
        } else {
          const prevItem = items[i - 1];
          const currentItem = items[i];

          const prevItemPositionX = prevItem.positionX ?? 0;
          const prevItemHalfWidth = prevItem.width / 2;
          const currentItemHalfWidth = currentItem.width / 2;

          items[i].positionX =
            prevItemPositionX + prevItemHalfWidth + currentItemHalfWidth;
        }
      }
    },
    clearScene(): void {
      scene.clear();
    },
    createItem(item: Box): Mesh {
      const material = new MeshBasicMaterial({
        color: toThreeColor(item.color),
      });
      const geometry = new BoxGeometry(item.width, item.height, item.length);
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
    removeItem(index: number): void {
      this.items.splice(index, 1);
      this.clearScene();
      this.repositionItems();
      this.addItemsToScene();
    },
  },
});

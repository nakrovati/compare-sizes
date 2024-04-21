import { defineStore } from "pinia";
import {
  BoxGeometry,
  Camera,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Vector3,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { scene } from "~/helpers/canvas";
import { useItemsStore } from "~/stores/items";

export const useCanvasStore = defineStore("canvas", {
  actions: {
    clearScene(): void {
      scene.clear();
    },
    initOrbitControls(object: Camera, domElement: HTMLElement): void {
      this.controls = new OrbitControls(object, domElement);

      this.controls.maxDistance = Number.POSITIVE_INFINITY;
    },
    initScene(): void {
      const itemsStore = useItemsStore();

      if (itemsStore.items.length === 0) return;

      const itemsForScene: Mesh<BoxGeometry, MeshBasicMaterial>[] = [];

      for (const item of itemsStore.items) {
        itemsForScene.push(itemsStore.createItemForScene(item));
      }

      scene.add(...itemsForScene);

      this.updateCamera();
    },
    updateCamera(): void {
      const itemsStore = useItemsStore();
      const itemCount = itemsStore.items.length;

      let cameraX: number, cameraY: number, cameraZ: number;
      let targetX: number, targetY: number, targetZ: number;

      if (itemCount === 1) {
        cameraX = -itemsStore.maxWidth;
        cameraY = itemsStore.maxHeight;
        cameraZ = itemsStore.maxLength;

        targetX = 0;
        targetY = 0;
        targetZ = 0;
      } else if (itemCount > 1) {
        cameraX = itemsStore.middlePositionX / 3;
        cameraY = itemsStore.maxHeight;
        cameraZ = itemsStore.maxLength;

        targetX = cameraX + 1;
        targetY = cameraY - 1;
        targetZ = cameraZ - 1;
      } else {
        return;
      }

      this.camera.position.set(cameraX, cameraY, cameraZ);
      this.camera.lookAt(targetX, targetY, targetZ);
      this.controls.target = new Vector3(targetX, targetY, targetZ);
    },
  },
  state: () => ({
    camera: new PerspectiveCamera(),
    controls: {} as OrbitControls,
  }),
});

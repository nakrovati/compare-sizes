import { defineStore } from "pinia";
import {
  Camera,
  PerspectiveCamera,
  Vector3,
  Mesh,
  MeshBasicMaterial,
  BoxGeometry,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { scene } from "@helpers/canvas";
import { useItemsStore } from "@stores/items";

export const useCanvasStore = defineStore("canvas", {
  state: () => ({
    camera: new PerspectiveCamera(100),
    controls: {} as OrbitControls,
  }),
  actions: {
    updateCamera(): void {
      const itemsStore = useItemsStore();

      if (itemsStore.items.length > 1) {
        const cameraX: number = itemsStore.middlePositionX / 3,
          cameraY: number = itemsStore.maxHeight,
          cameraZ: number = itemsStore.maxLength;

        this.camera.position.set(cameraX, cameraY, cameraZ);

        const targetX = cameraX + 1,
          targety = cameraY - 1,
          targetZ = cameraZ - 1;

        this.camera.lookAt(targetX, targety, targetZ);

        this.controls.target = new Vector3(targetX, targety, targetZ);
      }

      if (itemsStore.items.length === 1) {
        const cameraX: number = -itemsStore.maxWidth,
          cameraY: number = itemsStore.maxHeight,
          cameraZ: number = itemsStore.maxLength;

        this.camera.position.set(cameraX, cameraY, cameraZ);

        const targetX = 0,
          targety = 0,
          targetZ = 0;

        this.camera.lookAt(targetX, targety, targetZ);

        this.controls.target = new Vector3(targetX, targety, targetZ);

        return;
      }

      return;
    },
    initOrbitControls(object: Camera, domElement: HTMLElement) {
      this.controls = new OrbitControls(object, domElement);

      this.controls.maxDistance = Infinity;
    },
    initScene(): void {
      const itemsStore = useItemsStore();

      if (!itemsStore.items.length) return;

      const itemsForScene: Mesh<BoxGeometry, MeshBasicMaterial>[] = [];

      for (const item of itemsStore.items) {
        itemsForScene.push(itemsStore.createItem(item));
      }

      scene.add(...itemsForScene);

      this.updateCamera();
    },
    clearScene(): void {
      scene.clear();
    },
  },
});

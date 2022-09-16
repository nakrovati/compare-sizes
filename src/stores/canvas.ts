import { defineStore } from "pinia";
import { PerspectiveCamera, Camera, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { scene } from "Helpers/canvas";
import { useItemsStore } from "Stores/items";

export const useCanvasStore = defineStore("canvas", {
  state: () => ({
    camera: new PerspectiveCamera(),
    controls: {} as OrbitControls,
  }),
  actions: {
    updateCamera(): void {
      const itemsStore = useItemsStore();

      if (itemsStore.items.length > 1) {
        const cameraX: number = itemsStore.middlePositionX - 1,
          cameraY: number = itemsStore.maxHeight * 1.25,
          cameraZ: number = itemsStore.maxLength * 1.25;

        this.camera.position.set(cameraX, cameraY, cameraZ);

        const targetX = cameraX + 1,
          targety = cameraY - 1,
          targetZ = cameraZ - 1;

        this.camera.lookAt(targetX, targety, targetZ);

        this.controls.target = new Vector3(targetX, targety, targetZ);
      }

      if (itemsStore.items.length === 1) {
        const cameraX: number = -itemsStore.maxWidth * 1.25,
          cameraY: number = itemsStore.maxHeight * 1.25,
          cameraZ: number = itemsStore.maxLength * 1.25;

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
    clearScene(): void {
      scene.clear();
    },
  },
});

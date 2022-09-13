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

      this.controls.maxDistance = Infinity;

      if (itemsStore.items.length === 1) {
        const cameraX = -itemsStore.maxWidth * 1.25;
        const cameraY = itemsStore.maxHeight * 1.25;
        const cameraZ = itemsStore.maxLength * 1.25;

        this.camera.position.set(cameraX, cameraY, cameraZ);

        this.camera.lookAt(0, 0, 0);

        return;
      }

      const cameraX = itemsStore.middlePositionX - 1;
      const cameraY = itemsStore.maxHeight * 1.25;
      const cameraZ = itemsStore.maxLength * 1.25;

      this.camera.position.setX(cameraX);
      this.camera.position.setY(cameraY);
      this.camera.position.setZ(cameraZ);

      const targetX = cameraX + 1;
      const targety = cameraY - 1;
      const targetZ = cameraZ - 1;

      this.camera.lookAt(targetX, targety, targetZ);

      this.controls.target = new Vector3(targetX, targety, targetZ);
    },
    initOrbitControls(object: Camera, domElement: HTMLElement) {
      this.controls = new OrbitControls(object, domElement);
    },
    clearScene(): void {
      scene.clear();
    },
  },
});

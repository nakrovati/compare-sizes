import { defineStore } from "pinia";
import { PerspectiveCamera } from "three";

const camera = new PerspectiveCamera();
camera.position.setZ(5);

export const useCameraStore = defineStore("camera", {
  state: () => ({
    camera,
  }),
});

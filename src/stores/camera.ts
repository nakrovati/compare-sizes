import { defineStore } from "pinia";
import { PerspectiveCamera } from "three";

export const useCameraStore = defineStore("camera", {
  state: () => ({
    camera: new PerspectiveCamera(),
  }),
});

<template>
  <canvas id="canvas" ref="canvas" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { WebGLRenderer } from "three";

import { useCanvasStore } from "@stores/canvas";
import { scene } from "@helpers/canvas";

const canvas = ref<HTMLCanvasElement>();

const canvasStore = useCanvasStore();

onMounted(() => {
  if (canvas.value === undefined) {
    throw new Error("Canvas not found");
  }

  const camera = canvasStore.camera;
  const renderer = new WebGLRenderer({
    canvas: canvas.value,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);

  canvasStore.initOrbitControls(camera, renderer.domElement);
  canvasStore.initScene();

  function initCanvasSize(): void {
    const canvas = renderer.domElement,
      width = canvas.clientWidth,
      height = canvas.clientHeight;

    renderer.setSize(width, height, false);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  window.addEventListener("DOMContentLoaded", initCanvasSize);

  function resizeCanvasToDisplaySize(): void {
    const canvas = renderer.domElement,
      width = canvas.clientWidth,
      height = canvas.clientHeight;

    if (canvas.width !== width || canvas.height !== height) {
      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  }

  window.addEventListener("resize", resizeCanvasToDisplaySize);

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<style scoped lang="scss">
#canvas {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: var(--shadow-default);
}
</style>

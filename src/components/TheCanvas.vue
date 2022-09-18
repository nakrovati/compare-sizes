<template>
  <canvas id="canvas" ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { WebGLRenderer } from "three";
import { useItemsStore } from "Stores/items";
import { useCanvasStore } from "Stores/canvas";
import { scene } from "Helpers/canvas";

const canvas = ref<HTMLCanvasElement>();

const { initScene } = useItemsStore();
const { camera, initOrbitControls } = useCanvasStore();

onMounted(() => {
  if (canvas.value === undefined) {
    throw new Error("Canvas not found");
  }

  const renderer = new WebGLRenderer({
    canvas: canvas.value,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);

  initOrbitControls(camera, renderer.domElement);
  initScene();

  function resizeCanvasToDisplaySize(): void {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width || canvas.height !== height) {
      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    renderer.setSize(width, height, false);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

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
  border-radius: 10px;
  box-shadow: var(--shadow-default);
  height: 100%;
  width: 60%;

  @media screen and (max-width: 1024px) {
    height: 50%;
    width: 100%;
  }
}
</style>

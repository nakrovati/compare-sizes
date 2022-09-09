<template>
  <canvas id="canvas" ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useItemsStore } from "Stores/items";
import { useCameraStore } from "Stores/camera";
import { scene } from "Helpers/canvas";

const canvas = ref<HTMLCanvasElement>();

const { camera } = useCameraStore();

const itemsStore = useItemsStore();

onMounted(() => {
  itemsStore.addItemsToScene();
});

onMounted(() => {
  if (canvas.value === undefined) {
    throw new Error("Canvas not found");
  }

  const renderer = new WebGLRenderer({
    canvas: canvas.value,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);

  const controls = new OrbitControls(camera, renderer.domElement);

  function resizeCanvasToDisplaySize() {
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

    controls.update();

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<style scoped lang="scss">
#canvas {
  border-radius: 10px;
  box-shadow: shadows.$default;
  display: block;
  grid-area: 1 / 1 / 6 / 2;
  height: 100%;
  width: 50%;

  @media screen and (max-width: 1024px) {
    height: 50%;
    width: 100%;
  }
}

.dark #canvas {
  box-shadow: none;
}
</style>

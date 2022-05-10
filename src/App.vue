<template>
  <button @click="start()">start</button>
  <button @click="pause()">pause</button>
  <button @click="reset()">reset</button>
  {{ current }}
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useCountDown } from "./utils/useCountDown.js";

const time = ref(30 * 60 * 60 * 1000);
const { start, pause, reset, current } = useCountDown(time.value);

const resetTime = () => {
  reset(+time.value);
};
watch(() => time.value, resetTime, { immediate: true });
onMounted(() => {});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";

onMounted(() => {
  document.body.style.paddingTop = "0px";
});
</script>

<template>
  <Navigation />
  <main>
    <RouterView />
  </main>
</template>

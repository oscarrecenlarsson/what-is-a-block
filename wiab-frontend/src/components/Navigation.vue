<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="p-6 bg-blue-500 text-white">
    <RouterLink class="mr-4 hover:underline" to="/">Home</RouterLink>
    <RouterLink class="mr-4 hover:underline" to="/block">Block</RouterLink>
    <RouterLink class="mr-4 hover:underline" to="/blockchain"
      >Blockchain</RouterLink
    >
    <RouterLink class="mr-4 hover:underline" to="/mining">Mining</RouterLink>
    <RouterLink class="mr-4 hover:underline" to="/certificate"
      >Certificate</RouterLink
    >
  </nav>
</template>

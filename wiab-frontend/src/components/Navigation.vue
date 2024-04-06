<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="p-6 text-black flex justify-between items-center bg-gray-800">
    <h1 class="text-3xl text-white">What is a Block?</h1>
    <div class="space-x-4">
      <RouterLink
        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        to="/block"
        >Block</RouterLink
      >
      <RouterLink
        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        to="/blockchain"
        >Blockchain</RouterLink
      >
      <RouterLink
        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        to="/mining"
        >Mining</RouterLink
      >
      <RouterLink
        class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        to="/certificate"
        >Certificate</RouterLink
      >
    </div>
  </nav>
</template>

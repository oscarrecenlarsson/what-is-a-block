<script setup lang="ts">
import { RouterLink } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faCube,
  faLink,
  faHammer,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <nav
    class="p-6 flex justify-between items-center bg-transparent fixed w-full z-50"
  >
    <div class="flex items-center">
      <h1
        class="text-4xl text-white font-bold text-center bg-gradient-to-r from-gray-800 to-green-900 inline-block p-2 rounded shadow-lg animate-gradient-x transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-shadow"
      >
        What is a Block?
      </h1>
      <div class="flex items-center space-x-4 ml-2">
        <FontAwesomeIcon class="text-4xl text-gray-300" :icon="faCube" />
        <div
          class="border-l-2 border-gray-300 h-14 w-6 transform rotate-90 items-center mt-5"
        ></div>
        <FontAwesomeIcon class="text-4xl text-gray-300" :icon="faCube" />
        <div
          class="border-l-2 border-gray-300 h-14 w-6 transform rotate-90 items-center mt-5"
        ></div>
        <FontAwesomeIcon class="text-4xl text-gray-300" :icon="faCube" />
      </div>
    </div>
    <div class="flex space-x-4">
      <RouterLink
        class="text-gray-400 bg-gray-900 border-2 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/"
      >
        <FontAwesomeIcon :icon="faHome" /> Home
      </RouterLink>
      <RouterLink
        class="text-gray-400 bg-gray-900 border-2 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/block"
      >
        <FontAwesomeIcon :icon="faCube" /> Block
      </RouterLink>
      <RouterLink
        class="text-gray-400 bg-gray-900 border-2 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/blockchain"
      >
        <FontAwesomeIcon :icon="faLink" /> Blockchain
      </RouterLink>
      <RouterLink
        class="text-gray-400 bg-gray-900 border-2 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/mining"
      >
        <FontAwesomeIcon :icon="faHammer" /> Mining
      </RouterLink>
      <RouterLink
        class="text-gray-400 bg-gray-900 border-2 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/certificate"
      >
        <FontAwesomeIcon :icon="faCertificate" /> Certificate
      </RouterLink>
    </div>
  </nav>
</template>

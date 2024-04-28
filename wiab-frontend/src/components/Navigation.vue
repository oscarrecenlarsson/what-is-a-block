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
    class="p-6 flex justify-between items-center bg-gray-900 fixed w-full z-50"
  >
    <div class="flex items-center">
      <div class="flex items-center space-x-4 ml-2">
        <div class="relative">
          <FontAwesomeIcon class="text-4xl text-gray-300" :icon="faCube" />
          <span class="absolute bottom-10 left-0 text-white text-lg font-bold"
            >What</span
          >
        </div>
        <div
          class="border-l-2 border-gray-300 h-14 w-6 transform rotate-90 items-center mt-5"
        ></div>
        <div class="relative">
          <FontAwesomeIcon class="text-4xl text-gray-300" :icon="faCube" />
          <span class="absolute bottom-10 left-3 text-white text-lg font-bold"
            >Is</span
          >
        </div>
        <div
          class="border-l-2 border-gray-300 h-14 w-6 transform rotate-90 items-center mt-5"
        ></div>
        <div class="relative">
          <FontAwesomeIcon class="text-4xl text-gray-300" :icon="faCube" />
          <span class="absolute bottom-10 left-3 text-white text-lg font-bold"
            >A</span
          >
        </div>
        <div
          class="border-l-2 border-gray-300 h-14 w-6 transform rotate-90 items-center mt-5"
        ></div>
        <div class="relative">
          <FontAwesomeIcon class="text-4xl text-gray-300" :icon="faCube" />
          <span class="absolute bottom-10 left-0 text-white text-lg font-bold"
            >Block?</span
          >
        </div>
      </div>
    </div>
    <div class="flex space-x-4">
      <RouterLink
        class="text-gray-400 bg-gray-900 border-4 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/"
      >
        <FontAwesomeIcon :icon="faHome" /> Home
      </RouterLink>
      <RouterLink
        class="text-gray-400 bg-gray-900 border-4 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/block"
      >
        <FontAwesomeIcon :icon="faCube" /> Block
      </RouterLink>
      <RouterLink
        class="text-gray-400 bg-gray-900 border-4 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/blockchain"
      >
        <FontAwesomeIcon :icon="faLink" /> Blockchain
      </RouterLink>
      <RouterLink
        class="text-gray-400 bg-gray-900 border-4 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/mining"
      >
        <FontAwesomeIcon :icon="faHammer" /> Mining
      </RouterLink>
      <RouterLink
        class="text-gray-400 bg-gray-900 border-4 border-gray-900 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-colors duration-200 hover:bg-gray-700 hover:text-white hover:border-gray-200 transform hover:scale-105"
        to="/certificate"
      >
        <FontAwesomeIcon :icon="faCertificate" /> Certificate
      </RouterLink>
    </div>
  </nav>
</template>

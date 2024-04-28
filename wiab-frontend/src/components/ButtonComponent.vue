<script setup lang="ts">
import { computed } from "vue";
type ButtonProps = {
  /**
   * @description The color of the button

   */

  color: "white" | "black";

  /**
   * @description The size of the button

   */

  size: "small" | "medium" | "large";

  /**
   * @description The text to be displayed on the button

   */

  text: string;
};

const props = defineProps<ButtonProps>();

const sizeClasses = {
  small: "min-w-24 h-10 text-sm",
  medium: "min-w-28 h-12 text-md",
  large: "min-w-32 h-14 text-lg",
};

const colorClasses = {
  white: "bg-white text-black hover:bg-custom-green hover:text-white",
  black: "bg-custom-black text-white hover:bg-custom-green hover:text-white",
};

const buttonClasses = computed(() => [
  "flex",
  "items-center",
  "justify-center",
  "transition",
  "duration-300",
  "ease-in-out",
  "transform",
  "hover:scale-110",
  "hover:shadow-lg",
  "whitespace-nowrap",
  "p-4",
  "rounded",
  "shadow-md",
  "font-serif",
  sizeClasses[props.size],
  colorClasses[props.color],
]);
</script>

<template>
  <button :class="buttonClasses" @click="$emit('click')">
    {{ props.text }}
  </button>
</template>

<style setup></style>

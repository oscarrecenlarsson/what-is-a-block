<script setup lang="ts">
import CBlock from "../CBlock.vue";
import ButtonComponent from "../ButtonComponent.vue";

const buttonClicked = () => {
  console.log("Button clicked!");
};
</script>
<template>
  <div>
    <h1>What is a Block?</h1>
    <p>
      Here is some info about what a block is... Challenge: drag the different
      parts of the block to the right place.
    </p>
    <p>Here you will find an interactive puzzle...</p>
  </div>
  <CBlock></CBlock>

  <ButtonComponent
    text="Go to the next challenge"
    size="medium"
    color="white"
    :onClick="buttonClicked"
  />
</template>

<script setup lang="ts">
import ButtonComponent from "../ButtonComponent.vue";

const buttonClicked = () => {
  console.log("Button clicked!");
};
</script>
<template>
  <div>
    <h1>Certificate</h1>
    <p>
      Once you have completed all challenges you will be able to mint a
      certificate here...
    </p>
    <div class="flex items-center justify-center p-4 gap-5">
      <ButtonComponent
        text="Button with Hover"
        size="small"
        color="white"
        :onClick="buttonClicked"
      />
      <ButtonComponent
        text="Button with Hover"
        size="medium"
        color="black"
        :onClick="buttonClicked"
      />
      <ButtonComponent
        text="Button with Hover"
        size="large"
        color="white"
        :onClick="buttonClicked"
      />
    </div>
  </div>
</template>

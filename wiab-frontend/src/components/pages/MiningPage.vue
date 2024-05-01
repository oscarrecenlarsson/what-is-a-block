<script setup lang="ts">
import CMining from "../CMining.vue";
import ButtonComponent from "../ButtonComponent.vue";
import { useRouter } from "vue-router";
import { usePuzzleStore } from "../../stores/puzzles";

const store = usePuzzleStore();
const router = useRouter();

const nextChallenge = () => {
  router.push("/certificate");
};
</script>
<template>
  <div class="flex w-full flex-col text-center items-center bg gap-5 mb-20">
    <h1
      class="text-4xl text-center items-center mb-4 mt-6"
      style="font-family: 'Times New Roman', serif"
    >
      Mine a Block
    </h1>
    <p
      class="text-md flex flex-col justify-center text-justify max-w-2xl bg-gray-200 p-20 tracking-widest"
    >
      <b>Background:</b>
      In blockchain mining, miners search for a nonce, a specific number crucial
      for solving an equation provided by the network. This involves generating
      a hash, a unique string of numbers and letters, below a target threshold
      by combining block data with the nonce and running it through a hash
      function. Miners essentially guess different nonce values, attempting
      millions of hashes per second until finding one that works. Once a valid
      nonce is found, the block is added to the blockchain, the solution is
      announced to the network, and the miner is rewarded. This energy-intensive
      and time-consuming process maintains the blockchain's integrity and
      security, ensuring its decentralized nature.
      <br />
      <br />
      <b>Challenge:</b> Find the right nonce!<br />
      <br />
      <b>Hint:</b> There is no hint, just brute force!
    </p>
    <CMining />

    <div
      v-if="store.puzzles.mining"
      class="flex items-center justify-center mt-4 mb-5"
    >
      <ButtonComponent
        text="Go to certificate page"
        size="medium"
        color="white"
        :onClick="nextChallenge"
      />
    </div>
  </div>
</template>

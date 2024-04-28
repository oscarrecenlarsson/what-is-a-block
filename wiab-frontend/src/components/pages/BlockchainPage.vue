<script setup lang="ts">
import CBlockchain from "../CBlockchain.vue";
import ButtonComponent from "../ButtonComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const nextChallenge = () => {
  router.push("/mining");
};
</script>
<template>
  <div class="flex w-full flex-col text-center items-center">
    <h1 class="text-4xl text-center items-center mb-4 mt-6">
      What is a Blockchain?
    </h1>
    <p class="text-md flex items-center justify-center text-center max-w-7xl">
      In blockchain technology, the order and integrity of blocks are maintained
      by linking each block to the one preceding it through a cryptographic
      hash. This linkage forms a secure, continuous chain. Crucially, each block
      includes the hash of its preceding block. This hash serves as a critical
      link because it not only confirms the sequence of the blocks but also
      locks the blocks together. If an attacker were to alter the data in a
      block, the hash of that block would change, which would in turn invalidate
      the hash contained in the next block in the chain. This would break the
      chain's integrity. This continuous link from one block to the next via
      hashes is what makes the blockchain securely chained and inherently
      resistant to fraud and tampering, creating a trustworthy system for
      recording transactions.
      <br />
      <br />
      Challenge: put the blocks in the right order based on the hashes
      <br />
      <br />
      Hint: Look for the Genesis block and place it first in the chain.
    </p>
  </div>
  <CBlockchain></CBlockchain>
  <div class="flex items-center justify-center mt-4 mb-5">
    <ButtonComponent
      text="Go to the next challenge"
      size="medium"
      color="white"
      :onClick="nextChallenge"
    />
  </div>
</template>

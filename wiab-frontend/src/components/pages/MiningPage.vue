<script setup lang="ts">
import CMining from "../CMining.vue";
import ButtonComponent from "../ButtonComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const nextChallenge = () => {
  router.push("/certificate");
};
</script>
<template>
  <div class="flex w-full flex-col text-center items-center">
    <h1 class="text-4xl text-center items-center mb-4 mt-6">Mine a Block</h1>
    <p class="text-md flex items-center justify-center text-center max-w-7xl">
      The puzzle that miners need to solve involves finding a nonce. In the
      context of blockchain technology, a nonce is a number that blockchain
      miners are seeking to find to solve an equation the network provides. The
      nonce is the critical part of the mining process. In technical terms, the
      challenge in mining is to generate a hash—a unique string of numbers and
      letters—below a certain target threshold. The hash is produced by
      combining the data in the block with a nonce and then running it through a
      hash function. Because the output of a hash function cannot be predicted
      and changing even a single character in the input will produce a vastly
      different output, miners essentially guess different nonce values,
      combining them with the transaction data in the block and hashing the
      result until they find a nonce that works. This process requires an
      immense amount of computational power as miners across the globe attempt
      millions of hashes per second, trying various nonce values until they find
      the one that gives them a hash under the target set by the network's
      difficulty level. Once a valid nonce is found, the block is added to the
      blockchain, the miner announces the solution to the rest of the network,
      and the miner is rewarded. This trial-and-error method is energy-intensive
      and time-consuming but is critical for maintaining the integrity and
      security of the blockchain. The difficulty of this task ensures the
      blockchain's decentralized nature, as no single person or group can easily
      add blocks to the chain without the computational work, thus securing the
      network against fraudulent transactions
      <br />
      <br />
      Challenge: find the right nonce!
    </p>
    <CMining />
  </div>
  <div class="flex items-center justify-center mt-4 mb-5">
    <ButtonComponent
      text="Go Mint Your Certificate!"
      size="medium"
      color="white"
      :onClick="nextChallenge"
    />
  </div>
</template>

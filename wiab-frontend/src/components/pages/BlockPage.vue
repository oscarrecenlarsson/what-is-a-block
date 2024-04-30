<script setup lang="ts">
import CBlock from "../CBlock.vue";
import ButtonComponent from "../ButtonComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const nextChallenge = () => {
  router.push("/blockchain");
};
</script>
<template>
  <div class="flex w-full flex-col text-center items-center">
    <h1
      class="text-4xl text-center items-center mb-4 mt-6"
      style="font-family: 'Times New Roman', serif"
    >
      What is a Block?
    </h1>
    <p class="text-md flex items-center justify-center text-center max-w-7xl">
      In a blockchain, a block acts as a container for transactions. In this
      challenge we are looking closer at the different properties of a block.
      Each block has a timestamp, which notes the exact moment the block was
      created, helping to establish the chronological order of the blockchain
      and securing it against certain types of attacks. One of the most crucial
      elements of a block is its hash, a unique cryptographic fingerprint
      produced by running the block's contents through a hash function. This
      hash changes if any of the block's data is altered, thereby indicating
      tampering. In addition to its own hash, each block also includes the hash
      of the preceding block in the chain. This previous hash is what physically
      links one block to another, cementing the block's place in the overall
      sequence of the blockchain. The data held within a block typically
      consists of bundled transactions that have been validated by the network.
      These transactions represent the actual content or purpose of the block,
      whether transferring cryptocurrencies, recording information, or executing
      smart contracts. Lastly, the block includes a nonce, a random value that
      blockchain miners must figure out. The nonce is used in the blockchain's
      proof of work algorithm; it is the number that blockchain miners are
      solving for to create a hash that fits certain criteria set out by the
      network. The successful calculation of a fitting nonce, and subsequent
      verification of the block by the network, secures the block's validity and
      its addition to the blockchain. This entire process ensures that each
      block—and by extension, the whole blockchain—is secure, consistent, and
      tamper-resistant, forming a reliable ledger of transactions.
      <br />
      <br />
      Challenge: drag the different parts of the block to the right place.
      <br />
      <br />
      Hint: Click on the question marks to reveal an example of the property
      value
    </p>
  </div>
  <div class="mt-5">
    <CBlock></CBlock>
  </div>
  <div class="flex items-center justify-center mt-4 mb-5">
    <ButtonComponent
      text="Go to the next challenge"
      size="medium"
      color="white"
      :onClick="nextChallenge"
    />
  </div>
</template>

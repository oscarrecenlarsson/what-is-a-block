<script setup lang="ts">
import bgImage1 from "../../assets/blockchain-white-and-blue-sections-e1xrmn9wneve45yx.jpg";
import { router } from "../../router";
import { usePuzzleStore } from "../../stores/puzzles";
import ButtonComponent from "../ButtonComponent.vue";

// const navigateToHome = () => {
//   { path: "/blockchain", component: BlockchainPageView },
// };

const store = usePuzzleStore();
const goToChallenge = (challenge: string) => {
  router.push(`/${challenge}`);
};
</script>

<template>
  <div
    class="container w-full flex items-center justify-center flex-col section-2"
    :style="{ backgroundImage: `url(${bgImage1}) ` }"
  >
    <div class="flip-card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div
            class="flip-card-front"
            :class="{ complete: store.puzzles.block }"
          >
            <p class="title">Block</p>
            <p>Learn More</p>
          </div>
          <div
            class="flip-card-back flex justify-center items-center text-start"
          >
            <p class="title-back font-bold p-2 text-white-900">
              A block in a blockchain is a collection of transactions grouped
              together. Each block contains a unique cryptographic hash, linking
              it to the previous block, forming a chain. This structure ensures
              immutability, transparency, and security within the decentralized
              ledger system.
            </p>
            <ButtonComponent
              text="Go to challenge"
              size="small"
              color="white"
              :onClick="() => goToChallenge('block')"
            />
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div
            class="flip-card-front"
            :class="{ complete: store.puzzles.blockchain }"
          >
            <p class="title">Blockchain</p>
            <p>Learn More</p>
          </div>
          <div
            class="flip-card-back flex justify-center items-center text-start"
          >
            <p class="title-back font-bold p-2 text-white-900">
              In a blockchain, a block is a grouping of transactions. Each block
              is uniquely identified by a cryptographic hash, which links it to
              the preceding block, creating a chain. This design guarantees
              immutability, transparency, and security within the decentralized
              ledger system.
            </p>
            <ButtonComponent
              text="Go to challenge"
              size="small"
              color="white"
              :onClick="() => goToChallenge('blockchain')"
            />
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div
            class="flip-card-front"
            :class="{ complete: store.puzzles.mining }"
          >
            <p class="title">Mining</p>
            <p>Learn More</p>
          </div>
          <div
            class="flip-card-back flex justify-center items-center text-start"
          >
            <p class="title-back font-bold p-2 text-white-900">
              Mining is the process by which new transactions are verified and
              added to the blockchain. Miners compete to solve complex
              mathematical puzzles, with the first to solve it earning the right
              to add the next block to the chain, along with a reward in the
              form of cryptocurrency.
            </p>
            <ButtonComponent
              text="Go to challenge"
              size="small"
              color="white"
              :onClick="() => goToChallenge('mining')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-slide-in-from-left {
  animation: slide-in-from-left 3s ease-out;
}
.flip-card-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}

.flip-card {
  background-color: transparent;
  width: 250px;
  height: 350px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 3px solid grey;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(120deg, #1a202c 75%, grey 80%, grey 90%);
  color: white;
}

.flip-card-back {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgb(0, 0, 0);
  color: white;
  transform: rotateY(180deg);
}

.complete {
  border-color: gold; /* Green border indicates completion */
  background-color: gold; /* Optional: lighter background for completed cards */
  color: gold;
  background: linear-gradient(120deg, #1a202c 75%, gold 80%, gold 90%);
}

.container {
  height: calc(100vh - 76px);
}
</style>

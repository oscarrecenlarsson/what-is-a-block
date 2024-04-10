<script setup lang="ts">
import bgImage1 from "../../assets/blockchain-white-and-blue-sections-e1xrmn9wneve45yx.jpg";

// const navigateToHome = () => {
//   { path: "/blockchain", component: BlockchainPageView },
// };
</script>

<template>
  <div
    class="h-screen w-full flex items-center justify-center flex-col section-2"
    :style="{ backgroundImage: `url(${bgImage1}) ` }"
  >
    <div class="flip-card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="title">Block</p>
            <p>Learn More</p>
          </div>
          <div class="flip-card-back">
            <p class="title-back font-bold p-2 text-white-900">
              In the context of blockchain technology, a block is a data
              structure that contains a group of transactions. These
              transactions are bundled together and added to the blockchain in a
              sequential order. Each block typically includes a cryptographic
              hash of the previous block, creating a chain-like structure.
            </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="title">Blockchain</p>
            <p>Learn More</p>
          </div>
          <div class="flip-card-back">
            <p class="title-back font-bold p-2 text-white-900 text-sm">
              A blockchain is a decentralized, distributed ledger technology
              that records transactions across multiple computers in a way that
              is transparent, secure, and tamper-resistant. Each block in the
              blockchain contains a cryptographic hash of the previous block,
              forming a chain of blocks. This technology is the foundation of
              cryptocurrencies like Bitcoin and has various applications beyond
              digital currencies, including supply chain management, voting
              systems, and decentralized finance (DeFi).
            </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="title">Mining</p>
            <p>Learn More</p>
          </div>
          <div class="flip-card-back">
            <p class="title-back font-bold p-2 text-white-900 text-sm">
              Mining is the process by which transactions are verified and added
              to the public ledger (blockchain) in cryptocurrencies like
              Bitcoin. Miners use powerful computers to solve complex
              mathematical puzzles, known as proof-of-work algorithms, to
              validate and secure transactions. In return for their efforts,
              miners are rewarded with newly created coins and transaction fees.
              Mining plays a crucial role in maintaining the integrity and
              security of blockchain networks.
            </p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="title">Certificate</p>
            <p>Learn More</p>
          </div>
          <div class="flip-card-back">
            <p class="title-back font-bold p-2 text-white-900 text-sm">
              Upon completing our blockchain tutorial, you'll receive a
              comprehensive certificate verifying your understanding and
              proficiency in blockchain technology. This certificate not only
              recognizes your commitment to learning but also demonstrates your
              capability to navigate and apply blockchain principles in various
              contexts. With this certification, you'll be well-equipped to
              explore opportunities in blockchain development, cryptocurrency
              trading, or other blockchain-related fields.
            </p>
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
  border: 3px solid rgb(0, 143, 0);
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(
    120deg,
    rgb(171, 171, 171) 60%,
    rgb(89, 89, 89) 88%,
    rgb(110, 99, 95) 40%,
    rgb(5, 99, 5) 48%
  );
  color: rgb(5, 99, 5);
}

.flip-card-back {
  background: linear-gradient(
    120deg,
    rgb(0, 0, 0) 48% rgb(110, 99, 95) 40%,
    rgb(249, 238, 235) 88%,
    rgb(11, 37, 144) 60%
  );
  border-color: rgb(0, 0, 0);
  color: white;
  transform: rotateY(180deg);
}
</style>

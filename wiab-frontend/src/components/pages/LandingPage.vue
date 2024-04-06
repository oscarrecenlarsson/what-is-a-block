<script setup lang="ts">
import bgImage1 from "../../assets/blockchain-white-and-blue-sections-e1xrmn9wneve45yx.jpg";
import bgImage3 from "../../assets/3d-digital-background-with-connecting-lines-dots.jpg";

// const navigateToHome = () => {
//   { path: "/blockchain", component: BlockchainPageView },
// };
</script>

<template>
  <div
    :style="{ backgroundImage: `url(${bgImage1}) ` }"
    class="h-screen w-full flex items-center justify-center flex-col section-1"
  >
    <h1
      class="text-4xl animate-slide-in-from-left text-white border-4 rounded-md bg-black p-4 mb-20"
    >
      What is a Block?
    </h1>
    <div class="content">
      <div class="block-icons flex flex-col font-bold">
        <div class="flex justify-center">
          <font-awesome-icon
            icon="stop"
            class="fa-solid fa-stop size-40 block-1"
          />
          <span
            class="absolute text-white text-lg font-bold bg-black px-2 py-1 mt-16 rounded shadow-lg"
            >Block</span
          >
        </div>
        <div class="flex justify-between">
          <font-awesome-icon
            icon="stop"
            class="fa-solid fa-stop size-40 block-2"
          />
          <span
            class="absolute text-white text-lg font-bold bg-black px-2 py-1 mt-14 rounded shadow-lg ml-[364px]"
            >Blockchain</span
          >
          <font-awesome-icon
            icon="stop"
            class="fa-solid fa-stop size-40 block-3"
          />
          <span
            class="absolute text-white text-lg font-bold mt-[20px] bg-black mt-16 px-2 py-1 rounded shadow-lg ml-12 mt-[10px]"
            >Mine</span
          >
        </div>
        <div class="flex justify-center">
          <font-awesome-icon
            icon="stop"
            class="fa-solid fa-stop size-40 block-4 mt-[20px]"
          />
          <span
            class="absolute text-white text-lg font-bold mt-[20px] bg-black mt-20 px-2 py-1 rounded shadow-lg"
            >Nounce</span
          >
        </div>
      </div>
      <h1 class="block-text text-2xl font-bold text-gray-700">
        Blockchain<br />Technology
      </h1>
    </div>
  </div>
  <div
    class="h-screen w-full flex items-center justify-center flex-col section-2"
    :style="{ backgroundImage: `url(${bgImage3}) ` }"
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
.content {
  display: flex;
  width: 500px;
  height: 500px;
  background: radial-gradient(520px, #f08f538c, transparent 70%);
}
.block-text {
  position: absolute;
  top: 63%;
  left: 47%;
}
.block-icons {
  height: 100%;
  width: 500px;
  animation: rotation 10s linear infinite;
}
@keyframes rotation {
  100% {
    transform: rotate(360deg);
  }
}
.block-icons font-awesome-icon {
  position: relative;
}

@keyframes slide-in-from-left {
  0% {
    transform: translateX(-1000%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

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
  border: 1px solid coral;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(
    120deg,
    rgb(11, 37, 144) 60%,
    rgb(249, 238, 235) 88%,
    rgb(110, 99, 95) 40%,
    rgb(200, 87, 0) 48%
  );
  color: rgb(200, 87, 0);
}

.flip-card-back {
  background: linear-gradient(
    120deg,
    rgb(200, 87, 0) 48% rgb(110, 99, 95) 40%,
    rgb(249, 238, 235) 88%,
    rgb(11, 37, 144) 60%
  );
  color: white;
  transform: rotateY(180deg);
}
</style>

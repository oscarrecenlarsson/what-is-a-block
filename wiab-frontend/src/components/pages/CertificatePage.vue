<script setup lang="ts">
import { ref, computed } from "vue";
import ButtonComponent from "../ButtonComponent.vue";
import bgImage2 from "../../assets/9120892.jpg";
import nftPic from "../../assets/NFTpicture.png";
import { ethers } from "ethers";
import ABI from "../../ABI.js";
import { usePuzzleStore } from "../../stores/puzzles";

const isLoading = ref(false);
const isSuccess = ref(false);

const buttonLabel = computed(() =>
  isConnected.value ? "Mint Certificate" : "Connect your Account"
);

declare global {
  interface Window {
    ethereum: any;
  }
}

let contract: ethers.Contract;
let userAddress: string | null = null;
const contractAddress = "0x9a9de35Eda644410aa41b44905c8F650B66E75b2";

async function interactWithContract() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    userAddress = await signer.getAddress();
    contract = new ethers.Contract(contractAddress, ABI, signer);
    const formattedAddress = ethers.utils.getAddress(contractAddress);
    console.log(`Formatted address: ${formattedAddress}`);

    // Check if the user is already connected
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length > 0) {
      isConnected.value = true;
    }
  } else {
    console.error(
      "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp"
    );
  }
}

interactWithContract();

const isConnected = ref(false);

const mintClick = async () => {
  console.log("Button clicked");
  isLoading.value = true;
  try {
    // Check if Ethereum provider is available
    if (typeof window.ethereum === "undefined") {
      console.error(
        "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp"
      );
      return;
    }

    // Check if user is connected
    if (!userAddress) {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      userAddress = await signer.getAddress();
      isConnected.value = true;
      return;
    }

    // Check if contract is initialized
    if (!contract) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, ABI, signer);
    }

    // Start the minting process
    if (isConnected.value && userAddress && contract) {
      const tx = await contract.mint(userAddress, {
        value: ethers.utils.parseEther("0.005"),
      });
      await tx.wait();
      isSuccess.value = true;
    } else {
      console.error("User address not found");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    isLoading.value = false;
  }
};

const closeModal = () => {
  isSuccess.value = false;
  console.log("isSuccess:", isSuccess.value, "IS FALSE?");
};

const store = usePuzzleStore();

const puzzleStates = computed(() => {
  return {
    block: store.puzzles.block ? "✔️" : "❌",
    blockchain: store.puzzles.blockchain ? "✔️" : "❌",
    mining: store.puzzles.mining ? "✔️" : "❌",
  };
});
</script>
<template>
  <div
    class="h-screen w-full flex items-center justify-center flex-col shadow-cover"
    :style="{ backgroundImage: `url(${bgImage2}) ` }"
  >
    <div
      v-if="store.completedCount !== 3"
      style="color: white"
      class="h-screen w-full flex items-center justify-center flex-col shadow-cover"
    >
      <h1
        class="mb-10 pb-10 text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-600"
        style="max-width: 800px"
      >
        Come back here when you have completed all of the challenges
      </h1>
      <p>Block: {{ puzzleStates.block }}</p>
      <p>Blockchain: {{ puzzleStates.blockchain }}</p>
      <p>Mining: {{ puzzleStates.mining }}</p>
    </div>

    <div
      v-else
      class="h-screen w-full flex items-center justify-center flex-col shadow-cover"
    >
      <h1
        class="mb-10 text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-600"
      >
        YOU MADE IT, CONGRATULATIONS!
      </h1>
      <div class="rounded-lg overflow-hidden">
        <img :src="nftPic" alt="NFT Picture" class="object-cover w-96 h-96" />
      </div>
      <ButtonComponent
        :text="buttonLabel"
        size="large"
        color="black"
        @click="mintClick"
        class="mt-5"
      />
      <div
        v-if="isLoading"
        class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center min-h-screen w-full"
      >
        <div class="loader"></div>
      </div>
      <div
        v-if="isSuccess"
        class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center min-h-screen"
      >
        <div
          class="bg-white p-4 rounded-lg shadow-lg text-center w-1/3 h-64 flex items-center justify-center flex-col"
        >
          <h2 class="text-2xl mb-4">Success!</h2>
          <p>Your NFT has been minted.</p>
          <button
            @click="closeModal"
            class="mt-4 px-4 py-2 bg-custom-green text-white rounded hover:bg-custom-green-dark"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  border: 10px solid #cfcdcd;
  border-top: 10px solid #0e8753;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.shadow-cover {
  height: calc(100vh - 100px);
}
</style>

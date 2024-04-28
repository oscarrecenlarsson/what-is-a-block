<script lang="ts">
import { defineComponent, reactive } from "vue";

interface DraggableBox {
  id: number;
  label: string;
  matched: boolean;
}

export default defineComponent({
  name: "CBlockchain",
  setup() {
    const state = reactive({
      draggableBoxes: [
        { id: 2, hash: "QWE2", prevHash: "RTY1", matched: false },
        { id: 3, hash: "DVO3", prevHash: "QWE2", matched: false },
        { id: 1, hash: "RTY1", prevHash: "0000", matched: false },
        { id: 5, hash: "COL5", prevHash: "RAK4", matched: false },
        { id: 4, hash: "RAK4", prevHash: "DVO3", matched: false },
      ],
      targetBoxes: [
        {
          id: 1,
          hash: "RTY1",
          prevHash: "0000",
          matched: false,
          showLabel: false,
        },
        {
          id: 2,
          hash: "QWE2",
          prevHash: "RTY1",
          matched: false,
          showLabel: false,
        },
        {
          id: 3,
          hash: "DVO3",
          prevHash: "QWE2",
          matched: false,
          showLabel: false,
        },
        {
          id: 4,
          hash: "RAK4",
          prevHash: "DVO3",
          matched: false,
          showLabel: false,
        },
        {
          id: 5,
          hash: "COL5",
          prevHash: "RAK4",
          matched: false,
          showLabel: false,
        },
      ],
      currentDraggedItem: null as DraggableBox | null,
    });

    const handleDragStart = (_event: DragEvent, box: any) => {
      state.currentDraggedItem = box;
    };

    const handleDrop = (_event: DragEvent, targetBox: any) => {
      if (
        state.currentDraggedItem &&
        state.currentDraggedItem.id === targetBox.id
      ) {
        targetBox.matched = true;
        state.currentDraggedItem.matched = true;
        targetBox.showLabel = true;
      }
      state.currentDraggedItem = null;
    };

    return {
      ...state,
      handleDragStart,
      handleDrop,
    };
  },
});
</script>

<template>
  <div class="block-container">
    <div class="drag-blocks">
      <div
        class="drag-block"
        v-for="box in draggableBoxes"
        :key="box.id"
        :class="{ matched: box.matched }"
        :draggable="!box.matched"
        @dragstart="handleDragStart($event, box)"
      >
        <div class="checkmark-circle" v-if="box.matched">✓</div>
        <div
          v-html="
            `<h5>Blockhashes</h5><br />Current: ${box.hash}<br />Previous: ${box.prevHash}`
          "
        ></div>
      </div>
    </div>

    <div class="drop-blocks">
      <div
        class="drop-block"
        v-for="box in targetBoxes"
        :key="box.id"
        :class="{ matched: box.matched }"
        @dragover.prevent
        @drop="handleDrop($event, box)"
      >
        <div
          v-html="
            box.showLabel
              ? `<h5>Blockhashes</h5><br />Current: ${box.hash}<br />Previous: ${box.prevHash}`
              : '?'
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --blockSize: 150px;
}

.block-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  min-width: 100%;
  padding: 50px;
}

.drop-blocks {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.drag-blocks {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.drop-block {
  width: var(--blockSize);
  height: var(--blockSize);
  border: 2.5px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
  text-align: center;
}

.drop-block.matched {
  border-color: gold;
  cursor: default;
}

.drag-block {
  position: relative;
  width: var(--blockSize);
  height: var(--blockSize);
  background-color: rgb(221, 221, 221);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2.5px solid black;
  cursor: grab;
  text-align: center;
}

.drag-block.matched {
  border-color: green;
  opacity: 0.5;
  cursor: default;
}

.checkmark-circle {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

h5 {
  font-weight: bold;
}
</style>

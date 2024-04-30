<script lang="ts">
import { defineComponent, reactive } from "vue";
import { usePuzzleStore } from "../stores/puzzles";

interface DraggableBox {
  id: number;
  label: string;
  matched: boolean;
  noMatch: boolean;
}

export default defineComponent({
  name: "CMining",
  setup() {
    const store = usePuzzleStore();
    const state = reactive({
      draggableBoxes: [
        { id: 2, nonce: "1241532", matched: false, noMatch: false },
        { id: 3, nonce: "4342141", matched: false, noMatch: false },
        { id: 4, nonce: "5244312", matched: false, noMatch: false },
        { id: 5, nonce: "3142345", matched: false, noMatch: false },
        { id: 6, nonce: "9283741", matched: false, noMatch: false },
        { id: 1, nonce: "5244892", matched: false, noMatch: false },
        { id: 7, nonce: "3142345", matched: false, noMatch: false },
        { id: 8, nonce: "9208741", matched: false, noMatch: false },
      ],
      targetBoxes: [
        {
          id: 1,
          hash: "RTY1",
          prevHash: "0000",
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
        checkAllMatched();
      } else if (state.currentDraggedItem) {
        state.currentDraggedItem.noMatch = true;
      }
      state.currentDraggedItem = null;
    };

    const checkAllMatched = () => {
      if (state.targetBoxes.every((box) => box.matched)) {
        store.completePuzzle("mining");
      }
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
        :class="{ matched: box.matched, noMatch: box.noMatch }"
        :draggable="!box.matched"
        @dragstart="handleDragStart($event, box)"
      >
        <div class="checkmark-circle" v-if="box.matched">✓</div>
        <div class="cross-circle" v-if="box.noMatch">X</div>
        <div v-html="`<h5>Nonces</h5><br />${box.nonce}`"></div>
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
              ? `<h5>Mining</h5><br />Successful!`
              : '<h5>Mine here</h5>'
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

.drag-block.noMatch {
  border-color: red;
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

.cross-circle {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background-color: red;
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

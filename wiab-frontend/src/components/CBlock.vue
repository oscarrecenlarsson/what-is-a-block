<script lang="ts">
import { defineComponent, reactive } from "vue";
import { usePuzzleStore } from "../stores/puzzles";

interface DraggableBox {
  id: number;
  label: string;
  matched: boolean;
}

export default defineComponent({
  name: "CBlock",
  setup() {
    const store = usePuzzleStore();
    const state = reactive({
      draggableBoxes: [
        { id: 1, label: "timestamp", matched: false },
        { id: 2, label: "hash", matched: false },
        { id: 3, label: "data", matched: false },
        { id: 4, label: "prevHash", matched: false },
        { id: 5, label: "nonce", matched: false },
      ],
      targetBoxes: [
        { id: 1, label: "2024-03-25", matched: false, showLabel: false },
        { id: 2, label: "19d6689c085a", matched: false, showLabel: false },
        {
          id: 3,
          label:
            "{transactionID: 987, from: 0x123, to: 0x234, amount: 0.1 eth}",
          matched: false,
          showLabel: false,
        },
        { id: 4, label: "000000000000", matched: false, showLabel: false },
        { id: 5, label: "42", matched: false, showLabel: false },
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
      }
      state.currentDraggedItem = null;
    };

    const toggleLabel = (box: any) => {
      if (!box.showLabel) {
        box.showLabel = true;
        setTimeout(() => {
          if (!box.matched) {
            box.showLabel = false;
          }
        }, 2000);
      }
    };

    const checkAllMatched = () => {
      if (state.targetBoxes.every((box) => box.matched)) {
        store.completePuzzle("block");
      }
    };

    return {
      ...state,
      handleDragStart,
      handleDrop,
      toggleLabel,
    };
  },
});
</script>

<template>
  <div class="container">
    <div class="drop-boxes">
      <div class="row">
        <div
          class="drop-box"
          v-for="box in targetBoxes.slice(0, 2)"
          :key="box.id"
          :class="{ matched: box.matched }"
          @dragover.prevent
          @drop="handleDrop($event, box)"
          @click="toggleLabel(box)"
        >
          {{ box.showLabel ? box.label : "?" }}
        </div>
      </div>
      <div class="row big">
        <div
          class="drop-box"
          v-for="box in targetBoxes.slice(2, 3)"
          :key="box.id"
          :class="{ matched: box.matched }"
          @dragover.prevent
          @drop="handleDrop($event, box)"
          @click="toggleLabel(box)"
        >
          {{ box.showLabel ? box.label : "?" }}
        </div>
      </div>
      <div class="row">
        <div
          class="drop-box"
          v-for="box in targetBoxes.slice(3)"
          :key="box.id"
          :class="{ matched: box.matched }"
          @dragover.prevent
          @drop="handleDrop($event, box)"
          @click="toggleLabel(box)"
        >
          {{ box.showLabel ? box.label : "?" }}
        </div>
      </div>
    </div>
    <div class="drag-boxes">
      <div
        class="drag-box"
        v-for="box in draggableBoxes"
        :key="box.id"
        :class="{ matched: box.matched }"
        :draggable="!box.matched"
        @dragstart="handleDragStart($event, box)"
      >
        <div class="checkmark-circle" v-if="box.matched">✓</div>
        {{ box.label }}
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --gap: 10px;
  --width: 300px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  min-width: 100%;
}

.drop-boxes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap);
}

.drag-boxes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.row {
  display: flex;
  justify-content: center;
  gap: var(--gap);
}

.row.big .drop-box {
  width: var(--width);
  height: 200px;
}

.drop-box {
  width: calc((var(--width) - var(--gap)) / 2);
  height: 50px;
  border: 2.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.drop-box.matched {
  border-color: gold;
  cursor: default;
}

.drag-box {
  position: relative;
  width: 137px;
  height: 50px;
  background-color: rgb(221, 221, 221);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2.5px solid black;
  cursor: grab;
}

.drag-box.matched {
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
</style>

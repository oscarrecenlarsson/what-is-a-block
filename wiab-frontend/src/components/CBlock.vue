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
        {{ box.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "DragAndDropExample",
  setup() {
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
        { id: 2, label: "abcdef123456", matched: false, showLabel: false },
        { id: 3, label: "Some Data", matched: false, showLabel: false },
        { id: 4, label: "987654fedcba", matched: false, showLabel: false },
        { id: 5, label: "42", matched: false, showLabel: false },
      ],
      currentDraggedItem: null,
    });

    const handleDragStart = (event: DragEvent, box: any) => {
      state.currentDraggedItem = box;
    };

    const handleDrop = (event: DragEvent, targetBox: any) => {
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

    const toggleLabel = (box: any) => {
      if (!box.showLabel) {
        box.showLabel = true;
        setTimeout(() => {
          box.showLabel = false;
        }, 2000);
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
}

.drag-box {
  width: 137px;
  height: 50px;
  background-color: rgb(221, 221, 221);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2.5px solid black;
  cursor: pointer;
}

.drag-box.matched {
  border-color: green;
  opacity: 0.5;
}
</style>

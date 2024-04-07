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
        >
          {{ box.label }}
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
        >
          {{ box.label }}
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
        >
          {{ box.label }}
        </div>
      </div>
    </div>
    <div class="drag-boxes">
      <div
        class="drag-box"
        v-for="box in draggableBoxes"
        :key="box.id"
        :class="{ matched: box.matched }"
        draggable="true"
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
        { id: 1, label: "2024-03-25", matched: false },
        { id: 2, label: "abcdef123456", matched: false },
        { id: 3, label: "Some Data", matched: false },
        { id: 4, label: "987654fedcba", matched: false },
        { id: 5, label: "42", matched: false },
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

<style>
.container {
  display: flex;
  justify-content: center;
  gap: 100px;
}

.drop-boxes,
.drag-boxes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.row.big .drop-box {
  width: 290px;
  height: 200px;
}

.drop-box {
  width: 130px;
  height: 130px;
  border: 5px solid black;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.drop-box.matched {
  border-color: green;
}

.drag-box {
  width: 130px;
  height: 130px;
  background-color: rgb(153, 153, 153);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
}

.drag-box.matched {
  border-color: green;
}
</style>

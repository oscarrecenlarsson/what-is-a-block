import { defineStore } from "pinia";

interface Puzzles {
  block: boolean;
  blockchain: boolean;
  mining: boolean;
}

export const usePuzzleStore = defineStore("puzzleStore", {
  state: () => {
    const puzzlesData = localStorage.getItem("puzzles");
    const defaultPuzzles: Puzzles = {
      block: false,
      blockchain: false,
      mining: false,
    };

    return {
      puzzles: puzzlesData
        ? (JSON.parse(puzzlesData) as Puzzles)
        : defaultPuzzles,
    };
  },
  getters: {
    completedCount(state): number {
      return Object.values(state.puzzles).filter((completed) => completed)
        .length;
    },
  },
  actions: {
    completePuzzle(puzzleName: keyof Puzzles) {
      if (puzzleName in this.puzzles && !this.puzzles[puzzleName]) {
        this.puzzles[puzzleName] = true;
        this.savePuzzles();
      }
    },
    resetPuzzle(puzzleName: keyof Puzzles) {
      if (puzzleName in this.puzzles && this.puzzles[puzzleName]) {
        this.puzzles[puzzleName] = false;
        this.savePuzzles();
      }
    },
    savePuzzles() {
      localStorage.setItem("puzzles", JSON.stringify(this.puzzles));
    },
  },
});

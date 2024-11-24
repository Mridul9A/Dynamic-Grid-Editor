import { validateGrid } from "./gridLogic";

export const randomFill = () => {
  const grid = Array(10)
    .fill(null)
    .map(() => Array(10).fill(0));

  let attempts = 0;

  while (attempts < 100) { 
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        grid[i][j] = Math.random() < 0.3 ? 1 : 0; 
      }
    }

    if (validateGrid(grid)) {
      return grid;
    }

    attempts++;
  }

  console.error("Failed to generate a valid grid after multiple attempts.");
  return null; 
};

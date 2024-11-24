export const validateGrid = (grid) => {
  const rowCounts = Array(10).fill(0);
  const colCounts = Array(10).fill(0);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j] === 1) {
        rowCounts[i]++;
        colCounts[j]++;
      }
    }
  }

  if (rowCounts.some((count) => count > 3) || colCounts.some((count) => count > 3)) {
    return false;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (
        grid[i][j] === 1 &&
        grid[i + 1][j] === 1 &&
        grid[i][j + 1] === 1 &&
        grid[i + 1][j + 1] === 1
      ) {
        return false;
      }
    }
  }

  return true;
};

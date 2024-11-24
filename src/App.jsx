import React, { useState } from "react";
import Grid from "./components/Grid/Grid";
import Toolbar from "./components/Toolbar/Toolbar";
import Legend from "./components/Legend/Legend";
import "./styles/globals.css";
import { validateGrid } from "./utils/gridLogic";

function App() {
  const [grid, setGrid] = useState(Array(10).fill(Array(10).fill(0))); 
  const [error, setError] = useState("");

  const handleError = (message) => {
    setError(message);
    setTimeout(() => setError(""), 3000); 
  };

  const toggleCell = (row, col) => {
    const newGrid = grid.map((rowArray) => [...rowArray]);

    newGrid[row][col] = newGrid[row][col] === 0 ? 1 : 0;

    if (newGrid[row][col] === 1) {
      if (row > 0) newGrid[row - 1][col] = 1; 
      if (row < 9) newGrid[row + 1][col] = 1; 
      if (col > 0) newGrid[row][col - 1] = 1; 
      if (col < 9) newGrid[row][col + 1] = 1; 
    }

    if (!validateGrid(newGrid)) {
      handleError("Invalid move! Constraints violated.");
      return;
    }

    setGrid(newGrid); 
  };

  return (
    <div className="app">
      <h1>Dynamic Grid</h1>
      <Toolbar grid={grid} setGrid={setGrid} setError={handleError} />
      {error && <div className="error-notification">{error}</div>}
      <Grid grid={grid} toggleCell={toggleCell} />
      <Legend />
    </div>
  );
}

export default App;

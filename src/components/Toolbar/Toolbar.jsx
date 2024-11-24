import React from "react";
import { randomFill } from "../../utils/randomFill";
import "./Toolbar.css";

const Toolbar = ({ grid, setGrid, setError }) => {
  const handleReset = () => {
    const emptyGrid = Array(10)
      .fill(null)
      .map(() => Array(10).fill(0));
    setGrid(emptyGrid); 
  };

  const handleRandomFill = () => {
    const filledGrid = randomFill();
    if (!filledGrid) {
      setError("Failed to generate a valid grid! Try again.");
      return;
    }
    setGrid(filledGrid); 
  };

  return (
    <div className="toolbar">
      <button onClick={handleReset}>Reset Grid</button>
      <button onClick={handleRandomFill}>Random Fill</button>
    </div>
  );
};

export default Toolbar;

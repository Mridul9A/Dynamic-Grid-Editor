import React from "react";
import Cell from "./cell";
import "./Grid.css";

const Grid = ({ grid, toggleCell }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            onClick={() => toggleCell(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default Grid;

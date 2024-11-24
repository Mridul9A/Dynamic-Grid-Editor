import React from "react";
import "./Grid.css";

const Cell = ({ value, onClick }) => {
  return (
    <div
      className={`cell ${value === 1 ? "filled" : "empty"}`}
      onClick={onClick}
    />
  );
};

export default Cell;

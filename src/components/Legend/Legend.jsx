import React from "react";
import "./Legend.css";

const Legend = () => {
  return (
    <div className="legend">
      <h3>Legend:</h3>
      <div>
        <span className="legend-box empty"></span> Empty (0)
      </div>
      <div>
        <span className="legend-box filled"></span> Filled (1)
      </div>
    </div>
  );
};

export default Legend;

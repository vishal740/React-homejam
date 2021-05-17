import "./Circle.css";
import React from "react";

function Circle({ icon, count, label, colorClass }) {
  return (
    <div
      className={`homepage__circle ${
        colorClass === true ? "homepage__circle__active" : null
      }  `}
    >
      <div className="homepage__circle__content">
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div className="homepage__circle__count">{count}</div>
        <div className="homepage__circle__label">{label}</div>
      </div>
    </div>
  );
}

export default Circle;

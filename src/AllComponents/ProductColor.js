import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export const ProductColor = ({ colors }) => {
  const [mainColor, setMainColor] = useState(colors[0]);
  return (
    <div className="product-colors d-flex">
      {colors.map(function (color, index) {
        return (
          <button
            className={
              mainColor === color ? "color-icon active-icon" : "color-icon"
            }
            style={{ backgroundColor: color }}
            key={index}
            onClick={() => setMainColor(color)}
          >
            {mainColor === color ? <FaCheck className="right-icon" /> : ""}
          </button>
        );
      })}
    </div>
  );
};

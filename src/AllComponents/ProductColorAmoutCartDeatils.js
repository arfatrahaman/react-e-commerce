import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useFilterProductContext } from "../ProductApiData/FilterProductData";

export const ProductColorAmoutCartDeatils = ({ stock, singleProduct }) => {
  const { handleCart } = useFilterProductContext();
  const [productCount, setProductCount] = useState(1);
  const { id, name, img, price, colors } = singleProduct[0];
  const [mainColor, setMainColor] = useState(colors[0]);

  const handleProductDecrease = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  const handleProductIncrease = () => {
    if (stock > productCount) {
      setProductCount(productCount + 1);
    }
  };

  return (
    <div className="product-color-amount-cart-details">
      <div className="product-colors d-flex p-b-2rem">
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
      <div className="product-count-amout p-b-2rem">
        <div className="product-amount">
          <div className="product-decrease-button ">
            <button
              onClick={handleProductDecrease}
              className="amout-btn decrease-btn"
            >
              <FaMinus />
            </button>
          </div>
          <div className="product-amount-count">
            <h2>{productCount}</h2>
          </div>
          <div className="product-increase-button">
            <button
              onClick={handleProductIncrease}
              className="amout-btn increase-btn"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="product-add-to-cart p-b-2rem">
        <NavLink to="/addtocartpage">
          <button
            className="cart-btn"
            onClick={() =>
              handleCart(
                id,
                name,
                img,
                price,
                productCount,
                mainColor,
                stock,
                singleProduct
              )
            }
          >
            Add To Cart
          </button>
        </NavLink>
      </div>
    </div>
  );
};

import React from "react";
import { useFilterProductContext } from "../ProductApiData/FilterProductData";
import { AiFillDelete } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const AddToCartPage = () => {
  const {
    addToCartData,
    deleteCartProduct,
    setIncrease,
    setDecrease,
    deleteCartData,
    totalPrice,
    shipingFee,
  } = useFilterProductContext();

  if (addToCartData.length === 0) {
    return (
      <div className="no-data-fount">
        <h2>No Cart Data Fount</h2>
      </div>
    );
  }
  return (
    <section id="add-to-cart-page">
      <div className="container">
        <div className="add-to-cart-page-wrapper">
          {/* Cart Page Top Title */}
          <div className="cart-page-title-wrapper d-grid-5fr p-b-2rem">
            <div className="cart-item-name">
              <div className="item-name">
                <h6>Name</h6>
              </div>
            </div>
            <div className="cart-item-price">
              <div className="item-price">
                <h6>Price</h6>
              </div>
            </div>
            <div className="cart-item-amount">
              <div className="item-amount">
                <h6>Amount</h6>
              </div>
            </div>
            <div className="cart-item-sub-total">
              <h6>Sub Total</h6>
            </div>
            <div className="cart-item-delete-item">
              <h6>Delete Item</h6>
            </div>
          </div>
          {/* Cart Page Save Product Detail*/}
          <div className="add-to-cart-page-item-wrapper">
            {addToCartData.map(function (item) {
              const { id, name, img, price, productCount, mainColor } = item;
              return (
                <div className="cart-product-wrapper d-grid-5fr" key={id}>
                  <div className="cart-product-name-img-color">
                    <div className="cart-product-name m-b-1rem">
                      <h4>{name}</h4>
                    </div>
                    <div className="cart-product-img m-b-1rem">
                      <img src={img} alt="" className="cart-img" />
                    </div>
                    <div className="cart-product-color m-b-1rem">
                      <p
                        className="color-icon cart-color"
                        style={{ backgroundColor: mainColor }}
                      >
                        {mainColor === mainColor ? "" : ""}
                      </p>
                    </div>
                  </div>
                  <div className="cart-product-price">
                    <p>{price}</p>
                  </div>
                  <div className="cart-product-amount">
                    <div className="product-amount">
                      <div className="product-decrease-button ">
                        <button
                          className="amout-btn decrease-btn"
                          onClick={() => setDecrease(id)}
                        >
                          <FaMinus />
                        </button>
                      </div>
                      <div className="product-amount-count">
                        <h2>{productCount}</h2>
                      </div>
                      <div className="product-increase-button">
                        <button
                          className="amout-btn increase-btn"
                          onClick={() => setIncrease(id)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cart-product-sub-total">
                    <p>{productCount * price}</p>
                  </div>
                  <div className="cart-product-delete">
                    <a onClick={() => deleteCartProduct(id)}>
                      <AiFillDelete />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Cart Page Buttons */}
          <div className="cart-clear-buttons d-flex-j-between">
            <NavLink to="/productpage">
              <button className="shopping-btn">Continuos Shopping</button>
            </NavLink>
            <button onClick={deleteCartData} className="clear-cart-btn">
              Clear All Cart
            </button>
          </div>
          {/* Cart Page Product Total Price */}
          <div className="cart-page-total-price">
            <div className="total-product-price d-flex">
              <p>Total SubTotal:</p>
              <h6>{totalPrice}</h6>
            </div>
            <div className="shopping-price d-flex">
              <p>Shopping Price:</p>
              <h6>{shipingFee}</h6>
            </div>

            <div className="total-prices d-flex">
              <p>Total Price: </p>
              <h6>{totalPrice + shipingFee}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

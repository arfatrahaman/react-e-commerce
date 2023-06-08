import React from "react";
import { useState } from "react";
import { useFilterProductContext } from "../ProductApiData/FilterProductData";
import { FaCheck } from "react-icons/fa";

export const FilterProductLeft = () => {
  const {
    allProduct,
    filter: { searchText, category, color, minPrice, maxPrice, price },
    handleFilterProduct,
  } = useFilterProductContext();

  const getUniqueFuncton = (products, uniqueData) => {
    let newData = products.map((product) => {
      return product[uniqueData];
    });
    if (uniqueData === "colors") {
      newData = newData.flat();
    }
    return (newData = ["all", ...new Set(newData)]);
  };

  // Unique Function
  const getCategoryData = getUniqueFuncton(allProduct, "category");
  const getColorData = getUniqueFuncton(allProduct, "colors");

  return (
    <div className="filter-product-left-inner">
      <div className="filter-product-left-top-item">
        {/* Product Search Bar */}
        <div className="filter-product-search-bar p-b-2rem">
          <form action="" onClick={(e) => e.preventDefault()}>
            <input
              type="text"
              name="searchText"
              className="filter-search-bar"
              placeholder="Search Your Product"
              value={searchText}
              onChange={handleFilterProduct}
            />
          </form>
        </div>
      </div>
      <div className="filter-product-left-bottom-item">
        {/* Filter Category Options */}
        <div className="filter-product-category-option p-b-2rem">
          <div className="section-headline">
            <h4 className="section-title">Category</h4>
          </div>
          <div className="filter-product-category">
            {getCategoryData.map((category, index) => {
              return (
                <button
                  name="category"
                  value={category}
                  className="category-button"
                  onClick={handleFilterProduct}
                  key={index}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        {/* Filter Color Options */}
        <div className="filter-product-color-options p-b-2rem">
          <div className="section-headline">
            <h4 className="section-title">Colors</h4>
          </div>
          <div className="filter-color-button d-flex">
            {getColorData.map((currentColor, index) => {
              return (
                <button
                  name="color"
                  value={currentColor}
                  style={{ backgroundColor: currentColor }}
                  key={index}
                  className={
                    color === currentColor
                      ? "color-icon active-icon"
                      : "color-icon"
                  }
                  onClick={handleFilterProduct}
                >
                  {color === currentColor ? <FaCheck /> : ""}
                </button>
              );
            })}
          </div>
        </div>
        {/* Filter Product Price Option */}
        <div className="filter-product-price-option">
          <div className="filter-price-range">
            <div className="section-headline">
              <h4 className="section-title">Price Range: {price}</h4>
            </div>
            <input
              type="range"
              name="price"
              value={price}
              min={minPrice}
              max={maxPrice}
              onChange={handleFilterProduct}
              className="filter-price-range-bar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

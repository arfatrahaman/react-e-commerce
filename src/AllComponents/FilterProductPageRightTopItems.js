import React from "react";
import { BsGridFill, BsViewList } from "react-icons/bs";
import { useFilterProductContext } from "../ProductApiData/FilterProductData";

export const FilterProductPageRightTopItems = () => {
  const {
    gridView,
    filterProductsData,
    handleGridView,
    handleListView,
    sortProductData,
  } = useFilterProductContext();
  return (
    <div className="filter-page-right-top-wrapper d-flex-j-between p-b-2rem">
      <div className="filter-page-right-top-item-1">
        <div className="product-view-toggle-button">
          <button
            onClick={handleGridView}
            className={
              gridView === true
                ? "view-toggle-icon active-toggle-icon"
                : "view-toggle-icon"
            }
          >
            <BsGridFill />
          </button>
          <button
            onClick={handleListView}
            className={
              gridView === false
                ? "view-toggle-icon active-toggle-icon"
                : "view-toggle-icon"
            }
          >
            <BsViewList />
          </button>
        </div>
      </div>
      <div className="filter-page-right-top-item-2">
        <div className="filter-products-count">
          <p>{filterProductsData.length} Products Found</p>
        </div>
      </div>
      <div className="filter-page-right-top-item-3">
        <div className="filter-products-sort-item-option">
          <form
            className="filter-sort-products-option"
            onClick={sortProductData}
          >
            <select>
              <option value="highest">Height</option>
              <option value="lowest">Lowest</option>
              <option value="a-z">A-Z Products</option>
              <option value="z-a">Z-A Products</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

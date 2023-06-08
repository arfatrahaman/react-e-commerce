import React from "react";
import { FilterProductPageRightTopItems } from "./FilterProductPageRightTopItems";
import { FilterProductRightBottomItems } from "./FilterProductRightBottomItems";

export default function FilterProductRight() {
  return (
    <div className="filter-product-right-inner">
      <div className="filter-product-right-top-items">
        <FilterProductPageRightTopItems />
      </div>
      <div className="filter-product-right-bottom-items">
        <FilterProductRightBottomItems />
      </div>
    </div>
  );
}

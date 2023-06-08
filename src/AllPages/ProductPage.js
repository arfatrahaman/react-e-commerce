import React from "react";
import { FilterProductLeft } from "../AllComponents/FilterProductLeft";
import FilterProductRight from "../AllComponents/FilterProductRight";

export const ProductPage = () => {
  return (
    <section id="filter-products">
      <div className="container">
        <div className="filter-products-page-wrapper">
          <div className="filter-product-left filter-product-item">
            <FilterProductLeft />
          </div>
          <div className="filter-product-right filter-product-item">
            <FilterProductRight />
          </div>
        </div>
      </div>
    </section>
  );
};

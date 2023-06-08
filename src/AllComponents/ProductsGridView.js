import React from "react";
import { useFilterProductContext } from "../ProductApiData/FilterProductData";
import { SingleProductDeatils } from "./SingleProductDeatils";

export const ProductsGridView = () => {
  const { filterProductsData } = useFilterProductContext();
  return (
    <div className="filter-product-right-bottom-items-inner">
      <div className="filter-products-wrapper">
        {filterProductsData.map((currentProduct) => {
          return (
            <SingleProductDeatils
              currentProduct={currentProduct}
              key={currentProduct.id}
            />
          );
        })}
      </div>
    </div>
  );
};

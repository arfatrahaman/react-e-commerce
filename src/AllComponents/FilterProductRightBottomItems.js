import React from "react";
import { useFilterProductContext } from "../ProductApiData/FilterProductData";
import { ProductListView } from "./ProductListView";
import { ProductsGridView } from "./ProductsGridView";

export const FilterProductRightBottomItems = () => {
  const { gridView } = useFilterProductContext();
  if (gridView === true) {
    return <ProductsGridView />;
  }
  if (gridView === false) {
    return <ProductListView />;
  }
};

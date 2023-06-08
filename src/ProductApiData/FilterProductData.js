import React, { useReducer, useEffect, createContext, useContext } from "react";

import reducer from "./FilterProductReducer";

import { useAppContextData } from "./AppProductContext";
const FilterContext = createContext();

const getSaveCartItem = () => {
  let cartItem = localStorage.getItem("Cart-Item");
  let LocalStoreArrayData = JSON.parse(cartItem);
  if (!Array.isArray(LocalStoreArrayData)) {
    return [];
  }
  return LocalStoreArrayData;
};

const defaultFilterValue = {
  allProduct: [],
  filterProductsData: [],
  gridView: true,
  sortData: "highest",
  filter: {
    searchText: "",
    category: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
  addToCartData: getSaveCartItem(),
  totalItems: "",
  totalPrice: "",
  shipingFee: 50,
};

export const FilterProductData = ({ children }) => {
  const { allProductsData } = useAppContextData();
  const [state, dispatch] = useReducer(reducer, defaultFilterValue);

  const handleGridView = () => {
    dispatch({ type: "DISPLAY_GRID_VIEW" });
  };

  const handleListView = () => {
    dispatch({ type: "DISPLAY_LIST_VIEW" });
  };

  const sortProductData = (e) => {
    const value = e.target.value;
    dispatch({ type: "SORT_VALUE", payload: value });
  };

  const handleFilterProduct = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "GET_FILTER_PRODUCT_DATA", payload: { name, value } });
  };

  const handleCart = (id, name, img, price, productCount, mainColor, stock) => {
    dispatch({
      type: "HANDLE_CART_DATA",
      payload: { id, name, img, price, productCount, mainColor, stock },
    });
  };

  const deleteCartProduct = (id) => {
    dispatch({ type: "DELETE_CART_PRODUCT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  const deleteCartData = () => {
    dispatch({ type: "DELETE_ALL_CART_DATA" });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_ITEMS" });
    dispatch({ type: "GET_ALL_CART_PRODUCT-PRICE" });
    localStorage.setItem("Cart-Item", JSON.stringify(state.addToCartData));
  }, [state.addToCartData]);

  useEffect(() => {
    dispatch({ type: "DISPLAY_FILTER_PRODUCT" });
    dispatch({ type: "DISPLAY_SORT_PRODUCT", payload: allProductsData });
  }, [allProductsData, state.sortData, state.filter]);

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT_DATA", payload: allProductsData });
  }, [allProductsData]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        handleListView,
        handleGridView,
        sortProductData,
        handleFilterProduct,
        handleCart,
        deleteCartProduct,
        setIncrease,
        setDecrease,
        deleteCartData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterProductContext = () => {
  return useContext(FilterContext);
};

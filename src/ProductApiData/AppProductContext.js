import React, { useReducer, useEffect, useContext, createContext } from "react";

import { productData } from "./productData";

import reducer from "./AllProductReducer";

const AppContext = createContext();

const stateDefaultValue = {
  allProductsData: [],
  featuredProductsData: [],
  singleProduct: {},
};

export const AppProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, stateDefaultValue);

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS_DATA", payload: productData });
  }, [productData]);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useAppContextData = () => {
  return useContext(AppContext);
};

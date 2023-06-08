const AllProductReducer = (state, action) => {
  if (action.type === "GET_ALL_PRODUCTS_DATA") {
    const getAllProducts = action.payload;
    const getfeaturedProducts = getAllProducts.filter((currentProduct) => {
      return currentProduct.featured === true;
    });
    return {
      ...state,
      allProductsData: getAllProducts,
      featuredProductsData: getfeaturedProducts,
    };
  }
  return state;
};

export default AllProductReducer;

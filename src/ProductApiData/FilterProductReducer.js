const FilterProductReducer = (state, action) => {
  if (action.type === "GET_ALL_PRODUCT_DATA") {
    const allPrice = action.payload.map(function (product) {
      return product.price;
    });

    let maxPrice = Math.max(...allPrice);

    return {
      ...state,
      allProduct: [...action.payload],
      filterProductsData: [...action.payload],
      filter: {
        ...state.filter,
        maxPrice: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (action.type === "DISPLAY_GRID_VIEW") {
    return {
      ...state,
      gridView: true,
    };
  }

  if (action.type === "DISPLAY_LIST_VIEW") {
    return {
      ...state,
      gridView: false,
    };
  }

  if (action.type === "SORT_VALUE") {
    return {
      ...state,
      sortData: action.payload,
    };
  }

  if (action.type === "DISPLAY_SORT_PRODUCT") {
    let products = state.filterProductsData;
    let displaySortProduct;

    if (state.sortData === "z-a") {
      displaySortProduct = products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    if (state.sortData === "a-z") {
      displaySortProduct = products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (state.sortData === "lowest") {
      displaySortProduct = products.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (state.sortData === "highest") {
      displaySortProduct = products.sort((a, b) => {
        return b.price - a.price;
      });
    }

    return {
      ...state,
      filterProductsData: displaySortProduct,
    };
  }

  if (action.type === "GET_FILTER_PRODUCT_DATA") {
    const { name, value } = action.payload;
    return {
      ...state,
      filter: {
        ...state.filter,
        [name]: value,
      },
    };
  }

  if (action.type === "DISPLAY_FILTER_PRODUCT") {
    let { searchText, category, color, price } = state.filter;
    let searchFilterData = [...state.allProduct];

    if (searchText) {
      searchFilterData = searchFilterData.filter((product) => {
        return product.name.toLowerCase().includes(searchText);
      });
    }

    if (category !== "all") {
      searchFilterData = searchFilterData.filter((product) => {
        return product.category === category;
      });
    }

    if (color !== "all") {
      searchFilterData = searchFilterData.filter((product) => {
        return product.colors.includes(color);
      });
    }

    if (price === 0) {
      searchFilterData = searchFilterData.filter((product) => {
        return product.price === price;
      });
    } else {
      searchFilterData = searchFilterData.filter((product) => {
        return product.price <= price;
      });
    }

    return {
      ...state,
      filterProductsData: searchFilterData,
    };
  }

  if (action.type === "HANDLE_CART_DATA") {
    const { id, name, img, price, productCount, mainColor, stock } =
      action.payload;

    let exitingProduct = state.addToCartData?.find((product) => {
      return product.id === id + mainColor;
    });

    if (exitingProduct) {
      let updateExitproduct = state.addToCartData.map((product) => {
        if (product.id === id + mainColor) {
          let updataProductCount = product.productCount + productCount;
          if (updataProductCount >= product.stock) {
            updataProductCount = product.stock;
          }
          return {
            ...product,
            productCount: updataProductCount,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        addToCartData: updateExitproduct,
      };
    } else {
      let cartDataStore = {
        id: id + mainColor,
        name,
        img,
        price,
        productCount,
        mainColor,
        stock,
      };
      return {
        ...state,
        addToCartData: [...state.addToCartData, cartDataStore],
      };
    }
  }

  if (action.type === "DELETE_CART_PRODUCT") {
    const allCartProduct = [...state.addToCartData];
    const updateCartProduct = allCartProduct.filter((product) => {
      return product.id !== action.payload;
    });
    return {
      ...state,
      addToCartData: updateCartProduct,
    };
  }

  if (action.type === "SET_INCREASE") {
    let increaseProduct = state.addToCartData.map((product) => {
      if (product.id === action.payload) {
        let updateIncProductAmount = product.productCount + 1;
        if (updateIncProductAmount > product.stock) {
          updateIncProductAmount = product.stock;
        }
        return {
          ...product,
          productCount: updateIncProductAmount,
        };
      } else {
        return {
          ...product,
        };
      }
    });
    return {
      ...state,
      addToCartData: increaseProduct,
    };
  }

  if (action.type === "SET_DECREASE") {
    let decreaseProduct = state.addToCartData.map((product) => {
      if (product.id === action.payload) {
        let updateDecProductAmount = product.productCount - 1;
        if (product.productCount <= 1) {
          updateDecProductAmount = 1;
        }
        return {
          ...product,
          productCount: updateDecProductAmount,
        };
      } else {
        return {
          ...product,
        };
      }
    });
    return {
      ...state,
      addToCartData: decreaseProduct,
    };
  }

  if (action.type === "DELETE_ALL_CART_DATA") {
    return {
      ...state,
      addToCartData: [],
    };
  }

  if (action.type === "GET_TOTAL_ITEMS") {
    let getAllProductCount = state.addToCartData.reduce(
      (initValue, currentProduct) => {
        let { productCount } = currentProduct;
        initValue = initValue + productCount;
        return initValue;
      },
      0
    );
    return {
      ...state,
      totalItems: getAllProductCount,
    };
  }

  if (action.type === "GET_ALL_CART_PRODUCT-PRICE") {
    let getAllProductPrice = state.addToCartData.reduce(
      (initValue, currentProduct) => {
        let { price, productCount } = currentProduct;
        initValue = initValue + price * productCount;
        return initValue;
      },
      0
    );
    return {
      ...state,
      totalPrice: getAllProductPrice,
    };
  }

  return state;
};

export default FilterProductReducer;

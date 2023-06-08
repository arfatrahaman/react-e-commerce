import React from "react";
import { NavLink } from "react-router-dom";
import { useFilterProductContext } from "../ProductApiData/FilterProductData";

export const ProductListView = () => {
  const { filterProductsData } = useFilterProductContext();

  return (
    <div className="list-view-products-wrapper">
      {filterProductsData.map(function (product) {
        const { id, name, price, img, dis } = product;
        return (
          <NavLink to={`/singleproduct/${id}`} key={id}>
            <div className="list-view-product-detail" key={id}>
              <div className="product-image">
                <img src={img} alt="" />
              </div>
              <div className="product-deatils-box">
                <div className="product-title">
                  <h3 className="name">{name}</h3>
                </div>
                <div className="product-description">
                  <p className="description">{dis}</p>
                </div>
                <div className="product-price">
                  <h4 className="price">{price}</h4>
                </div>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

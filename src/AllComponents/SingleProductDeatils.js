import React from "react";
import { NavLink } from "react-router-dom";

export const SingleProductDeatils = ({ currentProduct }) => {
  const { id, img, name, price, category } = currentProduct;
  return (
    <NavLink to={`/singleproduct/${id}`} className="single-product-link">
      <div className="single-product-deatils">
        <div className="single-product-image">
          <figure className="product-image-box">
            <img src={img} alt="" className="product-image" />
            <figcaption className="product-category">
              <h6 className="category">{category}</h6>
            </figcaption>
          </figure>
        </div>
        <div className="single-product-name-price d-flex-j-between">
          <div className="single-product-name">
            <h4 className="product-name">{name}</h4>
          </div>
          <div className="single-product-price">
            <p className="product-price">{price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

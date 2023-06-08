import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppContextData } from "../ProductApiData/AppProductContext";
import { ProductColorAmoutCartDeatils } from "../AllComponents/ProductColorAmoutCartDeatils";

import { FreeDelivery } from "../AllComponents/FreeDelivery";
import { ProductRating } from "../AllComponents/ProductRating";
import { ReturnDelivery } from "../AllComponents/ReturnDelivery";

export const SingleProduct = () => {
  const { allProductsData } = useAppContextData();
  const { id } = useParams();
  const singleProduct = allProductsData.filter(function (product) {
    return product.id === parseInt(id);
  });

  return (
    <section id="single-product">
      <div className="container">
        {singleProduct.map(function (product) {
          const { id, name, dis, price, img, stock, rating } = product;
          return (
            <div className="single-product-page-wrapper" key={id}>
              <div className="single-product-item single-product-left">
                {/* Single Product Image */}
                <div className="single-product-image-left">
                  <div className="single-product-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
              <div className="single-product-item single-product-right">
                {/* Single Product Title */}
                <div className="single-product-title">
                  <div className="product-title">
                    <h2 className="name">{name}</h2>
                  </div>
                </div>
                {/* Single Product Rating */}
                <div className="single-product-rating ">
                  <ProductRating rating={rating} />
                </div>
                {/* Single Product Discription */}
                <div className="single-product-discription p-b-2rem">
                  <div className="product-discription">
                    <p className="discription">{dis}</p>
                  </div>
                </div>
                {/* Single Product Price */}
                <div className="single-product-price p-b-2rem">
                  <div className="product-price">
                    <h4 className="price">Price: {price}</h4>
                  </div>
                </div>
                <div className="single-product-company"></div>
                {/* Single Product Stock */}
                <div className="single-product-stock p-b-2rem">
                  <div className="product-stock">
                    <h6>
                      Avavility:
                      {stock > 1 ? "Product In Stock" : "Product Out Of Stock"}
                    </h6>
                  </div>
                </div>
                {/* Single Produt Add To Cart */}
                <div className="product-color-amount-cart-details">
                  <ProductColorAmoutCartDeatils
                    stock={stock}
                    singleProduct={singleProduct}
                  />
                </div>
                {/* Single Product Delivery  */}
                <div className="product-delivery">
                  <div className="product-free-delivery">
                    <FreeDelivery />
                  </div>
                  <div className="product-return-delivery">
                    <ReturnDelivery />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

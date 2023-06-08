import React from "react";
import { useAppContextData } from "../ProductApiData/AppProductContext";
import { SingleProductDeatils } from "./SingleProductDeatils";

export const FeaturedProducts = () => {
  const { featuredProductsData } = useAppContextData();
  return (
    <section id="featured-products">
      <div className="container">
        <div className="section-headline">
          <h2 className="section-title">Featured Products</h2>
        </div>
        <div className="featured-products-wrapper">
          {featuredProductsData.map((currentProduct) => {
            return (
              <SingleProductDeatils
                currentProduct={currentProduct}
                key={currentProduct.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

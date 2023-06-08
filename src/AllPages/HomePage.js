import React from "react";
import { Banner } from "../AllComponents/BannerComponent";
import { FeaturedProducts } from "../AllComponents/FeaturedProductsComponent";

export const HomePage = () => {
  return (
    <section id="home-page">
      <div className="home-page-wrapper">
        <Banner />
        <FeaturedProducts />
      </div>
    </section>
  );
};

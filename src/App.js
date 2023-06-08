import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationComponent } from "./AllComponents/NavigationComponent";
import { AddToCartPage } from "./AllPages/AddToCartPage";
import { ContactPage } from "./AllPages/ContactPage";
import { ErrorPage } from "./AllPages/Error";
import { HomePage } from "./AllPages/HomePage";
import { ProductPage } from "./AllPages/ProductPage";
import { SingleProduct } from "./AllPages/SingleProductPage";

export const App = () => {
  return (
    <section id="arh-store">
      <BrowserRouter>
        <NavigationComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/addtocartpage" element={<AddToCartPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

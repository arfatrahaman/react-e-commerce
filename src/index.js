import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { AppProductContext } from "./ProductApiData/AppProductContext";
import { FilterProductData } from "./ProductApiData/FilterProductData";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qky253bimmomhijc.us.auth0.com"
      clientId="tfSehX7ahHSkZI7XmB2PLiajSiwk11of"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProductContext>
        <FilterProductData>
          <App />
        </FilterProductData>
      </AppProductContext>
    </Auth0Provider>
  </React.StrictMode>
);

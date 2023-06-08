import React from "react";
import { NavLink } from "react-router-dom";

import { VscAccount } from "react-icons/vsc";
import { BiCart } from "react-icons/bi";
import { useFilterProductContext } from "../ProductApiData/FilterProductData";

import { useAuth0 } from "@auth0/auth0-react";

export const NavigationComponent = () => {
  const { totalItems } = useFilterProductContext();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <section id="navigation">
      <div className="container">
        <div className="navigation-wrapper">
          {/* Navigation Item 1 (Logo) */}
          <div className="navigation-item navigation-item-1">
            <div className="navigation-item-1-inner">
              <div className="page-logo">
                <NavLink to="/" className="logo">
                  ARH-STORE
                </NavLink>
              </div>
            </div>
          </div>
          {/* Navigation Item 2 (Navigation) */}
          <div className="navigation-item navigation-item-2">
            <div className="navigation-item-2-inner">
              <div className="page-links">
                <ul className="navigation-all-links d-flex">
                  <li className="navigation-link">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="navigation-link">
                    <NavLink to="/productpage">Products</NavLink>
                  </li>
                  <li className="navigation-link">
                    <NavLink to="/contactpage">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navigation Item 3 (Account) */}
          <div className="navigation-item navigation-item-3">
            <div className="navigation-item-3-inner">
              <div className="page-client-account-cart-list d-flex">
                <div className="client-account d-flex">
                  <div className="nav-icon">
                    <VscAccount className="set-icon account-icon" />
                  </div>
                  {isAuthenticated ? (
                    <li>
                      <button
                        className="logout-btn authBtn"
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Log Out
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button
                        className="login-btn authBtn"
                        onClick={() => loginWithRedirect()}
                      >
                        Log In
                      </button>
                    </li>
                  )}
                </div>
                <NavLink to="/addtocartpage">
                  <div className="client-cart-list d-flex">
                    <div className="nav-icon">
                      <BiCart className="set-icon cart-item-icon" />
                    </div>
                    <div className="total-items-save">
                      <h6 className="total-items">{totalItems}</h6>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

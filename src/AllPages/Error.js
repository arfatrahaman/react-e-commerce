import React from "react";

import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h2>No Page Found</h2>
      <NavLink to="/">
        <button>Back Home</button>
      </NavLink>
    </div>
  );
};

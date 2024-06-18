import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">BUDGETS App</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/login">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;

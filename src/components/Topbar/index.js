import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Medium
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <Link to="/" className="nav-link" exact>
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login" className="nav-link" exact>
              Sign in
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/register" className="nav-link" exact>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;

import React from "react";
import { Link, Outlet } from "react-router-dom"; // import Link
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">The Magical Store</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/magic-merch">Merchandise</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/familiars">Familiars</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="layout-container">
        {/* This part will be replaced by active route */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

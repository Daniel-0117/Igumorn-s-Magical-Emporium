import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./layout.css"; // Import your CSS file for layout styles

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">The Magical Store</a>
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
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/magic-merch">Merchandise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="familiars">Familiars</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="layout-container">
        {children}
      </div>
    </>
  );
};

export default Layout;

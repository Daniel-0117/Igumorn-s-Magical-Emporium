import React from "react";
import "./homeStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import magicStore from "../../assets/MagicStore.png"; // ✅ Import background image

const HomePage = () => {
  console.log("HomePage Loaded");

  return (
    <div
      className="background-image" // ✅ Class name fixed
      style={{
        backgroundImage: `url(${magicStore})`,
      }}
    >
      {/* ✅ Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">The Magical Store</a>
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
              <li className="nav-item active">
                <a className="nav-link" href="#">Familiar <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Merchandise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Main Card Section */}
      <div className="card-container"> {/* ✅ Wrap the card inside a flex container */}
        <div className="card bg-black card-rounded">
          <img 
            src={require("../../assets/Igumorn.jpg")}
            className="homeImage"
            alt="Igumorn himself"
          />
          <div className="card-header bg-black text-white">
            <h1>Welcome to Igumorn's Magical Emporium</h1>
            <p>
              Come one, come all, to the most magical place on earth! 
              <br / >
              Here you can find all the magical 
              items you need to make your life more magical.
              From the simplest of potions to the most powerful of spells, we have it all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

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

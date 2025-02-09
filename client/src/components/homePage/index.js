import React from "react";
import "./homeStyle.css";

const homePage = () => {
    console.log("homePage");
    return (
        // card container
              <div className="card-container">  {/* ✅ Added parent div */}
                <div>
                  <div className="card bg-black card-rounded w-50">
                    <img 
                      src={require("../../assets/Igumorn.jpg")}
                      className="homeImage"
                      alt="Igumorn himself"
                    />
                    <div className="card-header bg-black text-white">
                      <h1>Welcome to Igumorn's Magical Emporium</h1>
                      <p>
                        Come one, come all, to the most magical place on earth! Here you can find all the magical 
                        items you need to make your life more magical.
                        From the simplest of potions to the most powerful of spells, we have it all.
                      </p>
                    </div>
                  </div>
                </div>
          
                <div className="middle-links">
                  <a href="/familair" className="link">Familiars</a>
                  <a href="/MagicalMerch" className="link">Treasures</a>
                  <a href="/Login" className="link">Sign In</a>
                </div>
              </div>
            );
          }
          
export default homePage;
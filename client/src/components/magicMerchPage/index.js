import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./magicStyle.css";

const MagicMerchPage = () => {
  const [magicItems, setMagicItems] = useState([]);
  console.log("MagicMerchPage Loaded");

  useEffect(() => {
    fetch("/api/magicMerch")
      .then((res) => res.json())
      .then((data) => {
        console.log("Magic Merch Data:", data); 
        setMagicItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Check if magicItems have loaded in
  if (magicItems.length === 0) {
    return <div>Loading magic merchandise...</div>;
  }

  return (
    <div
      className="magic-background-image"
      style={{
        backgroundImage: `url(${require("../../assets/magicItems.jpeg")})`,
      }}
    >

    <div className="container mt-5">
      <div className="row">
        {magicItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 bg-dark text-white shadow-md" style={{ width: "18rem" }}>
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.description}</p>
                <p><strong>Price:</strong> {item.price} gold</p>
                <p><strong>Requirements:</strong> {item.requirements}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default MagicMerchPage;


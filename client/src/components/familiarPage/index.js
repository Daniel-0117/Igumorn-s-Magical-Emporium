import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./familiar.css";

const FamiliarsPage = () => {
  const [Companions, setCompanions] = useState([]);
  console.log("FamiliarPage Loaded");

  useEffect(() => {
    fetch("/api/familiars")
      .then((res) => res.json())
      .then((data) => {
        console.log("Familiar:", data); 
        setCompanions(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Check if magicItems have loaded in
  if (Companions.length === 0) {
    return <div>Loading magical friends...</div>;
  }

  return (
    <div
      className="familiar-background-image"
      style={{
        backgroundImage: `url(${require("../../assets/Familiar_adoption.jpg")})`,
      }}
    >

    <div className="container mt-5">
      <div className="row">
        {Companions.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.type}</p>
                <p><strong>Health:</strong> {item.health}</p>
                <p><strong>Level:</strong> {item.level}</p>
                <p><strong>Price:</strong> {item.price} gold</p>

              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FamiliarsPage;


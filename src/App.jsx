import React from "react";
import Card from "./components/Card";
import "./App.css";
import Acer from "../public/Acer.png";
import Lenovo from "../public/Lenovo.jpg";
import Hp from "../public/HP.png";

function App() {
  const compyuters = [
    {
      name: "Lenovo compyuter",
      price: 500,
      image: Lenovo,
    },
    {
      name: "HP compyuter",
      price: 900,
      image: Hp,
    },
    {
      name: "Acer compyuter",
      price: 600,
      image: Acer,
    },
  ];

  return (
    <div className="card-all">
      <div className="container-big">
        <h1>Shopping List</h1>
        <div className="card-date">
          <p>Date: 18.08</p>
          <p>All Products</p>
        </div>
        {compyuters.map((compyuter, index) => (
          <Card key={index} compyuter={compyuter} />
        ))}
      </div>
    </div>
  );
}

export default App;

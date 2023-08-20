import React from "react";

const Card = ({ compyuter }) => {
  return (
    <div className="compyuter-card">
      <img src={compyuter.image} alt={compyuter.name} />
      <h2>{compyuter.name}</h2>
      <p>Narxi {compyuter.price}$</p>
    </div>
  );
};

export default Card;

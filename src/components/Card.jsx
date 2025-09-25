import React from "react";

const Card = ({ title, description, price, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rent: ₹{price} per day</p>
      <button>Rent Now</button>
    </div>
  );
};

export default Card;

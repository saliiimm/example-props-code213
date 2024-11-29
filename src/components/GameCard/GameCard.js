import React from 'react';
import './GameCard.css';
const GameCard = ({ name, category, price, image }) => {
  return (
    <div className="game-card">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default GameCard;

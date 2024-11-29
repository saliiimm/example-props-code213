import React from 'react';
import GameCard from '../GameCard/GameCard';
import './GamesList.css';
const GamesList = ({ list }) => {
  return (
    <div className="game-list">
      {list.map((game) => (
        <GameCard
          key={game.id}
          name={game.name}
          category={game.category}
          price={game.price}
          image={game.image}
        />
      ))}
    </div>
  );
};

export default GamesList;

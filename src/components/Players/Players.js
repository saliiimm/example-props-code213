import React from 'react';

const Players = ({ vailable, maximum }) => {
  return (
    <div>
      {vailable} / {maximum}
    </div>
  );
};

export default Players;

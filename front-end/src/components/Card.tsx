import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;

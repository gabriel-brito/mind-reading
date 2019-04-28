import React from 'react';

import './index.css';

const Card = ({ image, suit, value }) => (
  <div className='card'>
    <img 
      src={image}
      alt={`${value} of ${suit}`}
    />
  </div>
);

export default Card;
import React from 'react';
import PropType from 'prop-types';

import './index.css';

const Card = ({ image, suit, value }) => (
  <div className='card'>
    <img src={image} alt={`${value} of ${suit}`} />
  </div>
);

Card.propTypes = {
  image: PropType.string.isRequired,
  suit: PropType.string.isRequired,
  value: PropType.string.isRequired
}

export default Card;

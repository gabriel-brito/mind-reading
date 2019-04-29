import React from 'react';
import Button from '../button';
import Card from '../card';

import './index.css';

const TrickRow = ({ cards, chooseRow, value }) => (
  <div className='trickRow'>
    <Button
      cssStyle='trickRow__Button'
      action={() => {
        chooseRow(value - 1);
      }}
    >
      {value}
    </Button>

    {cards.map((item, index) => (
      <Card image={item.image} key={index} index={index} />
    ))}
  </div>
);

export default TrickRow;

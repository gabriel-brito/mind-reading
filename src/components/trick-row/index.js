import React from 'react';
import Button from '../button';
import Card from '../card';

import './index.css';

const TrickRow = ({ value }) => (
  <div className='trickRow'>

    <Button cssStyle='trickRow__Button' action={() => console.log('here')}>
      {value}
    </Button>

    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);

export default TrickRow;
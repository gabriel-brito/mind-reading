import React from 'react';
import Title from '../../components/title';
import Button from '../../components/button';

const ChosenCard = ({ chosenCard, tryAgain }) => (
  <section className='chosenCard'>
    <Title text='And your card is...' />
    <img
      className='chosenCard__image'
      src={chosenCard.image} 
      alt={`${chosenCard.value} of ${chosenCard.suit}`} 
    />
    <Button cssStyle='chosenCard__button' action={tryAgain}>
      Try again
    </Button>
  </section>
);

export default ChosenCard;
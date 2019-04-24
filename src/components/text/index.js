import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const instructions = `Instructions: You'll see twenty-one cards displayed in three rows of seven cards each. You need to pick a card and remember it. Then, you should click on the button that corresponds to the row on which your card is. This process is repeated three times and at the end, your card will be revealed!`;

const firstStep = `Choose a card, remember it, and click on the button that corresponds to the row on which your card is.`;

const secondStep = `Now, click on the row that the card you've previously chosen is.`;

const lastStep = `One last time! Click on the row on which your card is.`;

const DisplayedText = ({ step }) => (
  step && 
    <p className='appText'>
      {step === 'instructions' ? instructions : ''}
      {step === 'firstStep' ? firstStep : ''}
      {step === 'secondStep' ? secondStep : ''}
      {step === 'lastStep' ? lastStep : ''}
    </p>
);

DisplayedText.propTypes = {
  step: PropTypes.string.isRequired
}

export default DisplayedText;
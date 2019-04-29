import React from 'react';
import Instructions from './modules/instructions';
import Trick from './modules/trick';
import ChosenCard from './modules/chosen-card';

const EleventhContent = ({
  appName,
  cards,
  chosenCard,
  chooseRow,
  goOn,
  isChosenCard,
  isInstructions,
  isLoading,
  isTrick,
  tryAgain,
  step
}) => (
  <div className='wrapper'>
    {isInstructions && (
      <Instructions appName={appName} goOn={goOn} step={step} />
    )}

    {isTrick && (
      <Trick
        appName={appName}
        cards={cards}
        chooseRow={chooseRow}
        isLoading={isLoading}
        step={step}
      />
    )}

    {isChosenCard && <ChosenCard chosenCard={chosenCard} tryAgain={tryAgain} />}
  </div>
);

export default EleventhContent;

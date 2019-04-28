import React from 'react';
import Instructions from './modules/instructions';
import Trick from './modules/trick';
import ChosenCard from './modules/chosen-card';

const EleventhContent = ({ 
  appName,
  cards,
  chooseRow,
  goOn,
  isChosenCard,
  isInstructions, 
  isTrick, 
  step
}) => (
  <div className='wrapper'>
    {isInstructions 
      && <Instructions appName={appName} goOn={goOn} step={step}/>}
    
    {isTrick && 
      <Trick 
        appName={appName} 
        cards={cards}
        chooseRow={chooseRow}
        step={step} 
      />
    }

    {isChosenCard && <ChosenCard />}
  </div>
);

export default EleventhContent;
import React from 'react';
import Instructions from './modules/instructions';
import Trick from './modules/trick';

const EleventhContent = ({ 
  appName,
  cards,
  cardsRow,
  chooseRow,
  goOn, 
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
  </div>
);

export default EleventhContent;
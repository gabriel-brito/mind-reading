import React from 'react';
import Instructions from './modules/instructions';
import Trick from './modules/trick';

const EleventhContent = ({ 
  appName,
  cards,
  isInstructions, 
  isTrick, 
  goOn, 
  step 
}) => (
  <div className='wrapper'>
    {isInstructions 
      && <Instructions appName={appName} goOn={goOn} step={step}/>}
    {isTrick && <Trick appName={appName} step={step} cards={cards}/>}
  </div>
);

export default EleventhContent;
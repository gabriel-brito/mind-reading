import React from 'react';
import Instructions from './modules/instructions';
import Trick from './modules/trick';

const EleventhContent = ({ appName, isInstructions, isTrick, goOn, step }) => (
  <div className='wrapper'>
    {isInstructions 
      && <Instructions appName={appName} goOn={goOn} step={step}/>}
    {isTrick && <Trick appName={appName} step={step}/>}
  </div>
);

export default EleventhContent;
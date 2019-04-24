import React from 'react';
import Instructions from './instructions';

const EleventhContent = ({ isInstructions, goOn }) => (
  <div className='wrapper'>
    {isInstructions 
      && <Instructions goOn={goOn}/>}
  </div>
);

export default EleventhContent;
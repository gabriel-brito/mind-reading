import React from 'react';
import Title from '../title';
import DisplayedText from '../text';
import Button from '../button';

const Instructions = ({ goOn }) => (
  <div>
    <Title text='Mind-reading card Trick' weight={1} />
    <DisplayedText step='instructions'/>
    <Button cssStyle='instructionsButton' action={goOn}>
      Continue
    </Button>
  </div>
);

export default Instructions;
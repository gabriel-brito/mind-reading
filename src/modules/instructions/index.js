import React from 'react';
import Title from '../../components/title';
import DisplayedText from '../../components/text';
import Button from '../../components/button';

const Instructions = ({ appName, goOn, step }) => (
  <section>
    <Title text={appName} />
    <DisplayedText step={step}/>
    <Button cssStyle='instructionsButton' action={goOn}>
      Continue
    </Button>
  </section>
);

export default Instructions;
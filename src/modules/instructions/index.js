import React from 'react';
import Title from '../../components/title';
import DisplayedText from '../../components/text';
import Button from '../../components/button';

import './index.css';

const Instructions = ({ appName, goOn, step }) => (
  <section className='instructions'>
    <Title text={appName} />
    <DisplayedText step={step} />
    <Button cssStyle='instructionsButton' action={goOn}>
      Continue
    </Button>
  </section>
);

export default Instructions;

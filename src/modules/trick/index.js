import React from 'react';
import Title from '../../components/title';
import DisplayedText from '../../components/text';
import TrickRow from '../../components/trick-row';

import './index.css'

const Trick = ({ appName, step }) => (
  <main>
    <Title text={appName} />
    <DisplayedText step={step}/>
    <section className='trickWrapper'>
      <TrickRow value={1} />
      <TrickRow value={2} />
      <TrickRow value={3} />
    </section>
  </main>
);

export default Trick;
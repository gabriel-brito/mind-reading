import React from 'react';
import Title from '../../components/title';
import DisplayedText from '../../components/text';
import TrickRow from '../../components/trick-row';

import './index.css';

const Trick = ({ appName, cards, step }) => (
  <main>
    <Title text={appName} />
    <DisplayedText step={step}/>
    <section className='trickWrapper'>

      {cards.map((items, index) => (
        <TrickRow cards={items} value={index + 1} key={index}/>
      ))}
    </section>
  </main>
);

export default Trick;
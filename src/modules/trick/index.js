import React from 'react';
import Title from '../../components/title';
import DisplayedText from '../../components/text';
import TrickRow from '../../components/trick-row';

import './index.css';

var arr = [1, 2, 3];

const Trick = ({ appName, step }) => (
  <main>
    <Title text={appName} />
    <DisplayedText step={step}/>
    <section className='trickWrapper'>
      {arr.map((item, index) => (
        <TrickRow value={index + 1} key={index}/>
      ))}
    </section>
  </main>
);

export default Trick;
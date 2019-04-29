import React from 'react';
import Title from '../../components/title';
import DisplayedText from '../../components/text';
import TrickRow from '../../components/trick-row';
import Loader from '../../components/loader';

import './index.css';

const Trick = ({ appName, cards, chooseRow, isLoading, step }) => (
  <main>
    <Title text={appName} />
    <DisplayedText step={step} />
    <section className='trickWrapper'>
      {isLoading && <Loader />}

      {!isLoading &&
        cards.map((items, index) => (
          <TrickRow
            chooseRow={chooseRow}
            cards={items}
            value={index + 1}
            key={index}
          />
        ))}
    </section>
  </main>
);

export default Trick;

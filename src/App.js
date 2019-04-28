import React, { Component } from 'react';
import EleventhContent from './EleventhContent';
import { getCardsConfigURL } from './utils/urls';
import { getCardsConfig, getDeck } from './services/get-cards';
import arrayTreament from './utils/array-treatment';

class App extends Component {
  constructor() {
    super()
    this.state = {
      appName: 'Mind-reading card Trick',
      cards: '',
      deck_id: '',
      isInstructions: true,
      isTrick: false,
      step: 'instructions'
    }

    this.goOn = () => {
      this.setState({ isInstructions: false, isTrick: true, step: 1 })
    }

    // this.cacheCards = (arrayOfObjects) => {
    //   let newArray = [];
    //   let counter = 0;
    //   let insideCounter = 0;

    //   for(counter; counter < arrayOfObjects.length; counter++) {
    //     for(insideCounter; 
    //       insideCounter < arrayOfObjects[counter].length;
    //       insideCounter++) {
    //       newArray.push(
    //         JSON.stringify(arrayOfObjects[counter][insideCounter])
    //       );
    //     }
    //   }

    //   localStorage.setItem('cards', newArray);
    // }
  }

  async componentDidMount() {
    const { deck_id } = await getCardsConfig(getCardsConfigURL);
    let { cards } = await getDeck(deck_id);
    cards = arrayTreament(cards);
    this.setState({ cards, deck_id });
    //this.cacheCards(cards);
  }

  render() {
    return <EleventhContent
      {...this.state}

      goOn={this.goOn}
   />
  }
}

export default App;

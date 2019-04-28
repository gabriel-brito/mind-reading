import React, { Component } from 'react';
import EleventhContent from './EleventhContent';
import { getCardsConfigURL } from './utils/urls';
import { getCardsConfig, getDeck } from './services/get-cards';
import { orderArrayTreatment, stepOrder } from './utils/order-array-treatment';

class App extends Component {
  constructor() {
    super()
    this.state = {
      appName: 'Mind-reading card Trick',
      cards: '',
      deck_id: '',
      isInstructions: true,
      isTrick: false,
      rowIndex: 0,
      step: 'instructions'
    }

    this.goOn = () => {
      this.setState({ isInstructions: false, isTrick: true, step: 1 })
    }

    this.chooseRow = (index) => {
      let step = this.state.step;
      let cards = this.state.cards;
      let newCardsOrder = stepOrder(orderArrayTreatment(cards, index));

      if ( step === 3 ){
        console.log(newCardsOrder[1][3].image)
      }

      this.setState({ step: step += 1, cards: newCardsOrder });
    }
  }

  async componentDidMount() {
    const { deck_id } = await getCardsConfig(getCardsConfigURL);
    let { cards } = await getDeck(deck_id);
    cards = orderArrayTreatment(cards);
    this.setState({ cards, deck_id });
  }


  render() {
    return <EleventhContent
      {...this.state}

      goOn={this.goOn}
      chooseRow={this.chooseRow}
   />
  }
}

export default App;

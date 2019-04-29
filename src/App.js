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
      chosenCard: {},
      deck_id: '',
      isChosenCard: false,
      isInstructions: true,
      isLoading: false,
      isTrick: false,
      step: 'instructions'
    }

    this.goOn = () => {
      this.setState({ 
        isInstructions: false,
        isTrick: true, 
        step: 1, 
      });
    }

    this.chooseRow = (index) => {
      let cards = this.state.cards;
      let newCardsOrder = stepOrder(orderArrayTreatment(cards, index));
      let step = this.state.step;

      if ( step === 3 ) this.chosenCard(newCardsOrder[1][3]);

      this.setState({ cards: newCardsOrder, step: step += 1 });
    }

    this.chosenCard = (chosenCard) => {
      const { image, suit, value } = chosenCard;
      
      this.setState({ 
        chosenCard: {
          image,
          suit,
          value
        },
        isTrick: false, 
        isChosenCard: true, 
      });
    }

    this.tryAgain = () => {
      const cards = this.state.cards;
      this.setState({ 
        cards: stepOrder(orderArrayTreatment(cards)), 
        isChosenCard: false, 
        isTrick: true,
        step: 1
      });
    }

    this.fillCards = async () => {
      let isLocalStorageFilled = !!localStorage.getItem('cards');
      this.setState({ isLoading: true });

      if (!isLocalStorageFilled) {
        const { deck_id } = await getCardsConfig(getCardsConfigURL);
        let { cards } = await getDeck(deck_id);
        cards = orderArrayTreatment(cards);
        
        localStorage.setItem('cards', JSON.stringify(cards));
        
        this.setState({ cards, deck_id, isLoading: false });
      } else {
        let localStorageCards = JSON.parse(localStorage.getItem('cards')); 
        localStorageCards = [...localStorageCards];

        this.setState({ cards: localStorageCards, isLoading: false });
      }
    }

  }

  componentDidMount() {
    this.fillCards();
  }

  render() {
    return <EleventhContent
      {...this.state}
      chooseRow={this.chooseRow}
      goOn={this.goOn}
      tryAgain={this.tryAgain}
   />
  }
}

export default App;

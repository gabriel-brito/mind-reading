const getCardsConfigURL = 
  'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

const getDeckURL = (id) => 
  `https://deckofcardsapi.com/api/deck/${id}/draw/?count=21`;

export {
  getCardsConfigURL,
  getDeckURL
}
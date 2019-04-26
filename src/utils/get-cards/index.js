const URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

const getCardsConfig = async (url) => {
  const config = await fetch(url);
}

export { getCardsConfig };
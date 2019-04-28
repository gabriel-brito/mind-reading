import { getDeckURL } from '../../utils/urls';

const getCardsConfig = async (url) => {
  let config;
  try {
    config = await fetch(url).then(data => data.json()).then(data => data);
  } catch (e) {
    throw new Error(TypeError, 'Something went wrong in config call');
  }

  return config;
};

const getDeck = async (id) => {
  let deck;

  try {
   deck = await fetch(getDeckURL(id)).then(data => data.json());
  } catch (e) {
    throw new Error(TypeError, 'Something went wrong in deck call');
  }

  return deck;
};

export { getCardsConfig, getDeck };
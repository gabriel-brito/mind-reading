import { expect } from 'chai';
global.fetch = require('jest-fetch-mock');

import { getCardsConfigURL, getDeckURL } from '../utils/urls';
import { getCardsConfig, getDeck } from '../services/get-cards';

describe('Cards', () => {
  const configURL = getCardsConfigURL;
  let deckURL = getDeckURL;
  let deckID

  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('Smoke tests', () => {
    test('should exist getCardsConfig', () => {
      expect(getCardsConfig).to.be.exist;
    });

    test('should getCardsConfig to be an method', () => {
      expect(getCardsConfig).to.be.a('function');
    });

    test('should exist getDeck', () => {
      expect(getDeck).to.be.exist;
    });

    test('should getDeck to be an method', () => {
      expect(getDeck).to.be.a('function');
    });
  });

  describe('getCardsConfig API Requisitions', () => {
    test('should call fetch function from getCardsConfig once', () => {
      getCardsConfig();
      expect(fetch.mock.calls.length).to.be.equal(1);
    });

    test('should call fetch function from getCardsConfig with correct url', 
      () => {
      getCardsConfig(configURL);
      expect(fetch.mock.calls[0][0])
        .to.be.equal(configURL)
    });

    test('should response to be success', () => {
        fetch.mockResponseOnce(JSON.stringify({ 'data.success': true }));
        
        getCardsConfig(configURL)
          .then(data => data.json())
          .then(data => {
            expect(data.success).to.be.equal(true);
          });
    });
  });

  describe('getDeck API Requisitions', () => {
    test('should call fetch function from getDeck once', () => {
      getDeck();
      expect(fetch.mock.calls.length).to.be.equal(1);
    });

    test('should call fetch function from getDeck with correct url', () => {
      let deck_id = "vjruu2hyj6lr";

      getDeck(deck_id);

      expect(fetch.mock.calls.length).to.be.equal(1);

      expect(fetch.mock.calls[0][0])
        .to.be.equal(deckURL(deck_id));
    });

    test('should return 21 cards', () => { 
      let deck_id = "vjruu2hyj6lr";

      const deck = getDeck(deck_id);

      expect(fetch.mock.calls.length).to.be.equal(1)

      deck.then(data => expect(data.cards.length).to.be.eql(21));
    });

  });
});
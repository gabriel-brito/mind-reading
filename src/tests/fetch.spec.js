import { expect } from 'chai';
global.fetch = require('jest-fetch-mock');

import { getCardsConfig } from '../utils/get-cards';

describe('Cards', () => {
  const configURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

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
  });

  describe('API Requisitions', () => {
    test('should call fetch function once', () => {
      getCardsConfig();
      expect(fetch.mock.calls.length).to.be.equal(1)
    });

    test('should call fetch function with correct url', () => {
      getCardsConfig(configURL);
      expect(fetch.mock.calls[0][0])
        .to.be.equal(configURL)
    });
  });
});
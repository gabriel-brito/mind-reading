import { expect } from 'chai';
import { getCardsConfigURL, getDeckURL } from '../utils/urls';

describe('URLS', () => {
  describe('getCardsConfigURL suit case', () => {
    test('should exist getCardsConfigURL', () => {
      expect(getCardsConfigURL).to.exist;
    });

    test('should getCardsConfigURL to be a string', () => {
      expect(getCardsConfigURL).to.be.a('string');
    });

    test('should getCardsConfigURL to have the correct URL', () => {
      expect(getCardsConfigURL)
        .to.be.equal('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    });
  });

  describe('getDeckURL suit case', () => {
    test('should exist getDeckURL', () => {
      expect(getDeckURL).to.exist;
    });

    test('should getDeckURL to be a method', () => {
      expect(getDeckURL).to.be.a('function');
    });

    test('should getDeckURL to have been called with the correct URL', () => {
      const id = 'abc';

      expect(getDeckURL(id))
        .to.be.equal('https://deckofcardsapi.com/api/deck/abc/draw/?count=21');
    });

    test('should getDeckURL test number 2 to have been called with the correct URL', () => {
      const id = '123';

      expect(getDeckURL(id))
        .to.be.equal('https://deckofcardsapi.com/api/deck/123/draw/?count=21');
    });
  });
});
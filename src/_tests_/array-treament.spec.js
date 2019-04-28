import { expect } from 'chai';
import arrayTreament from '../utils/array-treatment';

describe('Array Treatment', () => {
  let mockArray = [];
  let arrayTwentyOne = 
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  let iterator = 0;

  beforeEach(() => {
    mockArray = [[], [], []];
  });

  describe('Smoke Tests', () => {
    test('should exist', () => {
      expect(arrayTreament).to.exist;
    });

    test('should be a method', () => {
      expect(arrayTreament).to.be.a('function');
    });
  });

  describe('Treatment Tests', () => {
    test('should return an array', () => {
      expect(arrayTreament()).to.be.an('array');
    });

    test('should return an array with 3 arrays inside', () => {
      expect(arrayTreament()[0]).to.be.an('array');
      expect(arrayTreament()[1]).to.be.an('array');
      expect(arrayTreament()[2]).to.be.an('array');
    });

    test('should return an array with 3 arrays with the correct values', 
      () => {
      const arrayTreated = [
        [1, 4, 7, 10, 13, 16, 19],
        [2, 5, 8, 11, 14, 17, 20],
        [3, 6, 9, 12, 15, 18, 21]
      ];
      
      expect(arrayTreament(arrayTwentyOne)).to.be.eql(arrayTreated);
    });

  });

});
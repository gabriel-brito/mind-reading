import { expect } from 'chai';
import { orderArrayTreatment } from '../utils/order-array-treatment';

describe('Array Treatment', () => {
  let mockArray = [];
  let arrayTwentyOne; 
  let iterator = 0;

  beforeEach(() => {
    mockArray = [[], [], []];
    arrayTwentyOne = 
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  });

  describe('Smoke Tests', () => {
    test('should exist', () => {
      expect(orderArrayTreatment).to.exist;
    });

    test('should be a method', () => {
      expect(orderArrayTreatment).to.be.a('function');
    });
  });

  describe('Treatment Tests', () => {
    test('should return an array', () => {
      expect(orderArrayTreatment()).to.be.an('array');
    });

    test('should return an array with 3 arrays inside', () => {
      expect(orderArrayTreatment()[0]).to.be.an('array');
      expect(orderArrayTreatment()[1]).to.be.an('array');
      expect(orderArrayTreatment()[2]).to.be.an('array');
    });

    test('should return an array with 3 arrays with the correct values', 
      () => {
      const arrayTreated = [
        [1, 4, 7, 10, 13, 16, 19],
        [2, 5, 8, 11, 14, 17, 20],
        [3, 6, 9, 12, 15, 18, 21]
      ];
      
      expect(orderArrayTreatment(arrayTwentyOne)).to.be.eql(arrayTreated);
    });

    test('should return an array with 3 arrays with different values if chosenRow exist', 
      () => {
      const chosenRow = 2;

      const arrayTreated = [
        [1, 4, 7, 10, 13, 16, 19],
        [3, 6, 9, 12, 15, 18, 21],
        [2, 5, 8, 11, 14, 17, 20]
      ];
      
      expect(
        orderArrayTreatment(arrayTwentyOne, chosenRow)
      ).to.be.eql(arrayTreated);
    });

    test('should return an array with 3 arrays with different values if chosenRow exist', 
      () => {
      const chosenRow = 0;

      const arrayTreated = [
        [2, 5, 8, 11, 14, 17, 20],
        [1, 4, 7, 10, 13, 16, 19],
        [3, 6, 9, 12, 15, 18, 21]
      ];
      
      expect(
        orderArrayTreatment(arrayTwentyOne, chosenRow)
      ).to.be.eql(arrayTreated);
    });

    test('should return an array with 3 arrays with different values if chosenRow exist', 
      () => {
      const chosenRow = 1;
      const arrayTreated = [
        [1, 4, 7, 10, 13, 16, 19],
        [2, 5, 8, 11, 14, 17, 20],
        [3, 6, 9, 12, 15, 18, 21]
      ];
      
      expect(orderArrayTreatment(arrayTwentyOne)).to.be.eql(arrayTreated);
    });

  });

});
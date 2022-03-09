/**
 * @jest-environment jsdom
 */

import {fireEvent, screen} from '@testing-library/dom';
import PRIME_NUMBER_ARRAY from '../constants/primeNumberArray.js';
import Structure from '../containers/Structure.js';
import PrimeNumber from '../containers/PrimeNumber.js';

describe('Given I am on the homepage', () => {
  describe('When I don\'t enter anything in the form', () => {
    test('Then nothing is displayed', () => {
      new Structure();
      new PrimeNumber();
      fireEvent.keyUp(screen.getByTestId('js-input'), {target: {value: null}});
      expect(screen.getByTestId('input-null')).toBeTruthy;
    });
  });
  describe('When I enter a number greater than 1 in the form', () => {
    test('Then a list of numbers is displayed', () => {
      new Structure();
      new PrimeNumber();
      fireEvent.keyUp(screen.getByTestId('js-input'), {target: {value: 200}});
      expect(screen.getByTestId('input-valid')).toBeTruthy;
    });
  });
  describe('When I enter a number greater than 1 in the form', () => {
    test('Then the list of prime numbers displayed should be correct', () => {
      new Structure();
      const myList = new PrimeNumber();
      fireEvent.keyUp(screen.getByTestId('js-input'), {target: {value: 200}});
      expect(myList.getPrimeNumberArray()).toEqual(PRIME_NUMBER_ARRAY);
    });
  });
});

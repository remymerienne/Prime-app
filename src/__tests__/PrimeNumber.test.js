/**
 * @jest-environment jsdom
 */

import {fireEvent, screen} from '@testing-library/dom';
import PRIME_NUMBER_ARRAY from '../constants/primeNumberArray.js';
import PrimeNumberUI from '../views/PrimeNumberUI.js';
import PrimeNumber from '../containers/PrimeNumber.js';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('Given I am on the homepage', () => {
  describe('when I enter a number less than 2 in the form', () => {
    test('Then nothing should be displayed', () => {
      document.body.innerHTML = PrimeNumberUI();
      new PrimeNumber();
      fireEvent.keyUp(screen.getByTestId('js-input'), {target: {value: 1}});
      expect(screen.getByTestId('input-null')).toBeTruthy;
    });
  });
  describe('When I enter a number greater than 1 in the form', () => {
    test('Then a list of numbers should be displayed', () => {
      document.body.innerHTML = PrimeNumberUI();
      new PrimeNumber();
      fireEvent.keyUp(screen.getByTestId('js-input'), {target: {value: 200}});
      expect(screen.getByTestId('input-valid')).toBeTruthy;
    });
  });
  describe('When I enter a number greater than 1 in the form', () => {
    test('Then the list of prime numbers displayed should be correct', () => {
      document.body.innerHTML = PrimeNumberUI();
      const myList = new PrimeNumber();
      fireEvent.keyUp(screen.getByTestId('js-input'), {target: {value: 200}});
      expect(myList.getPrimeNumberArray()).toEqual(PRIME_NUMBER_ARRAY);
    });
  });
});

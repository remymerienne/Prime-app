/**
 * @jest-environment jsdom
 */

import {screen} from '@testing-library/dom';
import PrimeNumberListUI from '../views/PrimeNumberListUI.js';
import PRIME_NUMBER_ARRAY from '../constants/primeNumberArray.js';

describe('Given I called PrimeNumberList class', () => {
  describe('When I use PrimeNumberListUI() function to display a valid prime number list', () => {
    test('Then the prime number list should be appear in index page', () => {
      const html = PrimeNumberListUI(PRIME_NUMBER_ARRAY);
      document.body.innerHTML = html;
      expect(screen.getByTestId('prime-ok')).toBeTruthy();
    });
  });
  describe('When I use PrimeNumberListUI() function to display an invalid prime number list', () => {
    test('Then an error message should be appear in index page', () => {
      const html = PrimeNumberListUI([]);
      document.body.innerHTML = html;
      expect(screen.getByTestId('prime-null')).toBeTruthy();
    });
  });
});

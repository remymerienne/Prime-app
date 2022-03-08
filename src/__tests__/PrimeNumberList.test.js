/**
 * @jest-environment jsdom
 */

import {fireEvent, screen} from '@testing-library/dom';
import Dom from '../containers/Dom.js';
import PrimeNumberList from '../containers/PrimeNumberList.js';

describe('Given I called PrimeNumberList class', () => {
  describe('When I use getPrimeNumberArray() method to generate a prime number array', () => {
    test('Then the generated array should be the same as the expected array', () => {
      new Dom();
      new PrimeNumberList();
      fireEvent.keyUp(screen.getByTestId('js-input'), {target: {value: 200}});
      expect(screen.getByTestId('prime-ok')).toBeTruthy;
    });
  });
});

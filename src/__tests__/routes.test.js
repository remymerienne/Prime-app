/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/dom';
import { ROUTES_PATH, RENDER } from '../constants/routes';

describe('Given I am on some page of the app', () => {
  describe('When I navigate to Login page', () => {
    test('Then, it should render Login page', () => {
      const pathname = ROUTES_PATH.Home;
      const html = RENDER(pathname);
      document.body.innerHTML = html;
      expect(screen.getAllByText('Username or Email Address')).toBeTruthy();
    });
  });
  describe('When I navigate to Prime Numbers page', () => {
    test('Then, it should render Prime Numbers page', () => {
      const pathname = ROUTES_PATH.Prime;
      const html = RENDER(pathname);
      document.body.innerHTML = html;
      expect(screen.getAllByText('Générateur de Nombres Premiers')).toBeTruthy();
    });
  });
});

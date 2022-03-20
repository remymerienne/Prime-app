import { isUsername } from '../functions/login/usernameFX.js';

describe('isUsername() Unit Test Suites', () => {

  test('The correct username should return true', () => {
    expect(isUsername('remy')).toBe(true);
  });

  test('The incorrect username should return false', () => {
    expect(isUsername('something')).toBe(false);
  });

});

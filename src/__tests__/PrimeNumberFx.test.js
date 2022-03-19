import { isPrimeNumber, getPrimeNumberArray } from '../functions/PrimeNumberFx.js';
import primeNumberArray from '../__mocks__/primeNumberArray.js';

describe('isPrimeNumber() Unit Test Suites', () => {

  test('A number less than 2 should return false', () => {
    expect(isPrimeNumber(1)).toBe(false);
  });

  test('An argument that is not a number should return false', () => {
    expect(isPrimeNumber('hello world')).toBe(false);
  });

  test('A non-prime number should return false', () => {
    expect(isPrimeNumber(38)).toBe(false);
  });

  test('A prime number should return true', () => {
    expect(isPrimeNumber(41)).toBe(true);
  });

});

describe('getPrimeNumberArray() Unit Test Suites', () => {

  test('The number 200 should return the expected list', () => {
    expect(getPrimeNumberArray(200)).toEqual(primeNumberArray);
  });
  
});

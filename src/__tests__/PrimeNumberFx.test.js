import { isPrimeNumber, getPrimeNumberArray } from '../functions/PrimeNumberFx.js';
import primeNumberArray from '../__mocks__/primeNumberArray.js';

describe('isPrimeNumber() Unit Test Suites', () => {
  test('Argument less than 2 should return false', () => {
    expect(isPrimeNumber(1)).toBe(false);
  });
  test('Argument undefined should return false', () => {
    expect(isPrimeNumber()).toBe(false);
  });
  test('Argument not prime should return false', () => {
    expect(isPrimeNumber(38)).toBe(false);
  });
  test('Argument prime should return true', () => {
    expect(isPrimeNumber(41)).toBe(true);
  });
});

describe('getPrimeNumberArray() Unit Test Suites', () => { 
  test.todo('');
});
import { isPrimeNumber, getPrimeNumberArray } from '../functions/prime-number/primeNumberFX.js';

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

  test('The number 20 should return an array whith only the prime numbers between 2 and 20', () => {
    expect(getPrimeNumberArray(20)).toEqual([2,3,5,7,11,13,17,19]);
  });

  test('No argument should return an empty array', () => {
    expect(getPrimeNumberArray()).toEqual([]);
  });
  
});

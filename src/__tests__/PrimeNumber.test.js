/**
 * @jest-environment jsdom
 */

// import { fireEvent, screen } from '@testing-library/dom';
import PrimeNumber from '../containers/PrimeNumber.js';
import PrimeNumberUI from '../views/PrimeNumberUI.js';
// import { router } from '../app/Router.js';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('isTreatable() Unit Test Suites', () => {
  beforeEach(() => {
    document.body.innerHTML = PrimeNumberUI();
  });
  test('A number less than 2 should return false', () => {
    const myList = new PrimeNumber();
    expect(myList.isTreatable(1)).toBe(false);
  });
  test('An argument that is not a number should return false', () => {
    const myList = new PrimeNumber();
    expect(myList.isTreatable('hello world')).toBe(false);
  });
});

describe('isPrimeNumber() Unit Test Suites', () => {
  beforeEach(() => {
    document.body.innerHTML = PrimeNumberUI();
  });
  test('A non-prime number should return false', () => {
    const myList = new PrimeNumber();
    expect(myList.isPrimeNumber(38)).toBe(false);
  });
  test('A prime number should return true', () => {
    const myList = new PrimeNumber();
    expect(myList.isPrimeNumber(41)).toBe(true);
  });
});

describe('getPrimeNumberArray() Unit Test Suites', () => {
  beforeEach(() => {
    document.body.innerHTML = PrimeNumberUI();
  });
  test('The number 20 should return an array whith only the prime numbers between 2 and 20', () => {
    const myList = new PrimeNumber();
    expect(myList.getPrimeNumberArray(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
  test('No argument should return an empty array', () => {
    const myList = new PrimeNumber();
    expect(myList.getPrimeNumberArray()).toEqual([]);
  });
});

// describe('Given I am on Prime Numbers Page', () => {
//   describe('When I press Enter in input field', () => {
//     test('Then, nothing should happen', () => {
//       document.body.innerHTML = PrimeNumberUI();
//       const myList = new PrimeNumber();
//       const inputZone = screen.getByTestId('js-input');
//       inputZone.addEventListener('keydown', (e) => {
//         myList.test(e);
//       });
//       fireEvent.keyDown(inputZone, { keyCode: 13 });

//       // location.reload();
//       console.log(window.location.href);
//       // expect(inputZone).toBeTruthy();
//     });
//   });
// });

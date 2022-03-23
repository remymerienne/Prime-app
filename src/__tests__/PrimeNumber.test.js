/**
 * @jest-environment jsdom
 */

import PrimeNumber from '../containers/PrimeNumber';

describe('isTreatable() Unit Test Suites', () => {
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
	test('The number 20 should return an array whith only the prime numbers between 2 and 20', () => {
		const myList = new PrimeNumber();
		expect(myList.getPrimeNumberArray(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
	});
	test('No argument should return an empty array', () => {
		const myList = new PrimeNumber();
		expect(myList.getPrimeNumberArray()).toEqual([]);
	});
});

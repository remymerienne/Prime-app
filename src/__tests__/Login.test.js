/**
 * @jest-environment jsdom
 */

import Login from '../containers/Login.js';

describe('isUsername() Unit Test Suites', () => {
	test('The correct username should return true', () => {
		const myLogin = new Login();
		expect(myLogin.isUsername('remy')).toBe(true);
	});

	test('The incorrect username should return false', () => {
		const myLogin = new Login();
		expect(myLogin.isUsername('something')).toBe(false);
	});
});

import {sum} from './sum';

describe('sum', () => {
	it('should return 5', () => {
		expect(sum(3, 2)).toEqual(5);
	});
});

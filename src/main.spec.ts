import {main} from './main';

describe('main', () => {
	it('should be defined', async () => {
		expect(main).toBeDefined();
	});
	it('should 3000', async () => {
		expect(process.env['PORT']).toEqual('123');
	});
});

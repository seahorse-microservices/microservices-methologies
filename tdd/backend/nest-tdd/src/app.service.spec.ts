import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
		appService = new AppService();
  });

	it('should return "Hello Seahorse"', () => {
		const returnedGreeting: string = appService.getGreeting();
		expect(returnedGreeting).toBe('Hello Seahorse');
	});
});
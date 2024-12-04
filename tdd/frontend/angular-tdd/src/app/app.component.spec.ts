import { fireEvent, render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
		await render(AppComponent);
  });

  it('should have an initial value of 0', () => {
		expect(screen.getByText('0')).toBeTruthy();
	});

	it('should increment the value when the increment button is clicked', () => {
		const incrementButton = screen.getByRole('button', { name: 'Increment' });
		fireEvent['click'](incrementButton);
		expect(screen.getByText('1')).toBeTruthy();
	});
});
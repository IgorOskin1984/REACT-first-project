import { render, screen } from '@testing-library/react';
import MainApp from '../App';

test('render MainAPP', () => {
	render(<MainApp />);
	const linkElement = screen.getByRole(/main/i);
	expect(linkElement).toBeInTheDocument();
});

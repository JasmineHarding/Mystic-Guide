import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mystic Guide home page', () => {
  render(<App />);
  const titleElement = screen.getByText(/Mystic Guide/i);  // Adjust this to match the text on your home page
  expect(titleElement).toBeInTheDocument();
});

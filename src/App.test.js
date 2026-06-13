// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinH title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinH/i);
    expect(titleElement).toBeInTheDocument();
});

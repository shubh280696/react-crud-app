import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link 3', () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react unit testing/i);
    expect(linkElement).toBeInTheDocument();
  });
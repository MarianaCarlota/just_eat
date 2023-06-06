import { render, screen } from '@testing-library/react';
import Search from '../search';


test('renders webpage title', () => {
  render(<Search />);
  const headingElement = screen.getByText(/FIND THE BEST FOOD NEAR YOU!/i);
  expect(headingElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Button from '../button';

it('should render a calculator button with text same as passed in label prop', () => {
  render(<Button label={'Test'} />);
  const buttonElement = screen.getByText(/test/i);
  expect(buttonElement).toBeInTheDocument();
});

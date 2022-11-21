import { render, screen } from '@testing-library/react';
import OutputScreenRow from '../outputScreenRow';

it('should display the value passed in value prop', () => {
  render(<OutputScreenRow value={'Test'} />);
  expect(screen.getByTestId('display-row')).toHaveAttribute('value', "Test");
});

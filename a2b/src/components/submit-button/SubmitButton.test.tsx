import { fireEvent, render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

test('Check Submit button Loads', () => {
  const mockClickHandler = jest.fn();
  render(<SubmitButton onClick={mockClickHandler} label="Submit" />);
  const submitButtonElement = screen.getByText(/Submit/i);
  fireEvent.click(submitButtonElement);
  expect(submitButtonElement).toBeInTheDocument();
  expect(mockClickHandler).toHaveBeenCalled();
});

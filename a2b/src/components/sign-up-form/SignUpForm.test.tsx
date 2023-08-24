import { render, screen } from '@testing-library/react';
import SignUpForm from './SignUpForm';

test('displays four input fields and test their placeholders', () => {
  render(<SignUpForm />);
  const firstNameElement = screen.getByPlaceholderText(/Enter First Name.../i);
  const lastNameElement = screen.getByPlaceholderText(/Enter First Name.../i);
  const emailAddressElement =
    screen.getByPlaceholderText(/Enter First Name.../i);
  const passwordElement = screen.getByPlaceholderText(/Enter First Name.../i);
  expect(firstNameElement).toBeInTheDocument();
  expect(lastNameElement).toBeInTheDocument();
  expect(emailAddressElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
});

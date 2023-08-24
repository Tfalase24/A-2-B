import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginComponent from './Login';

test('dispays two input boxes, one for an email address the other for a password', () => {
  render(<LoginComponent />);
  const emailElement = screen.getByPlaceholderText(/Enter Email Address.../i);
  const passwordElement = screen.getByPlaceholderText(/Enter Password.../i);
  expect(emailElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
});

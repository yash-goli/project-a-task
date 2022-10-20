import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Form from './Form';


describe('Form', () => {
  test('submit button should be disabled when email and password are empty', async () => {
    render(<Form />);

    const button = await screen.findByTestId('button');

    expect(button).toHaveAttribute('disabled');
  });
  test('submit button should be disabled when email is valid and password is invalid', async () => {
    render(<Form />);

    const email = await screen.findByTestId('email');
    const password = await screen.findByTestId('password');
    const button = await screen.findByTestId('button');

    userEvent.type(email, 'abc@xyz.com');
    userEvent.type(password, 'dfc');

    expect(button).toHaveAttribute('disabled');
  });
  test('submit button should be disabled when email is invalid and password is valid', async () => {
    render(<Form />);

    const email = await screen.findByTestId('email');
    const password = await screen.findByTestId('password');
    const button = await screen.findByTestId('button');

    userEvent.type(email, 'abc');
    userEvent.type(password, 'abcEFG@123');

    expect(button).toHaveAttribute('disabled');
  });

  test('submit button should be enabled when email is valid and password is valid', async () => {
    render(<Form />);

    const email = await screen.findByTestId('email');
    const password = await screen.findByTestId('password');
    const button = await screen.findByTestId('button');

    userEvent.type(email, 'abc@xyz.com');
    userEvent.type(password, 'abcEFG@123');

    expect(button).not.toHaveAttribute('disabled');
  });
});
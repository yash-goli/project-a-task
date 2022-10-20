import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Email from './Email';


describe('Email input', () => {
  test('should show error class when invalid email is passed', async () => {
    const mockFn = jest.fn();
    render(<Email setEmail={mockFn}/>);

    const email = await screen.findByTestId('email');

    userEvent.type(email, 'abcd');

    expect(await screen.findByTestId('validity0')).toHaveClass('error');
  });
  test('should not pass invalid email to mock function', async () => {
    const mockFn = jest.fn();
    const testEmail = 'abcd';
    render(<Email setEmail={mockFn}/>);

    const email = await screen.findByTestId('email');

    userEvent.type(email, testEmail);

    expect(mockFn).not.toHaveBeenCalled();
  });
  test('should show success class when valid email is passed', async () => {
    const mockFn = jest.fn();
    render(<Email setEmail={mockFn}/>);

    const email = await screen.findByTestId('email');

    userEvent.type(email, 'abcd@xyz.com');

    expect(await screen.findByTestId('validity0')).toHaveClass('success');
  })
  test('should pass valid email to mock function', async () => {
    const mockFn = jest.fn();
    const testEmail = 'abcd@xyz.com';
    render(<Email setEmail={mockFn}/>);

    const email = await screen.findByTestId('email');

    userEvent.type(email, testEmail);

    expect(mockFn).toHaveBeenLastCalledWith(testEmail);
  });
});
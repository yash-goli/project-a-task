import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Password from './Password';


describe('Password input', () => {
  test('should show success class for lower case', async () => {
    const mockFn = jest.fn();
    render(<Password setPassword={mockFn}/>);

    const password = await screen.findByTestId('password');

    userEvent.type(password, 'abcd');

    expect(await (await screen.findByText('8+ characters')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('lowercase letter')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('uppercase letter')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('numbers')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('special character')).childNodes[0]).toHaveClass('error');
  });
  test('should show success class for upper case', async () => {
    const mockFn = jest.fn();
    render(<Password setPassword={mockFn}/>);

    const password = await screen.findByTestId('password');

    userEvent.type(password, 'ABCD');

    expect(await (await screen.findByText('8+ characters')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('lowercase letter')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('uppercase letter')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('numbers')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('special character')).childNodes[0]).toHaveClass('error');
  });
  test('should show success class for number case', async () => {
    const mockFn = jest.fn();
    render(<Password setPassword={mockFn}/>);

    const password = await screen.findByTestId('password');

    userEvent.type(password, '123');

    expect(await (await screen.findByText('8+ characters')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('lowercase letter')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('uppercase letter')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('numbers')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('special character')).childNodes[0]).toHaveClass('error');
  });
  test('should show success class for 8+ character and number case', async () => {
    const mockFn = jest.fn();
    render(<Password setPassword={mockFn}/>);

    const password = await screen.findByTestId('password');

    userEvent.type(password, '123456789');

    expect(await (await screen.findByText('8+ characters')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('lowercase letter')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('uppercase letter')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('numbers')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('special character')).childNodes[0]).toHaveClass('error');
  });
  test('should show success class for 8+ character, number case and special case', async () => {
    const mockFn = jest.fn();
    render(<Password setPassword={mockFn}/>);

    const password = await screen.findByTestId('password');

    userEvent.type(password, '123456789%$');

    expect(await (await screen.findByText('8+ characters')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('lowercase letter')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('uppercase letter')).childNodes[0]).toHaveClass('error');
    expect(await (await screen.findByText('numbers')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('special character')).childNodes[0]).toHaveClass('success');
  });
  test('should show success class for all cases', async () => {
    const mockFn = jest.fn();
    render(<Password setPassword={mockFn}/>);

    const password = await screen.findByTestId('password');

    userEvent.type(password, 'abCD#$23456');

    expect(await (await screen.findByText('8+ characters')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('lowercase letter')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('uppercase letter')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('numbers')).childNodes[0]).toHaveClass('success');
    expect(await (await screen.findByText('special character')).childNodes[0]).toHaveClass('success');
  });
  test('should not pass invalid password to mock function', async () => {
    const mockFn = jest.fn();
    const testPassword = 'abcd';
    render(<Password setPassword={mockFn}/>);

    const email = await screen.findByTestId('password');

    userEvent.type(email, testPassword);

    expect(mockFn).not.toHaveBeenCalled();
  });
  test('should pass valid password to mock function', async () => {
    const mockFn = jest.fn();
    const testPassword = 'abCD#$23456';
    render(<Password setPassword={mockFn}/>);

    const email = await screen.findByTestId('password');

    userEvent.type(email, testPassword);

    expect(mockFn).toHaveBeenLastCalledWith(testPassword);
  });
});
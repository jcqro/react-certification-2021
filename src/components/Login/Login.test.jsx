import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '.';

describe('Login', () => {
  it('must render Login and get text Username', () => {
    render(<Login />);
    const usr = screen.getAllByText(/Username/);
    expect(usr).toHaveLength(2);
  });
  it('must render Login and get text Password', () => {
    render(<Login />);
    const passwd = screen.getAllByText(/Password/);
    expect(passwd).toHaveLength(2);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import DataContext from '../../context/DataContext';
import Logout from '.';

describe('Logout', () => {
  it('must render Logout and get a title Logout', () => {
    // const onClick = jest.fn();
    const context = {
      setHasLoggedOut: jest.fn(),
    };
    render(
      <DataContext.Provider value={context}>
        <Logout />
      </DataContext.Provider>
    );
    const logout = screen.getByTitle('Logout');
    expect(logout).toBeDefined();
  });
});

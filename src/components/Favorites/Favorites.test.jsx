import React from 'react';
import { render, screen } from '@testing-library/react';
import DataContext from '../../context/DataContext';
import Favorites from '.';

describe('Favorites', () => {
  it('must render Favorites and component StyledH3 exists', () => {
    const context = {
      favoriteVideos: [],
      setFavoriteVideos: jest.fn(),
    };
    render(
      <DataContext.Provider value={context}>
        <Favorites />
      </DataContext.Provider>
    );
    expect(screen.queryAllByTestId(/StyledH3/i)).toBeTruthy();
  });
});

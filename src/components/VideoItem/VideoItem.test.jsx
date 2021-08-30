import React from 'react';
import { render } from '@testing-library/react';
import DataContext from '../../context/DataContext';
import VideoItem from '.';

describe('VideoItem', () => {
  it('VideoItem renders with a className named content', () => {
    const context = {
      favoriteVideos: [],
      setFavoriteVideos: jest.fn(),
    };
    const { container } = render(
      <DataContext.Provider value={context}>
        <VideoItem />
      </DataContext.Provider>
    );
    expect(container.getElementsByClassName('content').length).toBe(1);
  });
});

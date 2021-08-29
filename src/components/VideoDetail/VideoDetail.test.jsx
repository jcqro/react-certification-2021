import React from 'react';
import { render, screen } from '@testing-library/react';
import DataContext from '../../context/DataContext';
import VideoDetail from '.';

describe('VideoDetail', () => {
  it('must render VideoDetail and text related videos', () => {
    const context = {
      selectedVideo: [],
      setSelectedVideo: jest.fn(),
      relatedVideos: [],
      favoriteVideos: [],
      setFavoriteVideos: jest.fn(),
    };
    render(
      <DataContext.Provider value={context}>
        <VideoDetail />
      </DataContext.Provider>
    );
    expect(screen.queryByText(/related videos/i)).toBeInTheDocument();
  });
});

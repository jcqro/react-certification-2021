import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from '../VideoItem';
import DataContext from '../../context/DataContext';
import VideoDetail from '../VideoDetail';

export default function Content() {
  const { videos } = useContext(DataContext);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <VideoDetail />
        </Grid>
        <Grid item xs={12} sm={3}>
          {videos.map((video) => (
            <VideoItem key={video.id.videoId} video={video} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

import React, { useContext } from 'react';
import VideoItem from '../VideoItem';
import DataContext from '../../context/DataContext';

export default function Content(props) {
  const { handleVideoSelect } = props;
  const { videos } = useContext(DataContext);
  return (
    <div>
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          handleVideoSelect={handleVideoSelect}
        />
      ))}
    </div>
  );
}

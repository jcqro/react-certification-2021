import React from 'react';
import VideoItem from '../VideoItem';

export default function Content(props) {
  const { videos, handleVideoSelect } = props;
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

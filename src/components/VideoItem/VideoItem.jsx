/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

export default function VideoItem(props) {
  const { video, handleVideoSelect } = props;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={() => handleVideoSelect(video)} style={{ cursor: 'pointer' }}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

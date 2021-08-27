import React from 'react';
import DataContext from '../../context/DataContext';

export default function VideoItem(props) {
  const { video } = props;
  const { setSelectedVideo } = React.useContext(DataContext);
  return (
    <div
      onClick={() => setSelectedVideo(video)}
      style={{ cursor: 'pointer' }}
      aria-hidden="true"
    >
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import DataContext from '../../context/DataContext';

export default function VideoItem(props) {
  const { video } = props;
  const { setSelectedVideo } = React.useContext(DataContext);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={() => setSelectedVideo(video)} style={{ cursor: 'pointer' }}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import DataContext from '../../context/DataContext';

export default function VideoDetail() {
  const { selectedVideo, setSelectedVideo, relatedVideos } =
    React.useContext(DataContext);
  if (!selectedVideo) {
    return (
      <div>
        <h3>Type search keyword in the toolbar and hit enter...</h3>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div>
      <div>
        <iframe
          src={videoSrc}
          width="100%"
          height="400"
          allowFullScreen
          title="Video player"
        />
      </div>
      <div>
        <h4>{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
      <div>
        <h4>Related Videos</h4>
        {relatedVideos.length > 0 ? (
          relatedVideos.map((relatedVideo) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              key={relatedVideo.id.videoId}
              onClick={() => setSelectedVideo(relatedVideo)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={relatedVideo.snippet?.thumbnails.default.url}
                alt={relatedVideo.snippet?.description}
              />

              <div>{relatedVideo.snippet?.title}</div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

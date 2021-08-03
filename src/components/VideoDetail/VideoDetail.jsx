import React from 'react';

export default function VideoDetail(props) {
  const { video, relatedVideos } = props;
  if (!video) {
    return (
      <div>
        <h3>Enter search keyword in the toolbar and hit enter...</h3>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

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
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <div>
        <h4>Related Videos</h4>
        {relatedVideos.length > 0 ? (
          relatedVideos.map((relatedVideo) => (
            <div key={relatedVideo.id.videoId}>
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

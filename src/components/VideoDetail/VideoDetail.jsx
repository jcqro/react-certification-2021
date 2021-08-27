import React from 'react';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DataContext from '../../context/DataContext';

export default function VideoDetail() {
  const {
    selectedVideo,
    setSelectedVideo,
    relatedVideos,
    favoriteVideos,
    setFavoriteVideos,
  } = React.useContext(DataContext);

  function handleAdd(favorite) {
    const newFavorites = favoriteVideos.concat(favorite);
    setFavoriteVideos(newFavorites);
  }

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
            <div>
              <div
                key={relatedVideo.id.videoId}
                onClick={() => setSelectedVideo(relatedVideo)}
                style={{ cursor: 'pointer' }}
                aria-hidden="true"
              >
                <img
                  src={relatedVideo.snippet?.thumbnails.default.url}
                  alt={relatedVideo.snippet?.description}
                />

                <div>{relatedVideo.snippet?.title}</div>
              </div>
              <Button onClick={() => handleAdd(relatedVideo)}>
                Add to <FavoriteIcon fontSize="small" />
              </Button>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

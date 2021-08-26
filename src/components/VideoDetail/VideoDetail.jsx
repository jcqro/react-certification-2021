/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Button from '@material-ui/core/Button';
import DataContext from '../../context/DataContext';

export default function VideoDetail() {
  const {
    selectedVideo,
    setSelectedVideo,
    relatedVideos,
    favoriteVideos,
    setFavoriteVideos,
  } = React.useContext(DataContext);
  /* const [showButtons, setShowButtons] = React.useState(false); */

  if (!selectedVideo) {
    return (
      <div>
        <h3>Type search keyword in the toolbar and hit enter...</h3>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  /*  const handleOnMouseOver = () => {
    setShowButtons(!showButtons);
  }; */

  /* function addToFavorites(favoriteVideo) {
    setFavoriteVideos(favoriteVideos.concat(favoriteVideo));
    // const favorites = favoriteVideos.concat(favoriteVideo);
    localStorage.setItem('favorites', JSON.stringify(favoriteVideos));
  } */
  /* function removeFromFavorites(favoriteVideo) {
    const index = favoriteVideos.indexOf(favoriteVideo);
    if (index > -1) {
      setFavoriteVideos(favoriteVideos.splice(index, 1));
    }
  } */

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
              /* onMouseOver={handleOnMouseOver} */
              style={{ cursor: 'pointer' }}
            >
              <img
                src={relatedVideo.snippet?.thumbnails.default.url}
                alt={relatedVideo.snippet?.description}
              />

              <div>{relatedVideo.snippet?.title}</div>

              <Button
                onClick={() => setFavoriteVideos(favoriteVideos.concat(relatedVideo))}
              >
                Add
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

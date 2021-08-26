/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
/* import Button from '@material-ui/core/Button'; */
/* import DataContext from '../../context/DataContext'; */

export default function Favorites() {
  /* const { favoriteVideos, setFavoriteVideos } = React.useContext(DataContext); */

  const favorites = JSON.parse(localStorage.getItem('favorites'));
  // const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  /* function removeFromFavorites(favoriteVideo) {
    const index = favoriteVideos.indexOf(favoriteVideo);
    if (index > -1) {
      setFavoriteVideos(favoriteVideos.splice(index, 1));
    }
  } */

  return (
    <div>
      {/* <div>
        <iframe
          src={videoSrc}
          width="100%"
          height="400"
          allowFullScreen
          title="Video player"
        />
      </div> */}
      <div>
        {favorites?.length > 0 ? (
          favorites.map((favorite) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              key={favorite.id.videoId}
              /* onClick={() => setSelectedVideo(favorite)} */
              style={{ cursor: 'pointer' }}
            >
              <img
                src={favorite.snippet?.thumbnails.default.url}
                alt={favorite.snippet?.description}
              />

              <div>{favorite.snippet?.title}</div>
              {/* <Button onClick={removeFromFavorites(favorite)}>Remove</Button> */}
            </div>
          ))
        ) : (
          <>
            <h3>You have no favorite videos</h3>
          </>
        )}
      </div>
    </div>
  );
}

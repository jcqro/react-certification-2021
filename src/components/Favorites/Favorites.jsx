/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import DataContext from '../../context/DataContext';

const Wrapper = styled.section`
  padding: 4em;
  background: black;
`;
const StyledH3 = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

export default function Favorites() {
  const { favoriteVideos, setFavoriteVideos } = React.useContext(DataContext);

  const favorites = JSON.parse(localStorage.getItem('favorites'));

  function removeFromFavorites(id) {
    const newFavorites = favoriteVideos.filter((favorite) => favorite.id.videoId !== id);
    setFavoriteVideos(newFavorites);
  }

  return (
    <Wrapper>
      {favorites?.length > 0 ? (
        favorites.map((favorite) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            key={favorite.id.videoId}
            /* onClick={() => setSelectedVideo(favorite)} */
            /* style={{ cursor: 'pointer' }} */
          >
            <img
              src={favorite.snippet?.thumbnails.default.url}
              alt={favorite.snippet?.description}
            />

            <div>{favorite.snippet?.title}</div>
            <Button onClick={() => removeFromFavorites(favorite.id.videoId)}>
              Remove
            </Button>
          </div>
        ))
      ) : (
        <>
          <StyledH3>You have no favorite videos</StyledH3>
        </>
      )}
    </Wrapper>
  );
}

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
          <div key={favorite.id.videoId}>
            <img src={favorite.snippet?.thumbnails.default.url} alt="" />
            <div>{favorite.snippet?.title}</div>
            <div>{favorite.snippet?.description}</div>
            <Button onClick={() => removeFromFavorites(favorite.id.videoId)}>
              Remove
            </Button>
          </div>
        ))
      ) : (
        <StyledH3>You have no favorite videos</StyledH3>
      )}
    </Wrapper>
  );
}

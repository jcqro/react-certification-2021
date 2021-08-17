import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../Header';
import Content from '../Content';
import youtube from '../../api/youtube';
import VideoDetail from '../VideoDetail';
import DataContext from '../../context/DataContext';
/* 
function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
} */

function App() {
  const [termToSearch, setTermToSearch] = React.useState();
  const [videos, setVideos] = React.useState([]);
  const [relatedVideos, setRelatedVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false);

  // const [state, dispatch] = React.useReducer(reducer, { darkMode: false });

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  React.useEffect(() => {
    async function getRelatedVideos() {
      const response = await youtube.get('search', {
        params: {
          relatedToVideoId: selectedVideo.id.videoId,
          type: 'video',
        },
      });
      setRelatedVideos(response.data.items);
    }

    if (selectedVideo) {
      getRelatedVideos();
    }

    async function getVideos() {
      const response = await youtube.get('search', {
        params: {
          q: termToSearch,
        },
      });
      setVideos(response.data.items);
    }

    if (termToSearch) {
      getVideos();
    }
  }, [termToSearch, selectedVideo, setRelatedVideos]);

  return (
    <DataContext.Provider
      value={{
        termToSearch,
        setTermToSearch,
        videos,
        setVideos,
        selectedVideo,
        setSelectedVideo,
        relatedVideos,
        setRelatedVideos,
        darkMode,
        setDarkMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={9}>
            <VideoDetail />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Content />
          </Grid>
        </Grid>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;

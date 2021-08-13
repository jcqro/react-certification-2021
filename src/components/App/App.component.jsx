import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../Header';
import Content from '../Content';
import youtube from '../../api/youtube';
import VideoDetail from '../VideoDetail';
import DataContext from '../../context/DataContext';

function App() {
  const [termToSearch, setTermToSearch] = React.useState();
  const [videos, setVideos] = React.useState([]);
  const [relatedVideos, setRelatedVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

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
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={9}>
          <VideoDetail video={selectedVideo} relatedVideos={relatedVideos} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Content handleVideoSelect={handleVideoSelect} />
        </Grid>
      </Grid>
    </DataContext.Provider>
  );
}

export default App;

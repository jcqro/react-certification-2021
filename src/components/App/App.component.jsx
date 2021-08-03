import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../Header';
import Content from '../Content';
import youtube from '../../api/youtube';
import VideoDetail from '../VideoDetail';

function App() {
  const [videos, setVideos] = React.useState([]);
  const [relatedVideos, setRelatedVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const handleSubmit = async (termFromHeaderSearch) => {
    const response = await youtube.get('search', {
      params: {
        q: termFromHeaderSearch,
      },
    });
    setVideos(response.data.items);
  };
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
  }, [selectedVideo, setRelatedVideos]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header handleFormSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <VideoDetail video={selectedVideo} relatedVideos={relatedVideos} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Content videos={videos} handleVideoSelect={handleVideoSelect} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

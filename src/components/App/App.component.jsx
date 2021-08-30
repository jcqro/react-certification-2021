import React from 'react';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Content from '../Content';
import Favorites from '../Favorites';
import youtube from '../../api/youtube';
import DataContext from '../../context/DataContext';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}

function App() {
  const classes = useStyles();
  const [termToSearch, setTermToSearch] = React.useState();
  const [videos, setVideos] = React.useState([]);
  const [relatedVideos, setRelatedVideos] = React.useState([]);
  const [favoriteVideos, setFavoriteVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [selectedFavorite, setSelectedFavorite] = React.useState(null);
  const [userData, setUserData] = React.useState(null);
  const [hasLoggedOut, setHasLoggedOut] = React.useState(false);

  const [state, dispatch] = React.useReducer(reducer, { darkMode: true });

  const theme = createTheme({
    palette: {
      type: state.darkMode ? 'dark' : 'light',
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
    localStorage.setItem('favorites', JSON.stringify(favoriteVideos));
  }, [termToSearch, selectedVideo, setRelatedVideos, favoriteVideos]);

  const onLogin = () => {
    setHasLoggedOut(false);
  };

  if (!userData || hasLoggedOut) {
    return <Login setUserData={setUserData} onLogin={onLogin} />;
  }

  return (
    <div className={classes.root}>
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
          favoriteVideos,
          setFavoriteVideos,
          userData,
          setUserData,
          setHasLoggedOut,
          selectedFavorite,
          setSelectedFavorite,
          state,
          dispatch,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Header />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route exact path="/" component={Content} />
                <PrivateRoute path="/favorites" component={Favorites} />
              </Switch>
            </main>
          </BrowserRouter>
        </ThemeProvider>
      </DataContext.Provider>
    </div>
  );
}

export default App;

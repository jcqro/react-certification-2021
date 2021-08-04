import axios from 'axios';

const KEY = process.env.REACT_APP_YOU_TUBE_API_KEY;
// const KEY = '';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

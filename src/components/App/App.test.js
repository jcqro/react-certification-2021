import axios from 'axios';

jest.mock('axios');

describe('Test API', () => {
  it('Test Successfull data from an API', async () => {
    const data = {
      data: {
        videos: [
          {
            videoID: '1',
            title: 'a',
          },
          {
            videoID: '2',
            title: 'b',
          },
        ],
      },
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });

  it('Test erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
  });
});

import youtube from '../../api/youtube';

describe('You Tube API', () => {
  it('should load disclosure youtube videos', async () => {
    const termToSearch = 'disclosure';
    const response = await youtube.get('search', {
      params: {
        q: termToSearch,
      },
    });
    expect(response).toBeDefined();
  });
});

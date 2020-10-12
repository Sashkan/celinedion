import SpotifyWebApi from 'spotify-web-api-node'
import config from '../config';

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: config.spotifyClientID,
  clientSecret: config.spotifyClientSecret,
  redirectUri: 'http://www.example.com/callback'
});

export default spotifyApi

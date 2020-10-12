import React, { useEffect, useState } from 'react'
import config from '../../config';
import Player from '../../components/Player';

const PlayerPage = ({}) => {

  const [devices, setDevices] = useState([])

  // useEffect(() => {

  //   window.onSpotifyWebPlaybackSDKReady = () => {

  //     const token = config.spotifyToken

  //     // 1 - Initialize controls

  //     // 1 - Create fake player

  //     const Spotify = window.Spotify
  //     const player = new Spotify.Player({
  //       name: 'blindtest',
  //       getOAuthToken: cb => { cb(token); }
  //     });

  //     // Error handling
  //     player.addListener('initialization_error', ({ message }) => { console.error(message); });
  //     player.addListener('authentication_error', ({ message }) => { console.error(message); });
  //     player.addListener('account_error', ({ message }) => { console.error(message); });
  //     player.addListener('playback_error', ({ message }) => { console.error(message); });

  //     // Playback status updates
  //     player.addListener('player_state_changed', state => { console.log(state); });

  //     // Ready
  //     player.addListener('ready', ({ device_id }) => {
  //       console.log('Ready with Device ID', device_id);
  //       player.resume()
  //     });

  //     // Not Ready
  //     player.addListener('not_ready', ({ device_id }) => {
  //       console.log('Device ID has gone offline', device_id);
  //     });

  //     // Connect to the player!
  //     player.connect();
  //   };
  // }, [])


  return (
    <div>
      <Player
        uri="spotify:playlist:5SxSVU6UG9vK4i9RvUTkgk"
      />
    </div>
  )
}

export default PlayerPage


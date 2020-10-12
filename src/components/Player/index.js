import React from 'react'
import SpotifyPlayer from 'react-spotify-player';

const Player = ({ uri }) => {

  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'coverart'; // or 'coverart'
  const theme = 'black'; // or 'white'


  return (
    <div>
      <SpotifyPlayer
        uri={uri}
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  )
}

export default Player

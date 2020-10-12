import React, { useState } from 'react'
import { Flex, Box, Button, Grid, Divider } from '@chakra-ui/core'
import PlaylistSelector from '../PlaylistSelector'
import InvitedPlayers from '../InvitedPlayers'
import InvitePlayer from '../InvitePlayer'
import LobbyChat from '../LobbyChat'
import Player from '../Player'


const RightColumn = ({ uri, step, startGame, playlists, setPlaylist }) => {
  if (step === 'lobby') {
    return (
      <Box>
        <PlaylistSelector
          playlists={playlists}
          setPlaylist={setPlaylist}
        />
        <Divider />
        <Button onClick={() => startGame()} w='100%' bg='teal'>
          Start
        </Button>
      </Box>
    )
  } else if (step === 'playing' && uri) {
    return (
      <Player
        uri={uri}
      />
    )
  }
}


const Lobby = ({ players, startGame, messages, sendMessage, name, step }) => {
  const [playlist, setPlaylist] = useState(null)

  const [playlists, setPlaylists] = useState([
    {
      name: 'Garage Band',
      uri: 'spotify:playlist:5SxSVU6UG9vK4i9RvUTkgk',
    },
    {
      name: 'Rap Cream',
      uri: 'spotify:playlist:3dOT0RPUShLRA3VGe36P5s',
    },
  ])

  return (
    <Flex>
      <Box flex={1}>
        <Grid templateColumns='1fr 3fr 1fr' gap='3'>
          <Box flex={1}>
            <InvitedPlayers
              players={players}
            />
            <InvitePlayer />
          </Box>
          <Box>
            <LobbyChat
              messages={messages}
              name={name}
              sendMessage={sendMessage}
            />
          </Box>
          <RightColumn
            uri={playlist}
            playlists={playlists}
            setPlaylist={setPlaylist}
            startGame={startGame}
            step={step}
          />
        </Grid>
      </Box>
    </Flex>
  )
}

export default Lobby

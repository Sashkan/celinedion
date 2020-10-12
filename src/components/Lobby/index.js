import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/core'
import PlaylistSelector from '../PlaylistSelector'
import InvitedPlayers from '../InvitedPlayers'
import InvitePlayer from '../InvitePlayer'
import LobbyChat from '../LobbyChat'


const Lobby = ({ players, startGame, messages, sendMessage }) => {
  return (
    <Flex>
      <Box flex={1}>
        <PlaylistSelector />
        <LobbyChat
          messages={messages}
          sendMessage={sendMessage}
        />
        <Button onClick={() => startGame()}>
          Start
        </Button>
      </Box>
      <Box flex={1}>
        <InvitedPlayers
          players={players}
        />
        <InvitePlayer />
      </Box>
    </Flex>
  )
}

export default Lobby

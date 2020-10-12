import React from 'react'
import { Flex, Box, Button, Grid, Divider } from '@chakra-ui/core'
import PlaylistSelector from '../PlaylistSelector'
import InvitedPlayers from '../InvitedPlayers'
import InvitePlayer from '../InvitePlayer'
import LobbyChat from '../LobbyChat'


const Lobby = ({ players, startGame, messages, sendMessage, name }) => {
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
          <Box>
            <PlaylistSelector />
            <Divider />
            <Button onClick={() => startGame()} w='100%' bg='teal'>
              Start
            </Button>
          </Box>
        </Grid>
      </Box>
    </Flex>
  )
}

export default Lobby

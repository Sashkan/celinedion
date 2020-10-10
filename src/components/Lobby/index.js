import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import PlaylistSelector from '../PlaylistSelector'
import InvitedPlayers from '../InvitedPlayers'
import InvitePlayer from '../InvitePlayer'

const Lobby = ({ players }) => {
  return (
    <Flex>
      <Box flex={1}>
        <PlaylistSelector />
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

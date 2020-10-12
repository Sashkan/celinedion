import { Box, PseudoBox } from '@chakra-ui/core'
import React from 'react'

const PlaylistSelector = ({ playlists, setPlaylist }) => {
  return (
    <Box p='3' borderRadius='5px' border='1px solid #eee'>
      PlaylistSelector
      <Box>
        { playlists.map((playlist) => {
          return (
            <PseudoBox
              onClick={() => setPlaylist(playlist.uri)}
            >
              <p>{playlist.name}</p>
            </PseudoBox>
          )
        })}
      </Box>
    </Box>
  )
}

export default PlaylistSelector

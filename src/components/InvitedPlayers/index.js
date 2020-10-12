import { Box, Text } from '@chakra-ui/core'
import React, { useState, useEffect } from 'react'

const InvitedPlayers = ({ players }) => {
  return (
    <Box p={3}>
      <Box>
      { players.map((player) => {
        return (
          <Box
            p={3}
            border='1px solid #ddd'
            shadow='md'
          >
            <p>{player.username}</p>
          </Box>
        )
      })}
      </Box>
    </Box>
  )
}

export default InvitedPlayers

import { Box } from '@chakra-ui/core'
import React from 'react'

const Main = ({ children }) => {
  return (
    <Box
      p='10px 20%'
    >
      {children}
    </Box>
  )
}

export default Main

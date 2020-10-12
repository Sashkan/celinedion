import { Box } from '@chakra-ui/core'
import React from 'react'
import Header from '../../components/Header'

const Main = ({ children }) => {
  return (
    <Box
      p='0 20%'
    >
      <Header />
      {children}
    </Box>
  )
}

export default Main

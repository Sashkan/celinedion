import { Box, Flex } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({}) => {
  return (
    <Flex bg='#111' color='#fff'>
      <Box p='3'>
        <Link to="/">Home</Link>
      </Box>
      <Box p='3'>
        <Link to="/player">Player</Link>
      </Box>
    </Flex>
  )
}

export default Header

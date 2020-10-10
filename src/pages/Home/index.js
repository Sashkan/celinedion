import React from 'react'
import { Button, useTheme } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'

const Home = ({}) => {
  const theme = useTheme()
  const history = useHistory()

  const createRoom = () => {
    const id = Math.random().toString(36).substring(7)

    history.push(`/room/${id}`)
  }

  return (
    <div style={{ color: theme.color1 }}>
      Home
      <Button onClick={() => createRoom()}>
        New Game
      </Button>
    </div>
  )
}

export default Home

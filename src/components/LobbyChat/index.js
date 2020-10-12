import { Box, Text } from '@chakra-ui/core'
import React from 'react'
import MessageInput from '../MessageInput'

const ChatMessage = ({message}) => {
  return (
    <Box p='5px 0'>
      <Text><span style={{fontWeight: 'bold'}}>{message.username}</span>- {message.time}</Text>
      <Box
        p='2'
        bg='#1C61C6'
        color='#fff'
        borderRadius='5px'
      >
        <p>{message.text}</p>
      </Box>
    </Box>
  )
}

const LobbyChat = ({ messages, sendMessage }) => {
  return (
    <Box p='3' borderRadius='5px' border='1px solid #ddd'>
      LobbyChat
      <Box>
        {messages.map((message) => {
          return <ChatMessage message={message} />
        })}
      </Box>
      <MessageInput
        sendMessage={sendMessage}
      />
    </Box>
  )
}

export default LobbyChat

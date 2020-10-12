import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import MessageInput from '../MessageInput'

const ChatMessage = ({message, name}) => {
  return (
    <Flex
      p='5px 0'
      alignSelf={message.username === name ? 'flex-end' : 'flex-start'}
      w='100%'
      flexDirection='column'
      alignItems={message.username === name ? 'flex-end' : 'flex-start'}
    >
      <Text><span style={{fontWeight: 'bold'}}>{message.username}</span>- {message.time}</Text>
      <Box
        w='60%'
        p='2'
        bg={message.username === name ? 'teal.500' : '#eee'}
        color={message.username === name ? '#eee' : '#333'}
        borderRadius='5px'
      >
        <p>{message.text}</p>
      </Box>
    </Flex>
  )
}

const LobbyChat = ({ messages, sendMessage, name }) => {
  return (
    <Box p='3' borderRadius='5px' border='1px solid #ddd'>
      <Flex flexDirection='column'>
        {messages.map((message) => {
          return <ChatMessage message={message} name={name} />
        })}
      </Flex>
      <MessageInput
        sendMessage={sendMessage}
      />
    </Box>
  )
}

export default LobbyChat

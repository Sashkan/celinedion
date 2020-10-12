import React, { createRef, useState } from 'react'
import { Box, Button, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/core'

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('')
  const inputRef = createRef()

  const send = () => {
    sendMessage(message)
    setMessage('')
    inputRef.current.focus()
  }

  return (
    <Box>
      <InputGroup>
        <Input ref={inputRef} value={message} onChange={(e) => setMessage(e.target.value)} />

        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={send} bg='teal.500'>
            <Icon name="arrow-right" size="20px" />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default MessageInput

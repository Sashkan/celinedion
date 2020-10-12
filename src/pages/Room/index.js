import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
} from '@chakra-ui/core';
import React, { useState, useEffect, useReducer } from 'react'
import { useLocation, useParams } from 'react-router-dom';
// import socketIOClient from "socket.io-client";
import io from 'socket.io-client';

import GameWrapper from '../../components/GameWrapper';
import JoinForm from '../../components/JoinForm';
import Lobby from '../../components/Lobby';
import config from '../../config';
const socket = io(config.ioEndpoint);


// TO REMOVE AFTER PLUGGED TO REDUX

const RoomContent = ({
  messages,
  name,
  players,
  sendMessage,
  setStep,
  step,
}) => {
  return (
    <Lobby
      players={players}
      messages={messages}
      startGame={() => setStep('playing')}
      sendMessage={sendMessage}
      name={name}
      step={step}
    />
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'addMessage':
      return [...state, action.payload];
    default:
      throw new Error();
  }
}

const Room = ({ }) => {

  const [players, setPlayers] = useState([])
  const [name, setName] = useState('')
  const { id } = useParams()
  const [step, setStep] = useState('lobby')

  const initialState = []

  const [messages, setMessages] = useReducer(reducer, initialState)

  useEffect(() => {
    socket.on('roomUsers', ({ users }) => {
      setPlayers(users)
    });

    socket.on('message', message => {
      console.log(message);
      addMessage(message);

      // Scroll down
      // chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    return () => socket.disconnect();
  }, []);

  const addMessage = (message) => {
    setMessages({
      type: 'addMessage',
      payload: message,
    })
  }

  const addUser = (username) => {
    socket.emit('joinRoom', { username, room: id });
    setName(username)
  }

  const sendMessage = (message) => {
    console.log('HERE', socket.id);

    socket.emit('chatMessage', message);
  }

  return (
    <div>
      <h1>{id}</h1>
      <Divider />
      <JoinForm
        addUser={addUser}
      />
      <RoomContent
        step={step}
        name={name}
        players={players}
        sendMessage={sendMessage}
        setStep={setStep}
        messages={messages}
      />
    </div>
  )
}

export default Room

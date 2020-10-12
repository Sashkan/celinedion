import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/core';
import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import GameWrapper from '../../components/GameWrapper';
import JoinForm from '../../components/JoinForm';
import Lobby from '../../components/Lobby';
const ENDPOINT = "http://127.0.0.1:4001";


// TO REMOVE AFTER PLUGGED TO REDUX

const RoomContent = ({
  step,
  players,
  setStep,
  messages,
  sendMessage,
}) => {
  if (step === 'lobby') {
    return (
      <Lobby
        players={players}
        messages={messages}
        startGame={() => setStep('playing')}
        sendMessage={sendMessage}
      />
    )
  } else if (step === 'playing') {
    return (
      <GameWrapper
        setStep={setStep}
        messages={messages}
        sendMessage={sendMessage}
      />
    )
  }
}

const Room = ({ }) => {

  const [players, setPlayers] = useState([])
  const { id } = useParams()
  const [step, setStep] = useState('lobby')
  const [messages, setMessages] = useState([])
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {

    socket.on("newUser", data => {
      setPlayers([...players, {
        name: data.name,
      }])
    });


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
    setMessages([...messages, message])
  }

  const addUser = (username) => {
    socket.emit('joinRoom', { username, room: id });
  }

  const sendMessage = (message) => {
    socket.emit('chatMessage', message);
  }

  return (
    <div>
      <p>{id}</p>
      <JoinForm
        addUser={addUser}
      />
      <RoomContent
        step={step}
        players={players}
        sendMessage={sendMessage}
        setStep={setStep}
        messages={messages}
      />
    </div>
  )
}

export default Room

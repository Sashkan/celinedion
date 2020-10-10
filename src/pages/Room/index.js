import React, { useState, useEffect} from 'react'
import socketIOClient from "socket.io-client";
import Lobby from '../../components/Lobby';
const ENDPOINT = "http://127.0.0.1:4001";


// TO REMOVE AFTER PLUGGED TO REDUX

const players = [
  {
    name: 'Bruce Wayne',
  }
]


const RoomContent = ({ step, players }) => {
  if (step === 'lobby') {
    return <Lobby players={players} />
  }
}

const Room = ({}) => {

  const [response, setResponse] = useState("");
  const [step, setStep] = useState('lobby')

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);

  return (
    <div>
      Room
      <RoomContent
        step={step}
        players={players}
      />
    </div>
  )
}

export default Room

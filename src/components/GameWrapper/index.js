import React from 'react'
import Countdown from 'react-countdown';

const GameWrapper = ({}) => {
  return (
    <Countdown date={Date.now() + 5000}>
      <p>Started</p>
    </Countdown>
  )
}

export default GameWrapper

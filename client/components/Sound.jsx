import React from 'react'

import useSound from 'use-sound'

import tune from '../sounds/but-tweet.mp3'

function Sound() {
  const [play] = useSound(tune)
  return (
    <button onClick={play}>
      play tune!
    </button>
  )
}

export default Sound
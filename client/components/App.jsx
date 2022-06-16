import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import useSound from 'use-sound'

import tune from '../sounds/but-tweet.mp3'

const App = () => {
  const [count, setCount] = useState(0)
  // let ownTune = new Audio(tune)

  const [play] = useSound(tune)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <button onClick={play}>Play the tune</button>
      <Routes>
        <Route path='/test' element={<h1>TEST ROUTE</h1>} />
      </Routes>
    </div>
  )
}

export default App

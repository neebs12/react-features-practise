import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Images from './Images'
import Placeholder from './Placeholder'
import Sound from './Sound'
import ReRenderingFromProp from './ReRenderingFromProp'


const App = () => {
  let [count, setCount] = useState(0)
  console.log('Parent Rendering')

  const increment = () => setCount(count + 1)
  const pseudoIncrement = () => {
    count = count + 1 
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Click me!</button>
      <button onClick={pseudoIncrement}>Changing state variable directly does not invoke App re-render, Click Me!</button>

      <ReRenderingFromProp count={count} />

      <Routes>
        <Route path='/' element={<Placeholder />}/>
        <Route path='/sound' element={<Sound />} />
        <Route path='/images' element={<Images />} />
      </Routes>
    </div>
  )
}

export default App

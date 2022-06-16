import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <Routes>
        <Route path='/test' element={<h1>TEST ROUTE</h1>} />
      </Routes>
    </div>
  )
}

export default App

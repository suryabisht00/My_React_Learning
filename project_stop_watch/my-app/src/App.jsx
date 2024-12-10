import React,{ useState } from 'react'
import Stopwatch from './Stopwatch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Stopwatch />
    <Stopwatch />
    <Stopwatch />
    </>
  )
}

export default App

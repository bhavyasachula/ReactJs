import { useState } from 'react'
import './App.css'
import Caraousal from './components/Caraousal'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Caraousal/>
    </>
  )
}

export default App

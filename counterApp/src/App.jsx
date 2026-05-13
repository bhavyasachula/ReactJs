import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCounter] = useState(0)

  function addVal(){
    if(count<20){
  setCounter(count+1)
  }
}

  function removeVal(){
    if(count>0){
    setCounter(count-1)
  }
}
  return (
    <>
     <h1>Counter value:{count}</h1>
    <button onClick={addVal}>Increase</button>
    <button onClick={removeVal}>Decrease</button>
    </>
  )
}

export default App

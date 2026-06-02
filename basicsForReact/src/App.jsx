
import React from 'react'
import Button from './components/Button'
import {useState} from 'react'
function App() {
  const [a,b] = useState(true)
  return (
   <>
   <div className="flex justify-center align-center flex-col">
  <Button text="clickme"/>
    <Button text="hello"/>
      <Button text="clickme"/>
        <Button text="hello"/>
   </div>
   </>
  )
}

export default App

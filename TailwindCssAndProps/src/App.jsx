import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-100 items-center'>
      <h1 className='p-10 m-10 flex  justify-center bg-red-400'>Tailwind and props</h1>
    </div>
    </>
  )
}

export default App

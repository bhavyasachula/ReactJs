import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <div className='container border-6 border-indigo-500 p-2'>
       <div className='group border-b-2  h-100 w-100 text-center'>
          <div className='bg-red-100'>1<img src="" alt="" /></div>
          <div className='bg-blue-100'>2<img src="" alt="" /></div>
          <div className='bg-yellow-100' >3<img src="" alt="" /></div>
          <div className='bg-green-100'>4<img src="" alt="" /></div>
        </div>
        </div>
      </>
  )
}

export default App

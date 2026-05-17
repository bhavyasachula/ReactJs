import  React  from 'react'
// import './App.css'


function App(Props) {
  const [color, setColor] = React.useState("red")

  return (
    <>
    <div className='w-full h-screen duration-100 ' style={{backgroundColor:color}}>
    <div className='fixed rounded-2xl flex gap-10 flex-wrap justify-center bottom-12 inset-x-0 px-2'>

      <button className='text-white border-b-4 bg-red-700 p-2 rounded-xl'
      onClick={()=>{
        setColor("red")
      }}>Red</button>
        <button className='text-white border-b-4 bg-blue-700 p-2 rounded-xl'
      onClick={()=>{
        setColor("blue")
      }}>blue</button>
        <button className='text-white border-b-4 bg-green-700 p-2 rounded-xl'
      onClick={()=>{
        setColor("green")
      }}>green</button>
      <button className='text-white border-b-4 bg-black p-2 rounded-xl'
      onClick={()=>{
        setColor("black")
      }}>black</button>
      <button className=' text-white border-b-4 bg-purple-700 p-2 rounded-xl'
      onClick={()=>{
        setColor("purple")
      }}>purple</button>
      </div>
    </div>
    </>
  )
}

export default App

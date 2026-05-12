import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function DisplaySM(){
      return(
            <a href='https://www.google.com' target='_blank'>Visit googlee</a>
      )
}
const reactElement = (<h1>baapo ka baap bhavya</h1>)
createRoot(document.getElementById('root')).render(
      <div>
      <DisplaySM/>
      <br/>
      reactElement
      </div>
      
)

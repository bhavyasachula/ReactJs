import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function DisplaySM(){
      return(
            <a href='http://zapp.wuaze.com' target='_blank'>Visit My website</a>
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

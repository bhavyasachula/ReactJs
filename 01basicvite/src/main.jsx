import  React  from 'react'
import  { createRoot }  from 'react-dom/client'
import App from './App.jsx'
function DisplaySM(){
      return(
            <div>
            <h1>baapo ka baap bhavya</h1>
            <a href='http://zapp.wuaze.com' target='_blank'>Visit My website</a>
            </div>
      )
}
const ReactElement = (<h1>baapo ka baap bhavya</h1>)
const ReactELemFromReact = React.createElement("a",
      {
            href:"http://zapp.wuaze.com",
            target:"_blank"
      },
      "My website"
)

createRoot(document.getElementById('root')).render(
      
      ReactELemFromReact
     
)

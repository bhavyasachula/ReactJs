import  React from 'react'
import ReactDOMClient from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

ReactDOMClient.createRoot(document.getElementById('root')).render(
    <App username="hello" />
)
 
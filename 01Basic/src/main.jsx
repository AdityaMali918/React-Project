import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'

const reactElement = React.createElement(
  'a',
  {href:"https://www.google.com",
    target:"_blank"
  },
  'Click it'
)

const anotherElement = (
  <a href="https://www.google.com/" target='_blank'>Google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  //   anotherElement
 // reactElement //In the end it is converting in the object
)

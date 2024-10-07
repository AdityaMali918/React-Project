import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    card_name:"Mountains",
    description:"Beauty and danger lies side by side",
    caption:["#travel","#adventure","#nature"]
}

let myArray = [1,2,3]

  return (
    <>
    <Card someObj ={myObj}/>
    </>
  )
}

export default App

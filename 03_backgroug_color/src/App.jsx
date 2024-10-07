import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(["Red","Yellow","Black"])

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <div>
      {count.map((item,index)=>(
        <button className={`text-xl font-bold underline flex flex-row border-2 border-black rounded-lg p-4 m-5 bg-${item.toLowerCase}`} key={index}>{item}</button>
      ))}
    </div>
    </>
  )
}

export default App

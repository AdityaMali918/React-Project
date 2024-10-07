import { useState } from 'react'
import './App.css'

function App() {

  let arr =["Red","Yellow","Black","Violet","Pink","Olive",""]
  const [count, setCount] = useState(arr)

  function bgColor(col){
    document.body.style.background = col;
  }

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <div className='h-max'>
      {count.map((item,index)=>(
        <button className="text-xl text-white font-bold underline flex flex-row border-2  rounded-lg p-4 m-5"
         onClick={()=>bgColor(item.toLowerCase())} 
         style= {{background:item.toLowerCase() , border:`2px solid ${item.toLowerCase()}`}} 
         key={index}>{item}</button>
      ))}
    </div>
    </>
  )
}

export default App

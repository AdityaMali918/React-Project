import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addOne = ()=>{
    if (!(20<=count)) {
      setCount(count+1);
      console.log(count)
    }
  }

  const subOne = ()=>{
    if (count>0) {
      setCount(count-1);
      console.log(count);
    }
    
  }

  return (
    <>
     <div>Count : {count}</div>
     <button onClick={addOne}>Add</button>
     <br />
     <button onClick={subOne}>Subtract</button>
    </>
  )
}

export default App

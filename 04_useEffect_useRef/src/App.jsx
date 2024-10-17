import { useCallback, useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);
  const [password,setPassword] = useState("");

  const passRef = useRef(null)

  const passwordGenerator = useCallback(function(){

    let pass="";
    let str = "abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(character) str+="{}()[]_&@#!";
    if(number) str+="123456789";
    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random()*str.length);
      pass+=str.charAt(randomNum);
    }

    setPassword(pass);
  },[length,number,character])

  useEffect(()=>{
    passwordGenerator();
  },[length,number,character,setPassword])

  const copyPasswordOnClib = useCallback(()=>{
    passRef.current.select();
    passRef.current.
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className='bg-black text-white flex flex-col  rounded-xl '>
        
        <div className='flex-col items-center'>
          <div className='flex-row p-5 m-3'>
            <input type="text" name="" id="" 
            className="text-black" 
            value={password} 
            readOnly
            placeholder='password'
            ref={passRef}
            />
            <button 
            className='bg-blue-500 px-2  rounded-r-lg hover:bg-blue-600'
            onClick={copyPasswordOnClib}
            >copy</button>
            <div className='flex-col'>
           <label className=' w-32'>Length({length})</label>
           <input type="range" min={6} max={100} name="" id="" className='mt-4 ' onChange={(e)=>{setLength(e.target.value)}} />
           </div>
          </div>
          <div className='flex-row'>

            <input type="checkbox" name="adw" id="" className='mx-3 my-1' onChange={(e)=>{setNumber((prev)=>!prev)}}/>Number
            <input type="checkbox" name="adw" id="" className='mx-3 my-1 rounded-lg' onChange={(e)=>{setCharacter((prev)=>!prev)}}/>Special Character
          </div>
        </div>
      </div>
    </>
  )
}

export default App

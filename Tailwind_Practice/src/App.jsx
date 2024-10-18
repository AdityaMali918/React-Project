import { useState } from 'react'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App

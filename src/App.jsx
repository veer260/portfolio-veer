import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>This is a message from the <span>future</span> </p>
      <div className='main'> 
        <p>Ever since I started working with WebGL and shaders, I</p>
      </div>
  
    </>
  )
}

export default App;

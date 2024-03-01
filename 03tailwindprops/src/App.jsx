import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='group'>
    <h1 className='text-3xl bg-green-500 p-3 group-hover:rounded-md' >Vite with tailwind</h1>
    </div>
    <Card username='Anand' post = "Developer"/>
    <Card username='json' post='staff Engg'/>
    <Card/>
    </>
  )
}

export default App

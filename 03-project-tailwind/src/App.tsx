import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center h-svh w-svw'>
        <h1 className='text-4xl mb-5 '>Contador</h1>
        <Counter />
        React Counter

      </div>
    </>
  )
}

export default App

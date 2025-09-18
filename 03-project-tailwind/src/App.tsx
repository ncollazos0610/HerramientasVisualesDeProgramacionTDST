import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'

function App() {

  return (
    <>
    <div>
      <h1>
    <Counter/>
    React Counter
      </h1>
    </div>
    </>
  )
}

export default App

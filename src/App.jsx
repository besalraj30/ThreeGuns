import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Gun from './components/Gun'

function App() {

  return (
    <div className='fire-field'>
      <Gun />
      <Gun gunType ={"debounce"}/>
      <Gun gunType ={"throttle"}/>
    </div>
  )
}

export default App

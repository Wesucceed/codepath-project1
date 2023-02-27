import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Players from './components/Players.jsx'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Football Goats</h1>
      <h2>Best footballers of all time</h2>
      <Players />
    </div>

  )
}

export default App

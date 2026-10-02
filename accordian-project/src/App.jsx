import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header title="My Accordian" />

      
    </div>
  )
}

export default App

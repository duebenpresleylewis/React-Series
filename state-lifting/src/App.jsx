import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  // create state
  // manage state
  // change State
  // sync the state among all the children

  const [name, setName] = useState('');

  return (
    <div>
      <p>this is inside parent component and current value of name is: {name}</p>
      <Card title="Card1 Data" compName = {name} changeName = {setName}/>
      <Card title="Card2 Data" compName = {name} changeName = {setName}/>
    </div>

  )
}

export default App

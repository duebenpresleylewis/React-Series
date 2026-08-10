import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);

  }

  return (
    <div className="App">
      <Button incrementCount={handleClick}>
        <h1>{count}</h1>
      </Button>











     {/* it is a higher order element, and it is used as wrapper, because of how it works and behaves */}
      {/* <Card>
        <h1>The best coder ever</h1>
        <p>Always trying to be the best</p>
        <p>React is far superior</p>
      </Card>

      <Card children={<h5>This guy works when there is no child</h5>}>
        <h1>This guy has only one child</h1>
      </Card> */}

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src="src/assets/Rectangle.png" alt="" />
      <div class="info">
        <h4>Terapia 2</h4>
        <span>Ejercicios pelvicos</span>
      </div>
    </div>
  )
}

export default App

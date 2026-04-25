import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const add = () => {
    if(count < 20)
      setCount(count + 1)
  }
  
  const remove = () => {
    if(count > 0)
      setCount(count - 1)
  }

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <p className="counter-subtitle">Basic Project 1</p>
      
      <div className="counter-display">{count}</div>
      
      <div className="button-group">
        <button 
          className="btn-add"
          onClick={add}
          disabled={count >= 20}
        >
          +
        </button>
        <button 
          className="btn-remove"
          onClick={remove}
          disabled={count <= 0}
        >
          −
        </button>
      </div>
      
      <div className="counter-info">
        <p>Range: 0 - 20</p>
        {count === 20 && <p className="max-reached">⚠️ Maximum value reached</p>}
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    if(count <20 )
      setCount(count + 1)
  }
  const remove = () => {
    if(count > 0)
      setCount(count - 1)
  }

  return (
    <>
      <h1>Basic Project 1 | Counter</h1>
      <h3>Counter Value:</h3>
      <button
        onClick={add}
      >+</button>
      <h3>{count}</h3>
      <button 
      onClick={remove}
      >-</button>
    </>
  )
}

export default App

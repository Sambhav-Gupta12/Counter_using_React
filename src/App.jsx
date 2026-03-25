import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [prevCount, setPrevCount] = useState(null)

  const incCounter = () => {
    setCount(count + 1)
    setPrevCount(count)
  }

  const decCounter = () => {
    setCount(count - 1)
    setPrevCount(count)
  }

  const resetCounter = () => {
    setCount(0)
    setPrevCount(null)
  }

  return (
    <>
      <div className="count">Counter : {count}</div>

      <div className="flex">
        <button className="btn" onClick={incCounter}>Increase Counter</button>

        <button className="btn" onClick={decCounter}>Decrease Counter</button>

        <button className="btn" onClick={resetCounter}>Reset Counter</button>
      </div>

    {prevCount !== null && (
      <div className="count">
        Previous Counter : {prevCount}
      </div>
    )}
    </>
  )
}

export default App

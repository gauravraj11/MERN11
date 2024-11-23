import React, { useState } from 'react'
import './Child.css'

export default function Child3() {
  const [count3, setCount] = useState(10);

  function Increment() {
    setCount(count3 + 5)
  }
  return (
    <div className='children'>
      <h1>Child3</h1>
      <br />
      {count3}
      <br />
      <button onClick={Increment} >Increment</button>
    </div>
  )
}

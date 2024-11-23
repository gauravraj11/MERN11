import React, { useState } from 'react'
import './Child.css'

export default function Child2() {
  const [count2, setCount] = useState(10);

  function Increment() {
    setCount(count2 + 5)
  }
  return (
    <div className='children'>
      <h1>Child2</h1>
      <br />
      {count2}
      <br />
      <button onClick={Increment} >Increment</button>
    </div>
  )
}

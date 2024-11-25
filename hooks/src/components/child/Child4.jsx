import React, { useState,useEffect } from 'react'
import './Child.css'

export default function Child4() {
  const [count, setCount] = useState(10);

  console.log("child4******........");
  
  function Increment() {
    setCount(count + 5)
  }
 
  return (
    <div className='children'>
      <h1>Child4</h1>
      <br />
      {count}
      <br />
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

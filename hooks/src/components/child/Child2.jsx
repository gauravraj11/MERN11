import React, { useState, useEffect, memo } from 'react'
import './Child.css'

 function Child2(props) {
  const [count2, setCount] = useState(10);

  console.log("child2............");

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

export default memo(Child2)
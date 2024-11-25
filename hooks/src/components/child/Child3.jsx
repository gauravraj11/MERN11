import React, { useState,useEffect ,memo } from 'react'
import './Child.css'

 function Child3() {
  const [count3, setCount] = useState(10);

  console.log("child3***........");

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

export default memo(Child3)
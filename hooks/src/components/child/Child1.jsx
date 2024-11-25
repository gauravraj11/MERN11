import React, { useState, useEffect } from 'react'
import './Child.css'
export default function Child1(props) {
  const[count, setCount] = useState(10);
  const [bgColor, setBgColor] = useState('green'); // Default background color

  console.log("child1........");
  
  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;  
    setBgColor(randomColor);
  };
  function Increment(){
    setCount(count+5)
  }
 // Change background color on every render
 useEffect(() => {
  generateRandomColor();
  
}, [count]); // Dependency array ensures it runs when 'count' changes

  return (
    <div className='children' style={{ backgroundColor: bgColor }}>
      <h1>Child1</h1>
      <br />
      {props.Increment}
      {count}
      <br />
      <button onClick={Increment} >Increment</button>
    </div>
  )
}

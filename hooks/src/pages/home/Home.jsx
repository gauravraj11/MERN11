import React ,{useState, useEffect} from 'react'
import './Home.css'
import Child1 from '../../components/child/Child1'
import Child2 from '../../components/child/Child2'
import Child3 from '../../components/child/Child3'
import Child4 from '../../components/child/Child4'
import { useCallback } from 'react'

export default function Home() {
  const [count, setCount] = useState(10);
  const [count1, setCount1] = useState(10);

  console.log("Home Re-render.....");
  
  function Increment1(){
    setCount1(count1+7);
  }
  function Increment(){
    setCount1(count+7);
  }

  const abc = useCallback(Increment,[])
  return (
    <div className='home'>
        <Child1 />
        <Child2 count={count} increment={abc}/>
        <Child3 />
        <Child4 />
        <br />
        {count1}
        <br /><br />
        <button onClick={Increment1}>Home Click</button>
    </div>
  )
}

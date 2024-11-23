import React from 'react'
import './Home.css'
import Child1 from '../../components/child/Child1'
import Child2 from '../../components/child/Child2'
import Child3 from '../../components/child/Child3'
import Child4 from '../../components/child/Child4'
export default function Home() {
  return (
    <div className='home'>
        <Child1/>
        <Child2/>
        <Child3/>
        <Child4/>
    </div>
  )
}

import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Navbar from './components/navbar/Navbar'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        </Route>
      </Routes>
    </Router>
    </>
    
  )
}

export default App
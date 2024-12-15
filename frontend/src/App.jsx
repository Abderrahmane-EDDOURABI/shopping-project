import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Index from './router/Index'

function App() {

  return (
    <>
      <Navbar/>
        <main>
          <Index/>
        </main>
      <Footer/>
    </>
  )
}

export default App

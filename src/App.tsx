import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AdvancedStat from './components/AdvancedStat'
import Boost from './components/Boost'
import Footer from './components/Footer'

function App() {

  return (
    <main>
      <header>
        <Navbar />
      </header>
        <Hero />
        <AdvancedStat />
        <Boost />
        <Footer/>
    </main>
  )
}

export default App

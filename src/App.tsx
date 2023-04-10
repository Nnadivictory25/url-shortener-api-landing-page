import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AdvancedStat from './components/AdvancedStat'

function App() {

  return (
    <main className=''>
      <header>
        <Navbar />
        <Hero />
        <AdvancedStat />
      </header>
    </main>
  )
}

export default App

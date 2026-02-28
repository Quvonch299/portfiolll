import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Server from './components/server'
import Section1 from './components/section1'
import Section2 from './components/section2'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Server/>
      <Section1/>
      <Section2/>
    </div>
  )
}

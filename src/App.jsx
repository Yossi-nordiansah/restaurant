import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
    </>
  )
}

export default App

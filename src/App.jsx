import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <AppStore/>
    </>
  )
}

export default App

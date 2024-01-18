import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import "aos/dist/aos.css";
import AOS from 'aos';

function App() {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:500,
      easing: "ease-in-sine",
      delay:100
    });
    AOS.refresh()
  },[])

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App

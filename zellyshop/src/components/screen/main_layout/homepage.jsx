
import AppBar from './components/AppBar/AppBar.jsx'
import Hero from './components/screen/Home/HeroSection/Hero.jsx'
import './components/AppBar/AppBar.css'
import './App.css'

function Homepage() {

  return (
    <div className='component-container'>
      <AppBar/>
      <Hero/>
     </div>
  )
}

export default Homepage

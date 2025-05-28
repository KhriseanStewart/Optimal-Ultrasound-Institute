
import AppBar from './components/AppBar/AppBar.jsx'
import Hero from './components/screen/Home/HeroSection/Hero.jsx'
import Services from './components/screen/Home/Services/Services.jsx'
import Walkin from './components/screen/Home/walkins/Walkin.jsx'
import './components/AppBar/AppBar.css'
import './App.css'

function App() {

  return (
    <div className='component-container'>
      <AppBar/>
      <Hero/>
      <Services/>
      <Walkin/>
     </div>
  )
}

export default App

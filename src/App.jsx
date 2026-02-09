import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx' // Importamos el Hero
import Actividades from './Actividades.jsx'
import About from './About.jsx'
import Filosofia from './Filosofia.jsx'
import DojoKun from './DojoKun.jsx'
import Horario from './Horario.jsx'
import ContactoBanner from './ContactoBanner.jsx'
import Footer from './Footer.jsx'
import Katas from './Katas.jsx'
import Wigdet from './Wigdet.jsx'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Hero /> 
      <Actividades/>
      <About/>
      <Filosofia/>
      <DojoKun/>
      <Katas/>
      <Wigdet/>
      <Horario/>
      <ContactoBanner/>
      <Footer/>
      
      {/* El resto de tu contenido aquí */}
    </>
  )
}
export default App;

import './App.css'
import AboutUs from './components/Aboutus'
import ConstructionInfo from './components/Constructioninfo'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Stats from './components/Stats'
import Form from './components/Form'
import Testimonials from './components/Testimonials'
import ProjectComponent from './components/Project'
import SevicesComponent from './components/Services'
import ProductsComponent from './components/Products'
import OurVision from './components/OurVision'
import OurMission from './components/OurMission'
import Gallery from './components/Gallery'
import TeamMembers from './components/TeamMembers'
import OurClients from './components/OurClients'
import OfficeLocations from './components/OfficeLocations'
import IndiaMap from './components/Indiamap'


function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <OurVision/>
    <OurMission/>
    <ConstructionInfo/>
    <ProjectComponent/>
    <SevicesComponent/>
    <ProductsComponent/>
    <Gallery/>
    <TeamMembers/>
    <Testimonials/>
    <OurClients/>
    <Stats/>
    <Form/>
    <IndiaMap/>
    <OfficeLocations/>
    <Footer/>
    </>
  )
}

export default App

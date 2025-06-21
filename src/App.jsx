import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import InfiniteSlider from "./components/Testimonials"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Proccess from "./components/Proccess"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-primary scroll-smooth overflow-x-clip">

    <Navbar/>
    <section id="home">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>
    
    <section id="services">
      <Services/>
    </section>
    
    <section id="process">
      <Proccess/>
    </section>
    <section id="portfolio">
      <Portfolio/>
    </section>
    <section id="testimonials">
    <Testimonials/>
    </section>

    <section id="contact">
      <Contact/>
    </section>

    <section >
      <Footer/>
    </section>

    

    </div>
  )
}

export default App

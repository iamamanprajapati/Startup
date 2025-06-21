import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Proccess from "./components/Proccess"
import Services from "./components/Services"

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

    <section id="contact">
      <Contact/>
    </section>

      {/*<section id="proccess" className="h-screen bg-gray-400">Process Section</section>
      <section id="contact" className="h-screen bg-gray-500">Contact Section</section> */}

    </div>
  )
}

export default App

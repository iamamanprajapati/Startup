import About from "./components/About"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {

  return (
    <div className="bg-primary scroll-smooth">

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
      <section id="portfolio" className="h-screen bg-gray-300">Portfolio Section</section>
      <section id="proccess" className="h-screen bg-gray-400">Process Section</section>
      <section id="contact" className="h-screen bg-gray-500">Contact Section</section>

    </div>
  )
}

export default App

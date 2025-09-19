import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Proccess from "./components/Proccess"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom"
import Dashboard from "./admin/Dashboard"

function App() {

  return (
    <div className="bg-primary scroll-smooth overflow-x-clip">
    <ToastContainer/>
    
    <Routes>
   <Route path="/" element={
    <>
      <Navbar/>
      <section id="home"><Header /></section>
      <section id="about"><About /></section>
      <section id="services"><Services/></section>
      <section id="process"><Proccess/></section>
      <section id="portfolio"><Portfolio/></section>
      <section id="testimonials"><Testimonials/></section>
      <section id="contact"><Contact/></section>
      <section><Footer/></section>
    </>
  } />

  <Route path="/admin/mukul" element={<Dashboard />} />
</Routes>

    

    </div>
  )
}

export default App

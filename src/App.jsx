import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import HowMarTechAddaWorks from './components/HowMarTechAddaWorks'
import WhyThisWorks from './components/WhyThisWorks'
import ContactUs from './components/ContactUs'
import ServiceExpert from './components/ServiceExpert'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowMarTechAddaWorks />} />
            <Route path="/why-this-works" element={<WhyThisWorks />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/service-expert-register" element={<ServiceExpert />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

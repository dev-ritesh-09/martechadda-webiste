import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="logo-link">
            <span className="logo-text">MarTechAdda</span>
            <span className="logo-subtitle">Authorized Partner</span>
          </a>
        </div>

        <div className="navbar-actions">
          <button className="btn-primary-nav">Register Now</button>
          <button className="btn-secondary-nav">Partner Login</button>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button className="mobile-btn-primary">Register Now</button>
          <button className="mobile-btn-secondary">Partner Login</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar

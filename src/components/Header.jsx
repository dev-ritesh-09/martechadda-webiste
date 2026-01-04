import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './ui/Button'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoSection}>
          <Link to="/" className={styles.logoLink}>
            <h1 className={styles.logoText}>MarTechAdda</h1>
          </Link>
        </div>
        
        <nav className={styles.navCenter}>
          <Link 
            to="/how-it-works" 
            className={`${styles.navLink} ${isActive('/how-it-works') ? styles.active : ''}`}
          >
            How It Works
          </Link>
          <Link 
            to="/why-this-works" 
            className={`${styles.navLink} ${isActive('/why-this-works') ? styles.active : ''}`}
          >
            Why This Works
          </Link>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
          >
            Contact
          </Link>
          <Link 
            to="/service-expert-register" 
            className={`${styles.navLink} ${isActive('/service-expert-register') ? styles.active : ''}`}
          >
            For Experts
          </Link>
        </nav>

        <div className={styles.navRight}>
          <Button variant="primary" size="sm" className={styles.ctaButton}>
            Find Experts
          </Button>
          <Button variant="outline" size="sm" className={styles.ctaButton}>
            Showcase Expertise
          </Button>
          <Link to="#login" className={styles.loginLink}>Login</Link>
          
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link 
            to="/how-it-works" 
            className={`${styles.mobileNavLink} ${isActive('/how-it-works') ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            to="/why-this-works" 
            className={`${styles.mobileNavLink} ${isActive('/why-this-works') ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Why This Works
          </Link>
          <Link 
            to="/about" 
            className={`${styles.mobileNavLink} ${isActive('/about') ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${styles.mobileNavLink} ${isActive('/contact') ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/service-expert-register" 
            className={`${styles.mobileNavLink} ${isActive('/service-expert-register') ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            For Experts
          </Link>
          <div className={styles.mobileCTAs}>
            <Button variant="primary" size="md" className={styles.mobileButton}>
              Find Experts
            </Button>
            <Button variant="outline" size="md" className={styles.mobileButton}>
              Showcase Expertise
            </Button>
            <Link to="#login" className={styles.mobileLoginLink}>Login</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

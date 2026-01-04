import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          {/* Brand & Tagline Column */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>MarTechAdda</h3>
            <p className={styles.footerTagline}>
              A neutral, marketing-only platform connecting businesses with verified marketing experts. No paid rankings, ever.
            </p>
            <p className={styles.footerSubTagline}>
              Built for transparent marketing hiring decisions.
            </p>
            <div className={styles.footerSocial}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/how-it-works" className={styles.footerLink}>How It Works</Link></li>
              <li><Link to="/contact" className={styles.footerLink}>FAQs</Link></li>
              <li><Link to="/contact" className={styles.footerLink}>Help</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Legal</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Contact</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/contact" className={styles.footerLink}>Get in Touch</Link></li>
              <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © 2025 MarTechAdda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

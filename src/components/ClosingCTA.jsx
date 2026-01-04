import React from 'react'
import { FiSearch, FiUser } from 'react-icons/fi'
import { HandshakeIcon } from './Icons'
import Button from './ui/Button'
import styles from './ClosingCTA.module.css'

const ClosingCTA = () => {
  return (
    <section className={styles.closingCTA}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.illustrationCard}>
        <HandshakeIcon className={styles.handshakeIcon} />
      </div>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          Ready to make your next marketing hire a confident one?
        </h2>
        <p className={styles.subtitle}>
          Join businesses and experts on MarTechAdda for transparent, merit-based marketing connections.
        </p>
        <div className={styles.buttonGroup}>
          <Button variant="primary" size="lg" className={styles.ctaButton}>
            <FiSearch className={styles.buttonIcon} />
            Find Marketing Experts
          </Button>
          <Button variant="outline" size="lg" className={styles.ctaButton}>
            <FiUser className={styles.buttonIcon} />
            Showcase Your Expertise
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ClosingCTA

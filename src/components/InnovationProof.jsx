import React from 'react'
import { FiUsers, FiLayers, FiShield, FiAward } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import styles from './InnovationProof.module.css'

const InnovationProof = () => {
  const stats = [
    {
      number: '500+',
      label: 'Verified Experts',
      icon: FiUsers,
      description: 'Only verified marketing professionals',
      badge: 'Trust'
    },
    {
      number: 'No',
      label: 'Paid Rankings',
      icon: FiShield,
      description: 'Merit-based discovery only',
      highlight: true,
      badge: 'Neutrality'
    },
    {
      number: '100%',
      label: 'Neutral Facilitator',
      icon: FiAward,
      description: 'Not an agency, just a platform',
      badge: 'Integrity'
    },
    {
      number: 'Marketing',
      label: 'Only Focus',
      icon: FiLayers,
      description: 'Exclusively for marketing expertise',
      badge: 'Focus'
    }
  ]

  return (
    <SectionWrapper sectionType="stats-strip">
      <section className={styles.innovationProof}>
        <div className={styles.statsBackgroundGradient}></div>
        <div className={`container ${styles.container}`}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            const theme = index % 2 === 0 ? 'green' : 'orange'
            return (
              <div key={index} className={`${styles.statBlock} ${styles[`theme-${theme}`]}`}>
                {stat.badge && (
                  <div className={styles.statBadge}>{stat.badge}</div>
                )}
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.statIcon} />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  {stat.description && (
                    <div className={styles.statDescription}>{stat.description}</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      </section>
    </SectionWrapper>
  )
}

export default InnovationProof

import React from 'react'
import { FiBriefcase, FiBarChart2, FiUser, FiStar, FiCheckCircle } from 'react-icons/fi'
import Button from './ui/Button'
import SectionWrapper from './SectionWrapper'
import styles from './DualRolePathways.module.css'

// Reusable AudienceCard component
export const AudienceCard = ({ 
  label, 
  labelColor, 
  icon: Icon, 
  title, 
  bullets, 
  ctaText, 
  ctaVariant,
  theme 
}) => {
  return (
    <div className={`${styles.audienceCard} ${styles[`theme-${theme}`]}`}>
      <div className={styles.labelChip} data-color={labelColor}>
        {label}
      </div>
      
      <div className={styles.iconContainer}>
        <Icon className={styles.mainIcon} />
      </div>
      
      <h2 className={styles.cardTitle}>{title}</h2>
      
      <ul className={styles.bulletList}>
        {bullets.map((bullet, index) => (
          <li key={index} className={styles.bulletItem}>
            <FiCheckCircle className={styles.checkIcon} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={ctaVariant} 
        size="lg" 
        className={styles.ctaButton}
      >
        {ctaText}
      </Button>
    </div>
  )
}

const DualRolePathways = () => {
  const businessBullets = [
    'Verify marketing experts',
    'Connect and align with confidence',
    'No paid featured rankings'
  ]

  const expertBullets = [
    'Create verified profile',
    'Get discovered by relevance',
    'Work on aligned projects'
  ]

  return (
    <SectionWrapper sectionType="dual-pathways">
      <section className={styles.dualPaths}>
        <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <AudienceCard
            label="Service Seekers"
            labelColor="orange"
            icon={FiBriefcase}
            title="For Businesses"
            bullets={businessBullets}
            ctaText="Find Marketing Experts"
            ctaVariant="primary"
            theme="orange"
          />
          
          <AudienceCard
            label="Service Providers"
            labelColor="green"
            icon={FiUser}
            title="For Marketing Experts"
            bullets={expertBullets}
            ctaText="Showcase Your Expertise"
            ctaVariant="secondary"
            theme="green"
          />
        </div>
      </div>
      </section>
    </SectionWrapper>
  )
}

export default DualRolePathways

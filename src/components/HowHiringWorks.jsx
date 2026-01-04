import React from 'react'
import { FiSearch, FiMessageCircle, FiFileText, FiBriefcase } from 'react-icons/fi'
import { HandshakeIcon } from './Icons'
import styles from './HowHiringWorks.module.css'

// Reusable ProcessStep component
export const ProcessStep = ({ stepNumber, title, description, icon: Icon, isActive = false, isFirst = false, isLast = false, showConnector = false }) => {
  return (
    <>
      <div className={styles.step}>
        <div className={styles.stepBadge}>Step {stepNumber}</div>
        <div className={`${styles.stepCircle} ${isActive ? styles.active : ''} ${isFirst ? styles.first : ''}`}>
          <Icon className={styles.stepIcon} />
        </div>
        <div className={styles.stepContent}>
          <h3 className={styles.stepTitle}>{title}</h3>
          <p className={styles.stepDescription}>{description}</p>
        </div>
      </div>
      {showConnector && <div className={styles.connector}></div>}
    </>
  )
}

const HowHiringWorks = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Search',
      description: 'Search with guided filters',
      icon: FiSearch,
      isActive: true
    },
    {
      stepNumber: 2,
      title: 'Connect',
      description: 'Connect before structured conversations',
      icon: FiMessageCircle,
      isActive: false
    },
    {
      stepNumber: 3,
      title: 'Align',
      description: 'Align scope & expectations through structured discussions',
      icon: FiFileText,
      isActive: false
    },
    {
      stepNumber: 4,
      title: 'Hire',
      description: 'Hire with confidence',
      icon: HandshakeIcon,
      isActive: false
    }
  ]

  return (
    <section className={styles.howHiringWorks}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <div className={styles.titleIcon}>
              <FiBriefcase className={styles.titleIconSvg} />
            </div>
            <h2 className={styles.sectionTitle}>How Hiring Works</h2>
          </div>
          <p className={styles.sectionSubtitle}>A simple 4-step process from discovery to decision</p>
        </div>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isActive={step.isActive}
              isFirst={index === 0}
              isLast={index === steps.length - 1}
              showConnector={index < steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowHiringWorks

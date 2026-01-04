import React from 'react'
import { FiAlertCircle, FiClock, FiEye } from 'react-icons/fi'
import Card from './ui/Card'
import SectionWrapper from './SectionWrapper'
import styles from './Problem.module.css'

const Problem = () => {
  const problems = [
    {
      title: 'Hard to find relevant expertise',
      description: 'Marketing specialists are buried inside generic platforms that weren\'t built for marketing discovery.',
      icon: FiAlertCircle
    },
    {
      title: 'RFPs delay real conversations',
      description: 'Time is spent on pitches and paperwork before meaningful alignment even begins.',
      icon: FiClock
    },
    {
      title: 'Clarity comes too late',
      description: 'Capability, scope, and fit often become clear only after decisions are already made.',
      icon: FiEye
    }
  ]

  return (
    <SectionWrapper sectionType="problem-cards">
      <section className={styles.problem}>
        <div className={styles.problemBackgroundPattern}></div>
        <div className={`container ${styles.container}`}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <FiAlertCircle className={styles.titleIconSvg} />
          </div>
          <h2 className={styles.title}>Why hiring marketing services is broken today</h2>
        </div>
        <div className={styles.grid}>
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <React.Fragment key={index}>
                <Card variant="flat" className={styles.problemCard}>
                  <div className={styles.cardConnector}></div>
                  <div className={styles.iconWrapper}>
                    <IconComponent className={styles.problemIcon} />
                  </div>
                  <h3 className={styles.problemTitle}>{problem.title}</h3>
                  <p className={styles.problemDescription}>{problem.description}</p>
                </Card>
                {index < problems.length - 1 && (
                  <div className={styles.gridConnector}></div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
      </section>
    </SectionWrapper>
  )
}

export default Problem

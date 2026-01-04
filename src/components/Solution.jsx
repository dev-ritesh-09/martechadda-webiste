import React from 'react'
import { FiShield, FiAward, FiCheckCircle, FiMessageSquare, FiTool } from 'react-icons/fi'
import styles from './Solution.module.css'

// Reusable SolutionCard component
export const SolutionCard = ({ title, description, icon: Icon, theme = 'orange' }) => {
  return (
    <div className={`${styles.solutionCard} ${styles[`theme-${theme}`]}`}>
      <div className={styles.iconCircle}>
        <Icon className={styles.solutionIcon} />
      </div>
      <h3 className={styles.solutionTitle}>{title}</h3>
      <div className={styles.titleConnector}></div>
      <p className={styles.solutionDescription}>{description}</p>
    </div>
  )
}

const Solution = () => {
  const solutions = [
    {
      title: 'Neutral, marketing-only platform',
      description: 'Built exclusively for marketing expertise discovery, without generic marketplace noise',
      icon: FiShield,
      theme: 'orange'
    },
    {
      title: 'Merit-based discovery',
      description: 'No paid rankings. Experts discovered based on relevance and verification',
      icon: FiAward,
      theme: 'green'
    },
    {
      title: 'Verified experts & transparent profiles',
      description: 'Every expert verified with transparent proof of expertise and clear profiles',
      icon: FiCheckCircle,
      theme: 'orange'
    },
    {
      title: 'Guided alignment before hiring',
      description: 'Guided conversations before scope alignment before decisions are made',
      icon: FiMessageSquare,
      theme: 'green'
    }
  ]

  return (
    <section className={styles.solution}>
      <div className={`container ${styles.container}`}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <FiTool className={styles.titleIconSvg} />
          </div>
          <h2 className={styles.title}>How MarTechAdda fixes this</h2>
        </div>
        
        <div className={styles.grid}>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              theme={solution.theme}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution

import React from 'react'
import { FiPackage, FiClock, FiEye, FiFlag, FiTarget, FiFileText, FiBriefcase, FiUsers } from 'react-icons/fi'
import { MegaphoneIcon } from './Icons'
import Card from './ui/Card'
import Button from './ui/Button'
import Chip from './ui/Chip'
import SectionWrapper from './SectionWrapper'
import styles from './WhyThisWorks.module.css'

const WhyThisWorks = () => {
  const structuralIssues = [
    {
      title: 'Marketing as commodity',
      description: 'Marketing expertise is often reduced to generic categories and price comparisons, ignoring the nuanced skills and approaches that make experts effective.',
      icon: FiPackage
    },
    {
      title: 'RFPs delay alignment',
      description: 'Traditional RFP processes prioritize paperwork over conversations, delaying the alignment that should happen before commitments are made.',
      icon: FiClock
    },
    {
      title: 'Transparency comes too late',
      description: 'Critical information about capability, approach, and fit often becomes clear only after decisions are made, leading to mismatched partnerships.',
      icon: FiEye
    }
  ]

  const expertiseAreas = [
    { name: 'Branding', icon: FiFlag },
    { name: 'Strategic Marketing', icon: FiTarget },
    { name: 'Advertising', icon: MegaphoneIcon },
    { name: 'Collateral', icon: FiFileText }
  ]

  const whoItsFor = {
    businesses: [
      'Businesses seeking specific marketing expertise',
      'Teams tired of generic marketplace experiences',
      'Organizations wanting clarity before commitment'
    ],
    experts: [
      'Marketing professionals seeking quality clients',
      'Experts tired of competing on price alone',
      'Professionals wanting meaningful conversations'
    ]
  }

  return (
    <div className={styles.whyThisWorks}>
      {/* Hero Block */}
      <SectionWrapper sectionType="why-this-works-hero">
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <svg className={styles.decisionFlow} viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            {/* Decision flow nodes and branches - subtle background illustration */}
            <defs>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-orange)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--color-orange)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Top row nodes */}
            <circle cx="200" cy="100" r="6" fill="var(--color-grey-300)" opacity="0.3" />
            <circle cx="400" cy="80" r="6" fill="var(--color-grey-300)" opacity="0.3" />
            <circle cx="600" cy="120" r="8" fill="var(--color-orange)" opacity="0.25" />
            <circle cx="800" cy="90" r="6" fill="var(--color-grey-300)" opacity="0.3" />
            <circle cx="1000" cy="110" r="6" fill="var(--color-grey-300)" opacity="0.3" />
            {/* Bottom row nodes */}
            <circle cx="300" cy="250" r="8" fill="var(--color-orange)" opacity="0.25" />
            <circle cx="500" cy="280" r="6" fill="var(--color-grey-300)" opacity="0.3" />
            <circle cx="700" cy="260" r="8" fill="var(--color-orange)" opacity="0.25" />
            <circle cx="900" cy="270" r="6" fill="var(--color-grey-300)" opacity="0.3" />
            {/* Connecting lines - decision flow paths */}
            <line x1="200" y1="100" x2="300" y2="250" stroke="var(--color-grey-300)" strokeWidth="1.5" opacity="0.15" />
            <line x1="400" y1="80" x2="500" y2="280" stroke="var(--color-grey-300)" strokeWidth="1.5" opacity="0.15" />
            <line x1="600" y1="120" x2="700" y2="260" stroke="var(--color-orange)" strokeWidth="2" opacity="0.25" />
            <line x1="800" y1="90" x2="900" y2="270" stroke="var(--color-grey-300)" strokeWidth="1.5" opacity="0.15" />
            <line x1="200" y1="100" x2="400" y2="80" stroke="var(--color-grey-300)" strokeWidth="1.5" opacity="0.15" />
            <line x1="400" y1="80" x2="600" y2="120" stroke="var(--color-grey-300)" strokeWidth="1.5" opacity="0.15" />
            <line x1="600" y1="120" x2="800" y2="90" stroke="var(--color-orange)" strokeWidth="2" opacity="0.25" />
            <line x1="800" y1="90" x2="1000" y2="110" stroke="var(--color-grey-300)" strokeWidth="1.5" opacity="0.15" />
            <line x1="300" y1="250" x2="500" y2="280" stroke="var(--color-orange)" strokeWidth="2" opacity="0.25" />
            <line x1="500" y1="280" x2="700" y2="260" stroke="var(--color-grey-300)" strokeWidth="1.5" opacity="0.15" />
            <line x1="700" y1="260" x2="900" y2="270" stroke="var(--color-grey-300)" strokeWidth="1.5" opacity="0.15" />
          </svg>
        </div>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.heroTitle}>
            The problem isn't marketing talent. It's how hiring decisions are made.
          </h1>
        </div>
        </section>
      </SectionWrapper>

      {/* Core Insight Section */}
      <SectionWrapper sectionType="core-insight">
        <section className={styles.coreInsightSection}>
          <div className={`container ${styles.container}`}>
          <div className={styles.coreInsightGrid}>
            <div className={styles.insightText}>
              <p className={styles.insightParagraph}>
                The current hiring ecosystem has fundamental flaws that make finding the right 
                marketing expert unnecessarily difficult. These aren't problems with talent—they're 
                problems with how discovery and hiring processes work.
              </p>
              <p className={styles.insightParagraph}>
                MarTechAdda addresses these structural issues by creating a neutral, 
                marketing-only platform where merit-based discovery, early alignment, and 
                transparency are built into the process from the start.
              </p>
            </div>
            <div className={styles.comparisonCardWrapper}>
              <Card className={styles.comparisonCard}>
                <h3 className={styles.comparisonTitle}>Old way vs New way</h3>
                <div className={styles.comparisonGrid}>
                  <div className={styles.comparisonColumn}>
                    <div className={styles.comparisonLabel}>RFP-heavy</div>
                    <ul className={styles.comparisonList}>
                      <li>Paperwork first</li>
                      <li>Price-focused</li>
                      <li>Late alignment</li>
                      <li>Generic categories</li>
                    </ul>
                  </div>
                  <div className={styles.comparisonDivider}></div>
                  <div className={styles.comparisonColumn}>
                    <div className={`${styles.comparisonLabel} ${styles.comparisonLabelNew}`}>Conversation-first</div>
                    <ul className={`${styles.comparisonList} ${styles.comparisonListNew}`}>
                      <li>Early dialogue</li>
                      <li>Merit-based</li>
                      <li>Transparent upfront</li>
                      <li>Specialized matching</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        </section>
      </SectionWrapper>

      {/* Three Structural Issues */}
      <SectionWrapper sectionType="structural-issues">
        <section className={styles.issuesSection}>
          <div className={`container ${styles.container}`}>
          <h2 className={styles.sectionTitle}>Three Structural Issues</h2>
          <div className={styles.issuesGrid}>
            {structuralIssues.map((issue, index) => {
              const IconComponent = issue.icon
              return (
                <Card 
                  key={index} 
                  className={styles.issueCard}
                  variant="default"
                >
                  <div className={styles.issueIconWrapper}>
                    <IconComponent className={styles.issueIcon} />
                  </div>
                  <div className={styles.issueLabel}>{issue.title}</div>
                  <p className={styles.issueDescription}>{issue.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
        </section>
      </SectionWrapper>

      {/* Areas of Expertise */}
      <SectionWrapper sectionType="expertise-areas">
        <section className={styles.expertiseSection}>
          <div className={`container ${styles.container}`}>
          <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
          <div className={styles.expertisePills}>
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Chip key={index} className={styles.expertisePill}>
                  <IconComponent className={styles.expertisePillIcon} />
                  {area.name}
                </Chip>
              )
            })}
          </div>
        </div>
        </section>
      </SectionWrapper>

      {/* Who It's For */}
      <SectionWrapper sectionType="who-its-for">
        <section className={styles.whoSection}>
          <div className={`container ${styles.container}`}>
          <h2 className={styles.sectionTitle}>Who It's For</h2>
          <div className={styles.whoGrid}>
            <Card className={styles.whoCard}>
              <div className={styles.whoIconWrapper}>
                <FiBriefcase className={styles.whoIcon} />
              </div>
              <h3 className={styles.whoTitle}>For Businesses</h3>
              <ul className={styles.whoList}>
                {whoItsFor.businesses.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card className={styles.whoCard}>
              <div className={styles.whoIconWrapper}>
                <FiUsers className={styles.whoIcon} />
              </div>
              <h3 className={styles.whoTitle}>For Marketing Experts</h3>
              <ul className={styles.whoList}>
                {whoItsFor.experts.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
        </section>
      </SectionWrapper>

      {/* CTA Strip */}
      <SectionWrapper sectionType="why-this-works-cta">
        <section className={styles.ctaSection}>
          <div className={`container ${styles.container}`}>
          <Button variant="primary" size="lg" className={styles.ctaButton}>
            Start with a guided search
          </Button>
        </div>
        </section>
      </SectionWrapper>
    </div>
  )
}

export default WhyThisWorks

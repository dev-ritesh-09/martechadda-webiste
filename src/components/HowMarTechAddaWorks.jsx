import React, { useState } from 'react'
import { FiSearch, FiMessageCircle, FiFileText, FiCheckCircle } from 'react-icons/fi'
import Card from './ui/Card'
import Button from './ui/Button'
import { 
  HandshakeIcon, 
  UserIcon,
  TargetIcon,
  BriefcaseIcon,
  LockIcon
} from './Icons'
import styles from './HowMarTechAddaWorks.module.css'

// Lightbulb icon for insights
const LightbulbIcon = ({ className = '', width = 24, height = 24 }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8a4 4 0 0 0-4 4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2 4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 14v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Shield icon for trust
const ShieldIcon = ({ className = '', width = 24, height = 24 }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
)

// Vertical Stepper Step Component
const VerticalStep = ({ stepNumber, title, description, icon: Icon, isFilled, isGreen, label, isLast }) => {
  return (
    <>
      <div className={styles.verticalStep}>
        <div className={styles.stepCard}>
          <div className={styles.stepHeader}>
            {label && (
              <div className={styles.stepLabel}>{label}</div>
            )}
            <div className={`${styles.stepCircle} ${isFilled ? styles.filled : styles.outline} ${isGreen ? styles.green : styles.orange}`}>
              <Icon className={styles.stepIcon} />
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDescription}>{description}</p>
            </div>
          </div>
        </div>
      </div>
      {!isLast && <div className={styles.verticalConnector}></div>}
    </>
  )
}

const HowMarTechAddaWorks = () => {
  const [activeTab, setActiveTab] = useState(0)

  const businessSteps = [
    {
      stepNumber: 1,
      icon: FiSearch,
      title: 'Search with intent',
      description: 'Use filters to find experts matching specific needs',
      label: 'START',
      isFilled: true,
      isGreen: false
    },
    {
      stepNumber: 2,
      icon: FiMessageCircle,
      title: 'Connect before commit',
      description: 'Connect before making decisions',
      isFilled: false,
      isGreen: false
    },
    {
      stepNumber: 3,
      icon: FiFileText,
      title: 'Align scope & expectations',
      description: 'Align scope, expectations, timelines, deliverables',
      label: 'ALIGN',
      isFilled: false,
      isGreen: false
    },
    {
      stepNumber: 4,
      icon: FiCheckCircle,
      title: 'Hire with confidence',
      description: '',
      isFilled: true,
      isGreen: true
    }
  ]

  const expertSteps = [
    {
      stepNumber: 1,
      icon: UserIcon,
      title: 'Create focused profile',
      description: 'Build a detailed profile showcasing your expertise, experience, and approach',
      label: 'START',
      isFilled: true,
      isGreen: false
    },
    {
      stepNumber: 2,
      icon: TargetIcon,
      title: 'Get matched by relevance',
      description: 'Be discovered by businesses based on your capabilities, not advertising spend',
      isFilled: false,
      isGreen: false
    },
    {
      stepNumber: 3,
      icon: BriefcaseIcon,
      title: 'Have meaningful conversations',
      description: 'Engage in structured discussions to align on scope and expectations',
      label: 'ALIGN',
      isFilled: false,
      isGreen: false
    },
    {
      stepNumber: 4,
      icon: FiCheckCircle,
      title: 'Engage on aligned projects',
      description: 'Work on projects where requirements and fit are clear from the start',
      label: 'DECIDE',
      isFilled: true,
      isGreen: true
    }
  ]

  const trustPoints = [
    {
      icon: LockIcon,
      title: 'No Selling Services',
      description: 'We facilitate connections, not sell marketing services ourselves'
    },
    {
      icon: ShieldIcon,
      title: 'No Packages',
      description: 'We don\'t push packages or favor any particular service offering'
    },
    {
      icon: LockIcon,
      title: 'No Lead Selling',
      description: 'We don\'t sell leads or charge experts for visibility'
    }
  ]

  const businessContent = (
    <div className={styles.stepsContainer}>
      <div className={styles.verticalStepper}>
        {businessSteps.map((step, index) => (
          <VerticalStep
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            icon={step.icon}
            isFilled={step.isFilled}
            isGreen={step.isGreen}
            label={step.label}
            isLast={index === businessSteps.length - 1}
          />
        ))}
      </div>
    </div>
  )

  const expertContent = (
    <div className={styles.stepsContainer}>
      <div className={styles.verticalStepper}>
        {expertSteps.map((step, index) => (
          <VerticalStep
            key={index}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            icon={step.icon}
            isFilled={step.isFilled}
            isGreen={step.isGreen}
            label={step.label}
            isLast={index === expertSteps.length - 1}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className={styles.howItWorks}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>How It Works</h1>
          <p className={styles.heroSubtitle}>
            A simple, transparent process designed for clarity before commitment
          </p>
          <div className={styles.flowDiagram}>
            <div className={styles.flowStep}>
              <div className={styles.flowCircle}>
                <span className={styles.stepNumber}>1</span>
                <FiSearch className={styles.stepIcon} />
              </div>
              <span className={styles.flowLabel}>Search</span>
            </div>
            <div className={styles.flowConnector}></div>
            <div className={styles.flowStep}>
              <div className={styles.flowCircle}>
                <span className={styles.stepNumber}>2</span>
                <FiMessageCircle className={styles.stepIcon} />
              </div>
              <span className={styles.flowLabel}>Connect</span>
            </div>
            <div className={styles.flowConnector}></div>
            <div className={styles.flowStep}>
              <div className={styles.flowCircle}>
                <span className={styles.stepNumber}>3</span>
                <FiFileText className={styles.stepIcon} />
              </div>
              <span className={styles.flowLabel}>Align</span>
            </div>
            <div className={styles.flowConnector}></div>
            <div className={styles.flowStep}>
              <div className={styles.flowCircle}>
                <span className={styles.stepNumber}>4</span>
                <HandshakeIcon className={styles.stepIcon} />
              </div>
              <span className={styles.flowLabel}>Hire</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.tabsWrapper}>
            <div className={styles.tabControl}>
              <button
                className={`${styles.tabButton} ${activeTab === 0 ? styles.active : ''}`}
                onClick={() => setActiveTab(0)}
              >
                For Businesses
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 1 ? styles.active : ''}`}
                onClick={() => setActiveTab(1)}
              >
                For Marketing Experts
              </button>
              <div className={`${styles.tabIndicator} ${activeTab === 0 ? styles.indicatorLeft : styles.indicatorRight}`}></div>
            </div>
            <div className={styles.tabContent}>
              {activeTab === 0 ? businessContent : expertContent}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className={`container ${styles.container}`}>
          <h2 className={styles.trustTitle}>What We Don't Do</h2>
          <p className={styles.trustSubtitle}>
            Our commitment to neutrality and transparency
          </p>
          <div className={styles.trustGrid}>
            {trustPoints.map((point, index) => {
              const IconComponent = point.icon
              return (
                <Card key={index} className={styles.trustCard}>
                  <div className={styles.trustIconWrapper}>
                    <IconComponent className={styles.trustIcon} />
                  </div>
                  <h3 className={styles.trustCardTitle}>{point.title}</h3>
                  <p className={styles.trustCardDescription}>{point.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIconWrapper}>
              <LightbulbIcon className={styles.ctaIcon} />
            </div>
            <h2 className={styles.ctaTitle}>Why This Works</h2>
            <p className={styles.ctaDescription}>
              Learn more about the structural issues we're solving and why our approach makes a difference.
            </p>
            <Button 
              as="a" 
              href="/why-this-works" 
              variant="primary"
              className={styles.ctaButton}
            >
              Read the full insight
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowMarTechAddaWorks

import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiShield, 
  FiAward, 
  FiTarget, 
  FiUsers, 
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
  FiEye,
  FiSearch,
  FiArrowRight,
  FiZap,
  FiTrendingUp
} from 'react-icons/fi'
import Card from './ui/Card'
import Button from './ui/Button'
import SectionWrapper from './SectionWrapper'
import styles from './About.module.css'

const About = () => {
  const sectionRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      })
    }, observerOptions)

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  const principles = [
    {
      title: 'Merit over promotion',
      description: 'Experts are discovered based on relevance and capability, not advertising spend.',
      icon: FiAward,
      color: 'orange'
    },
    {
      title: 'Verification before visibility',
      description: 'Every expert profile is verified to ensure authenticity and quality.',
      icon: FiShield,
      color: 'green'
    },
    {
      title: 'Neutral by design',
      description: 'We facilitate connections, not sell services or push packages.',
      icon: FiTarget,
      color: 'orange'
    },
    {
      title: 'Marketing-only focus',
      description: 'Built exclusively for marketing expertise, without generic marketplace noise.',
      icon: FiZap,
      color: 'green'
    }
  ]

  const problems = [
    {
      title: 'Commoditized marketing',
      description: 'Marketing expertise gets buried in generic platforms',
      icon: FiAlertCircle
    },
    {
      title: 'RFP delays',
      description: 'Time wasted on pitches before real conversations',
      icon: FiClock
    },
    {
      title: 'Late transparency',
      description: 'Clarity arrives after decisions are made',
      icon: FiEye
    }
  ]

  const features = [
    {
      title: 'Marketing-only platform',
      description: 'Built exclusively for marketing expertise discovery, without generic marketplace noise.',
      icon: FiTarget
    },
    {
      title: 'Neutral facilitator',
      description: 'We connect businesses with experts. We don\'t sell services or push packages.',
      icon: FiShield
    },
    {
      title: 'Merit-based discovery',
      description: 'Discovery is based on relevance, expertise, and fit—not advertising spend.',
      icon: FiAward
    }
  ]

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <SectionWrapper sectionType="about-hero">
        <section className={`${styles.hero} ${styles.fadeUp}`} ref={addToRefs}>
          <div className={styles.heroBackground}></div>
          <div className={`container ${styles.container}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <div className={styles.accentLine}></div>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                  Building a neutral platform for marketing expertise
                </h1>
                <p className={styles.heroDescription}>
                  We're creating a marketing-only platform that connects businesses with verified 
                  marketing experts. No paid rankings, no featured listings—just merit-based discovery 
                  and transparent connections.
                </p>
                <p className={styles.heroMicrocopy}>
                  Built exclusively for marketing hiring decisions, not generic services.
                </p>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.heroIllustration}>
                <div className={styles.platformIllustration}>
                  <div className={styles.illustrationNode}>
                    <FiUsers className={styles.nodeIcon} />
                    <span className={styles.nodeLabel}>Businesses</span>
                  </div>
                  <div className={styles.illustrationConnector}>
                    <div className={styles.connectorLine}></div>
                    <div className={styles.centerShield}>
                      <FiShield className={styles.shieldIcon} />
                      <span className={styles.shieldLabel}>Neutral</span>
                    </div>
                    <div className={styles.connectorLine}></div>
                  </div>
                  <div className={styles.illustrationNode}>
                    <FiTarget className={styles.nodeIcon} />
                    <span className={styles.nodeLabel}>Experts</span>
                  </div>
                </div>
                <div className={styles.illustrationDeco}></div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </SectionWrapper>

      {/* Why We Exist */}
      <SectionWrapper sectionType="why-we-exist">
        <section className={`${styles.section} ${styles.whyWeExistSection} ${styles.fadeUp}`} ref={addToRefs}>
          <div className={styles.whyWeExistBackground}></div>
          <div className={`container ${styles.container}`}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>The Problem</span>
            <h2 className={`${styles.sectionTitle} ${styles.whyWeExistTitle}`}>Why We Exist</h2>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.leftColumn}>
              <div className={styles.textContent}>
                <p className={styles.paragraph}>
                  Marketing talent is everywhere, but finding the right expert for your specific 
                  needs remains unnecessarily difficult. Traditional hiring processes are slow, 
                  opaque, and often lead to mismatched partnerships.
                </p>
                <p className={styles.paragraph}>
                  We believe hiring marketing expertise should be straightforward, transparent, 
                  and based on merit—not advertising budgets or platform algorithms.
                </p>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.problemDiagram}>
                {problems.map((problem, index) => {
                  const IconComponent = problem.icon
                  return (
                    <Card key={index} variant="flat" className={styles.problemItem}>
                      <div className={styles.problemIconWrapper}>
                        <IconComponent className={styles.problemIcon} />
                      </div>
                      <div className={styles.problemContent}>
                        <h3 className={styles.problemTitle}>{problem.title}</h3>
                        <p className={styles.problemText}>{problem.description}</p>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        </section>
      </SectionWrapper>

      {/* What We're Building */}
      <SectionWrapper sectionType="what-were-building">
        <section className={`${styles.section} ${styles.sectionAlt} ${styles.fadeUp}`} ref={addToRefs}>
          <div className={`container ${styles.container}`}>
          <h2 className={`${styles.sectionTitle} ${styles.centeredTitle}`}>What We're Building</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className={styles.featureCard}>
                  <div className={styles.featureIconWrapper}>
                    <IconComponent className={styles.featureIcon} />
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
        </section>
      </SectionWrapper>

      {/* Our Principles */}
      <SectionWrapper sectionType="principles">
        <section className={`${styles.section} ${styles.principlesSection} ${styles.fadeUp}`} ref={addToRefs}>
          <div className={styles.principlesBackground}></div>
          <div className={`container ${styles.container}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Principles</h2>
            <p className={styles.sectionCaption}>
              The rules that keep MarTechAdda neutral and merit-driven.
            </p>
          </div>
          <div className={styles.principlesGrid}>
            {principles.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className={styles.principleCard}>
                  <div className={`${styles.principleIconWrapper} ${styles[`icon${principle.color}`]}`}>
                    <IconComponent className={styles.principleIcon} />
                  </div>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleDescription}>{principle.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
        </section>
      </SectionWrapper>

      {/* Our Role in the Ecosystem */}
      <SectionWrapper sectionType="ecosystem-role">
        <section className={`${styles.section} ${styles.fadeUp}`} ref={addToRefs}>
          <div className={`container ${styles.container}`}>
          <h2 className={`${styles.sectionTitle} ${styles.centeredTitle}`}>Our Role in the Ecosystem</h2>
          <div className={styles.ecosystemDiagram}>
            <div className={styles.ecosystemNode}>
              <div className={styles.nodeCircle}>
                <FiUsers className={styles.nodeIconLarge} />
              </div>
              <h3 className={styles.nodeTitle}>Businesses</h3>
              <p className={styles.nodeDescription}>Seeking marketing expertise</p>
            </div>
            
            <div className={styles.ecosystemConnector}>
              <div className={styles.connectorLine}></div>
              <div className={styles.centerPlatform}>
                <div className={styles.platformBadge}>
                  <FiShield className={styles.platformIcon} />
                  <span className={styles.platformLabel}>Neutral Layer</span>
                </div>
                <h4 className={styles.centerTitle}>MarTechAdda</h4>
                <div className={styles.platformFeatures}>
                  <div className={styles.platformFeature}>
                    <FiCheckCircle className={styles.featureCheck} />
                    <span>No agency markups</span>
                  </div>
                  <div className={styles.platformFeature}>
                    <FiCheckCircle className={styles.featureCheck} />
                    <span>Merit-based</span>
                  </div>
                </div>
              </div>
              <div className={styles.connectorLine}></div>
            </div>
            
            <div className={styles.ecosystemNode}>
              <div className={styles.nodeCircle}>
                <FiTarget className={styles.nodeIconLarge} />
              </div>
              <h3 className={styles.nodeTitle}>Marketing Experts</h3>
              <p className={styles.nodeDescription}>Showcasing verified expertise</p>
            </div>
          </div>
          <p className={styles.ecosystemExplanation}>
            MarTechAdda sits in the middle as a neutral layer—no agency markups, no paid rankings.
          </p>
        </div>
        </section>
      </SectionWrapper>

      {/* Closing CTA */}
      <SectionWrapper sectionType="about-cta">
        <section className={`${styles.ctaSection} ${styles.fadeUp}`} ref={addToRefs}>
          <div className={styles.ctaBackground}></div>
          <div className={`container ${styles.container}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>See MarTechAdda in action</h2>
            <div className={styles.ctaButtons}>
              <Button variant="primary" size="md" as={Link} to="/" className={styles.ctaButton}>
                <FiSearch className={styles.buttonIcon} />
                Explore Marketing Experts
              </Button>
              <Button variant="outline" size="md" as={Link} to="/how-it-works" className={styles.ctaButton}>
                See How It Works
                <FiArrowRight className={styles.buttonIcon} />
              </Button>
            </div>
          </div>
        </div>
        </section>
      </SectionWrapper>
    </div>
  )
}

export default About

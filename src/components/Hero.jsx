import React, { useState } from 'react'
import { FiSearch, FiBriefcase, FiTarget, FiUsers, FiShield, FiCheckCircle, FiStar, FiMessageCircle } from 'react-icons/fi'
import Button from './ui/Button'
import styles from './Hero.module.css'

const Hero = () => {
  const [role, setRole] = useState('')
  const [category, setCategory] = useState('')

  const categories = [
    'Branding',
    'Strategic Marketing',
    'Advertising',
    'Collateral Marketing',
    'All'
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search submission
    console.log('Search:', { role, category })
  }

  // Mock expert data for dashboard preview
  const mockExperts = [
    {
      name: 'Sarah Chen',
      expertise: ['Branding', 'Strategy'],
      rating: 4.9,
      verified: true
    },
    {
      name: 'Michael Torres',
      expertise: ['Advertising'],
      rating: 4.8,
      verified: true
    },
    {
      name: 'Priya Sharma',
      expertise: ['Branding', 'Strategy'],
      rating: 4.9,
      verified: true
    }
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackgroundPattern}></div>
      <div className={styles.heroBackgroundShape}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={styles.headline}>
              Hire the <span className={styles.headlineAccent}>right marketing expert</span> without RFP guesswork
            </h1>
            <p className={styles.subheadline}>
              Neutral platform. Verified experts. No paid rankings. Direct conversations.
            </p>
            
            <form className={styles.guidedSearch} onSubmit={handleSearch}>
              <div className={styles.searchPanel}>
                <div className={styles.searchRow}>
                  <div className={styles.searchField}>
                    <select 
                      className={styles.searchDropdown}
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    >
                      <option value="">I'm a...</option>
                      <option value="business">Business</option>
                      <option value="expert">Marketing Expert</option>
                    </select>
                  </div>
                  
                  <div className={styles.searchField}>
                    <select 
                      className={styles.searchDropdown}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option value="">I need help with...</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  
                  <Button 
                    type="submit"
                    variant="primary" 
                    size="lg" 
                    className={styles.searchButton}
                  >
                    <FiSearch className={styles.searchIcon} />
                    Find Experts
                  </Button>
                </div>
                <p className={styles.trustNote}>
                  Neutral, marketing-only platform. No paid rankings, ever.
                </p>
              </div>
            </form>
          </div>
          
          <div className={styles.heroRight}>
            <div className={styles.dashboardMock}>
              <div className={styles.dashboardCard}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.headerTop}>
                    <h3 className={styles.dashboardTitle}>Expert Discovery</h3>
                    <div className={styles.verifiedBadge}>
                      <FiShield className={styles.badgeIcon} />
                      <span>Verified</span>
                    </div>
                  </div>
                  <div className={styles.matchStats}>
                    <span className={styles.matchCount}>12 experts matched</span>
                    <span className={styles.avgRating}>
                      <FiStar className={styles.starIcon} />
                      4.8 avg rating
                    </span>
                  </div>
                </div>
                
                <div className={styles.activeFilters}>
                  <span className={`${styles.filterTag} ${styles.filterActive}`}>Branding</span>
                  <span className={`${styles.filterTag} ${styles.filterActive}`}>Strategy</span>
                </div>
                
                <div className={styles.expertList}>
                  {mockExperts.map((expert, index) => (
                    <div key={index} className={styles.expertCard}>
                      <div className={styles.expertAvatar}>
                        {expert.name.charAt(0)}
                      </div>
                      <div className={styles.expertInfo}>
                        <div className={styles.expertNameRow}>
                          <span className={styles.expertName}>{expert.name}</span>
                          {expert.verified && (
                            <FiCheckCircle className={styles.verifiedIcon} />
                          )}
                        </div>
                        <div className={styles.expertTags}>
                          {expert.expertise.map((tag, i) => (
                            <span key={i} className={styles.expertTag}>{tag}</span>
                          ))}
                        </div>
                        <div className={styles.expertRating}>
                          <FiStar className={styles.starIcon} />
                          <span>{expert.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={styles.dashboardFooter}>
                  <div className={styles.footerAction}>
                    <FiMessageCircle className={styles.chatIcon} />
                    <span>Direct conversations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

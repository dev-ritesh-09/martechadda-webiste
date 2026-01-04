import React from 'react'
import { FiFlag, FiTarget, FiFileText, FiArrowRight } from 'react-icons/fi'
import { MegaphoneIcon } from './Icons'
import styles from './ServiceCategories.module.css'

// Reusable CategoryCard component
export const CategoryCard = ({ title, description, icon: Icon, accent, href = '#' }) => {
  return (
    <div 
      className={`${styles.categoryCard} ${styles[`accent-${accent}`]}`}
      data-accent={accent}
    >
      <div className={styles.iconWrapper}>
        <Icon className={styles.categoryIcon} />
      </div>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <p className={styles.categoryDescription}>{description}</p>
      <a href={href} className={styles.viewLink}>
        View experts
        <FiArrowRight className={styles.arrowIcon} />
      </a>
    </div>
  )
}

const ServiceCategories = () => {
  const categories = [
    {
      title: 'Branding',
      description: 'Build brand trust and recognition',
      accent: 'orange',
      icon: FiFlag
    },
    {
      title: 'Strategic Marketing',
      description: 'Turn insights into measurable growth',
      accent: 'green',
      icon: FiTarget
    },
    {
      title: 'Advertising',
      description: 'Reach audiences that convert and engage',
      accent: 'orange',
      icon: MegaphoneIcon
    },
    {
      title: 'Collateral Marketing',
      description: 'Transform attention into lasting impact',
      accent: 'green',
      icon: FiFileText
    }
  ]

  return (
    <section className={styles.serviceCategories}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Choose your marketing expertise</h2>
          <p className={styles.sectionCaption}>Verified specialists in these core areas</p>
        </div>
        
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              accent={category.accent}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories

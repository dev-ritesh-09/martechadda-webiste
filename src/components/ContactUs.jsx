import React, { useState } from 'react'
import Card from './ui/Card'
import Button from './ui/Button'
import Chip from './ui/Chip'
import { LockIcon, EmailIcon, UserIcon, BriefcaseIcon, MessageCircleIcon, ArrowRightIcon, CheckIcon } from './Icons'
import styles from './ContactUs.module.css'

const ContactUs = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    role: '',
    category: '',
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const steps = [
    { title: 'Role', description: 'Select your role' },
    { title: 'Category', description: 'Choose help category' },
    { title: 'Details', description: 'Enter your details' },
    { title: 'Review', description: 'Review & submit' }
  ]

  const roles = [
    { 
      id: 'seeker', 
      label: 'Service Seeker', 
      description: 'I\'m looking for marketing experts',
      icon: UserIcon,
      badge: 'For businesses'
    },
    { 
      id: 'provider', 
      label: 'Service Provider', 
      description: 'I\'m a marketing expert',
      icon: BriefcaseIcon,
      badge: 'For experts'
    },
    { 
      id: 'other', 
      label: 'Other', 
      description: 'General inquiry or feedback',
      icon: MessageCircleIcon,
      badge: 'General'
    }
  ]

  const categoriesByRole = {
    seeker: [
      'Finding the right expert',
      'Platform questions',
      'Account support',
      'Billing inquiry'
    ],
    provider: [
      'Profile setup help',
      'Verification process',
      'Platform features',
      'Account support'
    ],
    other: [
      'Partnership inquiry',
      'Media inquiry',
      'General feedback',
      'Other'
    ]
  }

  const validateField = (field, value) => {
    let error = ''
    switch (field) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required'
        }
        break
      case 'email':
        if (!value.trim()) {
          error = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address'
        }
        break
      case 'message':
        if (!value.trim()) {
          error = 'Message is required'
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters'
        }
        break
      default:
        break
    }
    return error
  }

  const handleRoleSelect = (roleId) => {
    setFormData({ ...formData, role: roleId, category: '' })
    setCurrentStep(1)
  }

  const handleCategorySelect = (category) => {
    setFormData({ ...formData, category })
    setCurrentStep(2)
  }

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
    if (touched[field]) {
      const error = validateField(field, value)
      setErrors({ ...errors, [field]: error })
    }
  }

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true })
    const error = validateField(field, formData[field])
    setErrors({ ...errors, [field]: error })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'company') {
        const error = validateField(key, formData[key])
        if (error) newErrors[key] = error
      }
    })
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTouched({
        name: true,
        email: true,
        message: true
      })
      return
    }

    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll respond within 24-48 hours.')
  }

  const isFieldValid = (field) => {
    return touched[field] && formData[field] && !errors[field]
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>How can we help you?</h2>
            <p className={styles.stepDescription}>Select your role to get started</p>
            <div className={styles.roleCards}>
              {roles.map((role) => {
                const IconComponent = role.icon
                const isSelected = formData.role === role.id
                return (
                  <Card
                    key={role.id}
                    className={`${styles.roleCard} ${isSelected ? styles.selected : ''}`}
                    onClick={() => handleRoleSelect(role.id)}
                  >
                    {isSelected && (
                      <div className={styles.checkmarkBadge}>
                        <CheckIcon className={styles.checkmarkIcon} />
                      </div>
                    )}
                    <div className={styles.roleBadge}>{role.badge}</div>
                    <div className={styles.roleIconWrapper}>
                      <IconComponent className={styles.roleIcon} />
                    </div>
                    <h3 className={styles.roleCardTitle}>{role.label}</h3>
                    <p className={styles.roleCardDescription}>{role.description}</p>
                  </Card>
                )
              })}
            </div>
            <p className={styles.roleMicrocopy}>You can change this later in the next step if needed.</p>
          </div>
        )

      case 1:
        return (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>What can we help with?</h2>
            <p className={styles.stepDescription}>Select a category that best describes your need</p>
            <div className={styles.categoryChips}>
              {categoriesByRole[formData.role]?.map((category) => (
                <Chip
                  key={category}
                  selected={formData.category === category}
                  onClick={() => handleCategorySelect(category)}
                  className={styles.categoryChip}
                >
                  {category}
                </Chip>
              ))}
            </div>
            <div className={styles.stepActions}>
              <Button variant="ghost" onClick={() => setCurrentStep(0)}>
                Back
              </Button>
            </div>
          </div>
        )

      case 2:
        return (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>Your Contact Information</h2>
            <p className={styles.stepDescription}>We'll use this to respond to your inquiry</p>
            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name">
                  Full Name *
                  {isFieldValid('name') && (
                    <span className={styles.successCheck}>✓</span>
                  )}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={errors.name ? styles.inputError : isFieldValid('name') ? styles.inputSuccess : ''}
                  required
                />
                {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address *
                  {isFieldValid('email') && (
                    <span className={styles.successCheck}>✓</span>
                  )}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={errors.email ? styles.inputError : isFieldValid('email') ? styles.inputSuccess : ''}
                  required
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company">
                  Company (Optional)
                  {formData.company && !errors.company && (
                    <span className={styles.successCheck}>✓</span>
                  )}
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={formData.company ? styles.inputSuccess : ''}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">
                  Message *
                  {isFieldValid('message') && (
                    <span className={styles.successCheck}>✓</span>
                  )}
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={errors.message ? styles.inputError : isFieldValid('message') ? styles.inputSuccess : ''}
                  required
                />
                {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                <p className={styles.helperText}>Share any links or context to speed up our response.</p>
              </div>
              <div className={styles.stepActions}>
                <Button variant="ghost" onClick={() => setCurrentStep(1)}>
                  Back
                </Button>
                <Button 
                  variant="primary" 
                  onClick={() => {
                    // Validate before proceeding
                    const newErrors = {}
                    if (!formData.name) newErrors.name = 'Name is required'
                    if (!formData.email) newErrors.email = 'Email is required'
                    if (!formData.message) newErrors.message = 'Message is required'
                    
                    if (Object.keys(newErrors).length === 0) {
                      setCurrentStep(3)
                    } else {
                      setErrors(newErrors)
                      setTouched({ name: true, email: true, message: true })
                    }
                  }}
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
        )

      case 3:
        return (
          <div className={styles.stepContent}>
            <h2 className={styles.stepTitle}>Review Your Information</h2>
            <p className={styles.stepDescription}>Please review your details before submitting</p>
            <Card className={styles.reviewCard}>
              <div className={styles.reviewSection}>
                <div className={styles.reviewRow}>
                  <div className={styles.reviewLabelGroup}>
                    <strong>Role</strong>
                    <button 
                      className={styles.editLink}
                      onClick={() => setCurrentStep(0)}
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <span>{roles.find(r => r.id === formData.role)?.label}</span>
                </div>
              </div>
              <div className={styles.reviewSection}>
                <div className={styles.reviewRow}>
                  <div className={styles.reviewLabelGroup}>
                    <strong>Category</strong>
                    <button 
                      className={styles.editLink}
                      onClick={() => setCurrentStep(1)}
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <span>{formData.category}</span>
                </div>
              </div>
              <div className={styles.reviewSection}>
                <div className={styles.reviewRow}>
                  <div className={styles.reviewLabelGroup}>
                    <strong>Contact Details</strong>
                    <button 
                      className={styles.editLink}
                      onClick={() => setCurrentStep(2)}
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <div className={styles.reviewDetails}>
                    <div>{formData.name}</div>
                    <div>{formData.email}</div>
                    {formData.company && <div>{formData.company}</div>}
                  </div>
                </div>
              </div>
              <div className={styles.reviewSection}>
                <div className={styles.reviewRow}>
                  <div className={styles.reviewLabelGroup}>
                    <strong>Message</strong>
                    <button 
                      className={styles.editLink}
                      onClick={() => setCurrentStep(2)}
                      type="button"
                    >
                      Edit
                    </button>
                  </div>
                  <span className={styles.reviewMessage}>{formData.message}</span>
                </div>
              </div>
            </Card>
            <div className={styles.trustNote}>
              <LockIcon className={styles.lockIcon} />
              <p>Your information is kept private and only used to respond to your request.</p>
            </div>
            <div className={styles.stepActions}>
              <Button variant="ghost" onClick={() => setCurrentStep(2)}>
                Back
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
            <p className={styles.responseTime}>
              Typical response time: within 24-48 hours
            </p>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className={styles.contactUs}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <svg className={styles.communicationFlow} viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="communicationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-orange)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="var(--color-orange)" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            {/* Communication nodes - representing connection points */}
            <circle cx="200" cy="120" r="8" fill="var(--color-orange)" opacity="0.25" />
            <circle cx="600" cy="100" r="10" fill="var(--color-orange)" opacity="0.3" />
            <circle cx="1000" cy="130" r="8" fill="var(--color-orange)" opacity="0.25" />
            {/* Message bubbles/connection paths */}
            <path d="M200 120 Q400 80 600 100 T1000 130" stroke="var(--color-orange)" strokeWidth="2" fill="none" opacity="0.2" />
            <path d="M200 120 Q400 160 600 100 T1000 130" stroke="var(--color-orange)" strokeWidth="2" fill="none" opacity="0.15" />
            {/* Additional connection nodes */}
            <circle cx="400" cy="200" r="6" fill="var(--color-grey-300)" opacity="0.2" />
            <circle cx="800" cy="180" r="6" fill="var(--color-grey-300)" opacity="0.2" />
            {/* Decorative elements */}
            <circle cx="300" cy="60" r="4" fill="var(--color-orange)" opacity="0.15" />
            <circle cx="700" cy="50" r="4" fill="var(--color-orange)" opacity="0.15" />
            <circle cx="500" cy="250" r="5" fill="var(--color-grey-300)" opacity="0.15" />
            <circle cx="900" cy="240" r="5" fill="var(--color-grey-300)" opacity="0.15" />
          </svg>
        </div>
        <div className={`container ${styles.container}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Contact Us</h1>
              <p className={styles.heroSubtitle}>
                We're here to help. Get in touch and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.stepperWrapper}>
            {steps.map((step, index) => {
              const isActive = index === currentStep
              const isCompleted = index < currentStep
              const isUpcoming = index > currentStep
              
              return (
                <React.Fragment key={index}>
                  <div className={`${styles.stepCapsule} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''} ${isUpcoming ? styles.upcoming : ''}`}>
                    <div className={styles.stepCircle}>
                      {isCompleted ? (
                        <CheckIcon className={styles.checkIcon} />
                      ) : (
                        <span className={styles.stepNumber}>{index + 1}</span>
                      )}
                    </div>
                    <div className={styles.stepText}>
                      <div className={styles.stepCapsuleTitle}>{step.title}</div>
                      <div className={styles.stepCaption}>{step.description}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`${styles.stepArrow} ${isCompleted ? styles.completed : ''}`}>
                      <ArrowRightIcon className={styles.arrowIcon} />
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.stepContentWrapper}>
              {renderStepContent()}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.otherWays}>
        <div className={`container ${styles.container}`}>
          <h2 className={styles.otherWaysTitle}>Other Ways to Reach Us</h2>
          <div className={styles.contactMethods}>
            <a href="mailto:contact@martechadda.com" className={styles.contactMethod}>
              <EmailIcon className={styles.contactIcon} />
              <span>contact@martechadda.com</span>
            </a>
            <a href="#" className={styles.contactMethod}>
              <svg className={styles.contactIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs

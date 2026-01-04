import React, { useState, useEffect } from 'react'
import StepProgressBar from './ui/StepProgressBar'
import ProfilePreview from './ui/ProfilePreview'
import PortfolioCard from './ui/PortfolioCard'
import ComplianceChecklist from './ui/ComplianceChecklist'
import WorkspaceMock from './ui/WorkspaceMock'
import Card from './ui/Card'
import Button from './ui/Button'
import Chip from './ui/Chip'
import Badge from './ui/Badge'
import { 
  FiUser, 
  FiMail, 
  FiLock, 
  FiCheckCircle, 
  FiBriefcase, 
  FiAward, 
  FiFileText, 
  FiShield, 
  FiDollarSign,
  FiCalendar,
  FiTarget,
  FiX,
  FiPlus,
  FiInfo,
  FiEdit2,
  FiChevronDown,
  FiChevronUp,
  FiLoader,
  FiAlertCircle
} from 'react-icons/fi'
import styles from './ServiceExpert.module.css'

const ServiceExpert = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showOTP, setShowOTP] = useState(false)
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [validationErrors, setValidationErrors] = useState({})
  const [expandedSections, setExpandedSections] = useState({})
  const [formData, setFormData] = useState({
    // Account Basics
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    isEmailVerified: false,
    
    // Profile & Expertise
    businessName: '',
    location: '',
    about: '',
    services: [],
    industries: [],
    engagementTypes: [],
    clientScale: '',
    communicationPrefs: {
      email: true,
      sms: false,
      calls: true
    },
    deliverySpeed: 2,
    
    // Portfolio & Credibility
    portfolioItems: [{ title: '', description: '', link: '', image: null }],
    tools: [],
    certifications: [],
    testimonials: [{ name: '', role: '', company: '', text: '' }],
    
    // Legal & Compliance
    entityType: '',
    documents: [],
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: ''
  })

  const progressSteps = [
    { title: 'Account Setup' },
    { title: 'Profile & Expertise' },
    { title: 'Portfolio' },
    { title: 'Legal & Compliance' },
    { title: 'Review & Activate' }
  ]

  const formSteps = [
    { id: 0, title: 'Account Basics', icon: FiUser },
    { id: 1, title: 'Profile & Expertise', icon: FiBriefcase },
    { id: 2, title: 'Portfolio & Credibility', icon: FiAward },
    { id: 3, title: 'Legal & Compliance', icon: FiFileText },
    { id: 4, title: 'Review & Activate', icon: FiCheckCircle }
  ]

  const services = [
    'Brand Strategy', 'Content Marketing', 'SEO', 'Social Media', 
    'PPC Advertising', 'Email Marketing', 'Marketing Automation', 
    'Analytics & Reporting', 'Marketing Consulting', 'Creative Design'
  ]

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education',
    'Real Estate', 'Manufacturing', 'Retail', 'Hospitality', 'B2B Services'
  ]

  const engagementTypes = [
    'Project-based', 'Retainer', 'Hourly', 'Fixed Price', 'Performance-based'
  ]

  const clientScaleOptions = [
    'Startups (1-10 employees)',
    'Small Business (11-50 employees)',
    'Mid-size (51-200 employees)',
    'Enterprise (200+ employees)',
    'All sizes'
  ]

  const tools = [
    'Google Analytics', 'HubSpot', 'Salesforce', 'Mailchimp', 'Hootsuite',
    'Adobe Creative Suite', 'Figma', 'Canva', 'SEMrush', 'Ahrefs', 'WordPress'
  ]

  const entityTypes = [
    { id: 'individual', label: 'Individual / Freelancer', description: 'Sole proprietor or independent contractor' },
    { id: 'llc', label: 'LLC', description: 'Limited Liability Company' },
    { id: 'corporation', label: 'Corporation', description: 'C-Corp or S-Corp' },
    { id: 'partnership', label: 'Partnership', description: 'General or Limited Partnership' }
  ]

  useEffect(() => {
    // Auto-save draft to localStorage
    const timer = setTimeout(() => {
      localStorage.setItem('expertRegistrationDraft', JSON.stringify(formData))
    }, 1000)
    return () => clearTimeout(timer)
  }, [formData])

  useEffect(() => {
    // Load draft on mount
    const draft = localStorage.getItem('expertRegistrationDraft')
    if (draft) {
      try {
        const parsed = JSON.parse(draft)
        setFormData(prev => ({ ...prev, ...parsed }))
      } catch (e) {
        console.error('Failed to load draft', e)
      }
    }
  }, [])

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors({ ...validationErrors, [field]: null })
    }
  }

  const handleMultiSelect = (field, value) => {
    const current = formData[field] || []
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value]
    setFormData({ ...formData, [field]: updated })
  }

  const validateStep = (step, updateState = true) => {
    const errors = {}
    
    switch (step) {
      case 0:
        if (!formData.fullName.trim()) errors.fullName = 'Full name is required'
        if (!formData.email.trim()) errors.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format'
        if (!formData.mobile.trim()) errors.mobile = 'Mobile number is required'
        if (!formData.password) errors.password = 'Password is required'
        else if (formData.password.length < 8) errors.password = 'Password must be at least 8 characters'
        break
      case 1:
        if (!formData.businessName.trim()) errors.businessName = 'Business name is required'
        if (!formData.about.trim()) errors.about = 'About section is required'
        if (formData.services.length === 0) errors.services = 'Select at least one service'
        break
      case 3:
        if (!formData.entityType) errors.entityType = 'Select entity type'
        if (!formData.bankName.trim()) errors.bankName = 'Bank name is required'
        if (!formData.accountNumber.trim()) errors.accountNumber = 'Account number is required'
        if (!formData.ifscCode.trim()) errors.ifscCode = 'IFSC code is required'
        break
    }
    
    if (updateState) {
      setValidationErrors(errors)
    }
    return Object.keys(errors).length === 0
  }

  const handleSendOTP = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowOTP(true)
      alert(`Verification code sent to ${formData.email}`)
    }, 1000)
  }

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setFormData({ ...formData, isEmailVerified: true })
      setShowOTP(false)
      setOtp('')
    }
  }

  const handlePortfolioAdd = () => {
    setFormData({
      ...formData,
      portfolioItems: [...formData.portfolioItems, { title: '', description: '', link: '', image: null }]
    })
  }

  const handlePortfolioRemove = (index) => {
    setFormData({
      ...formData,
      portfolioItems: formData.portfolioItems.filter((_, i) => i !== index)
    })
  }

  const handlePortfolioChange = (index, field, value) => {
    const updated = [...formData.portfolioItems]
    updated[index][field] = value
    setFormData({ ...formData, portfolioItems: updated })
  }

  const handleTestimonialAdd = () => {
    setFormData({
      ...formData,
      testimonials: [...formData.testimonials, { name: '', role: '', company: '', text: '' }]
    })
  }

  const handleTestimonialRemove = (index) => {
    setFormData({
      ...formData,
      testimonials: formData.testimonials.filter((_, i) => i !== index)
    })
  }

  const handleTestimonialChange = (index, field, value) => {
    const updated = [...formData.testimonials]
    updated[index][field] = value
    setFormData({ ...formData, testimonials: updated })
  }

  const handleDocumentUpload = (docType) => {
    // Simulate file upload
    const newDoc = {
      type: docType,
      name: `${docType}_document.pdf`,
      uploadedAt: new Date().toISOString()
    }
    setFormData({
      ...formData,
      documents: [...(formData.documents || []), newDoc]
    })
  }

  const handleSaveDraft = () => {
    localStorage.setItem('expertRegistrationDraft', JSON.stringify(formData))
    alert('Draft saved! You can continue later.')
  }

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    })
  }

  const canProceed = () => {
    return validateStep(currentStep, false)
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Account Setup
        return (
          <div className={styles.stepContentWrapper}>
            <Card className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepHeaderLeft}>
                  <div className={styles.avatarPlaceholder}>
                    <FiUser />
                  </div>
                  <div>
                    <h2 className={styles.stepTitle}>Account Setup</h2>
                    <p className={styles.stepDescription}>Complete your basic info first</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="fullName">
                  Full Name *
                  {validationErrors.fullName && (
                    <span className={styles.errorText}> {validationErrors.fullName}</span>
                  )}
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter your full name"
                  className={validationErrors.fullName ? styles.inputError : ''}
                  required
                />
                {formData.fullName && !validationErrors.fullName && (
                  <span className={styles.successIcon}><FiCheckCircle /></span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Work Email *
                  {validationErrors.email && (
                    <span className={styles.errorText}> {validationErrors.email}</span>
                  )}
                </label>
                <div className={styles.inputWithAction}>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@company.com"
                    className={validationErrors.email ? styles.inputError : ''}
                    required
                  />
                  {formData.email && !validationErrors.email && (
                    <span className={styles.successIcon}><FiCheckCircle /></span>
                  )}
                </div>
                <p className={styles.helperText}>We'll send verification code here</p>
                
                {formData.email && !showOTP && !formData.isEmailVerified && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSendOTP}
                    disabled={isLoading}
                    className={styles.verifyButton}
                  >
                    {isLoading ? <FiLoader className={styles.spinner} /> : 'Send Verification Code'}
                  </Button>
                )}

                {showOTP && (
                  <div className={styles.otpBlock}>
                    <label htmlFor="otp">Enter 6-digit code</label>
                    <input
                      type="text"
                      id="otp"
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="000000"
                      className={styles.otpInput}
                    />
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleVerifyOTP}
                      disabled={otp.length !== 6}
                    >
                      Verify
                    </Button>
                  </div>
                )}

                {formData.isEmailVerified && (
                  <div className={styles.verifiedBadge}>
                    <FiCheckCircle /> Email verified
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobile">
                  Mobile Number *
                  {validationErrors.mobile && (
                    <span className={styles.errorText}> {validationErrors.mobile}</span>
                  )}
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="+91 98765 43210"
                  className={validationErrors.mobile ? styles.inputError : ''}
                  required
                />
                {formData.mobile && !validationErrors.mobile && (
                  <span className={styles.successIcon}><FiCheckCircle /></span>
                )}
                <p className={styles.helperText}>For verification and important updates</p>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">
                  Password *
                  {validationErrors.password && (
                    <span className={styles.errorText}> {validationErrors.password}</span>
                  )}
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Create a strong password"
                  className={validationErrors.password ? styles.inputError : ''}
                  required
                />
                {formData.password && !validationErrors.password && (
                  <span className={styles.successIcon}><FiCheckCircle /></span>
                )}
                <p className={styles.helperText}>Minimum 8 characters with letters and numbers</p>
              </div>

              <div className={styles.trustNote}>
                <FiShield className={styles.trustIcon} />
                <div>
                  <strong>We don't sell or share your contact details.</strong>
                  <p>Your information is secure and encrypted.</p>
                </div>
              </div>
            </Card>
          </div>
        )

      case 1: // Profile & Expertise
        return (
          <div className={styles.stepContentWrapper}>
            <div className={styles.twoColumnLayout}>
              <div className={styles.mainContent}>
                <Card className={styles.stepCard}>
                  <h3 className={styles.sectionTitle}>Business Information</h3>
                  <div className={styles.formGroup}>
                    <label htmlFor="businessName">Business Name *</label>
                    <input
                      type="text"
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      placeholder="Your business or professional name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="City, Country"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="about">About / Summary *</label>
                    <textarea
                      id="about"
                      rows="4"
                      value={formData.about}
                      onChange={(e) => handleInputChange('about', e.target.value)}
                      placeholder="Tell us about your expertise and experience..."
                      required
                    />
                    <p className={styles.helperText}>Brief overview of your background and what makes you unique</p>
                  </div>
                </Card>

                <Card className={styles.stepCard}>
                  <h3 className={styles.sectionTitle}>Services Offered</h3>
                  <p className={styles.sectionDescription}>Select all services you provide</p>
                  <div className={styles.chipGroup}>
                    {services.map(service => (
                      <Chip
                        key={service}
                        selected={formData.services.includes(service)}
                        onClick={() => handleMultiSelect('services', service)}
                      >
                        {service}
                      </Chip>
                    ))}
                  </div>
                  {formData.services.length === 0 && (
                    <p className={styles.helperText}>Select at least one service</p>
                  )}
                </Card>

                <Card className={styles.stepCard}>
                  <h3 className={styles.sectionTitle}>Industries</h3>
                  <p className={styles.sectionDescription}>Select industries you have experience in</p>
                  <div className={styles.chipGroup}>
                    {industries.map(industry => (
                      <Chip
                        key={industry}
                        selected={formData.industries.includes(industry)}
                        onClick={() => handleMultiSelect('industries', industry)}
                      >
                        {industry}
                      </Chip>
                    ))}
                  </div>
                </Card>

                <Card className={styles.stepCard}>
                  <h3 className={styles.sectionTitle}>How You Work</h3>
                  <div className={styles.formGroup}>
                    <label>Engagement Types</label>
                    <div className={styles.chipGroup}>
                      {engagementTypes.map(type => (
                        <Chip
                          key={type}
                          selected={formData.engagementTypes.includes(type)}
                          onClick={() => handleMultiSelect('engagementTypes', type)}
                        >
                          {type}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="clientScale">Preferred Client Scale</label>
                    <select
                      id="clientScale"
                      value={formData.clientScale}
                      onChange={(e) => handleInputChange('clientScale', e.target.value)}
                    >
                      <option value="">Select client scale</option>
                      {clientScaleOptions.map(scale => (
                        <option key={scale} value={scale}>{scale}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Delivery Speed</label>
                    <div className={styles.sliderContainer}>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={formData.deliverySpeed}
                        onChange={(e) => handleInputChange('deliverySpeed', parseInt(e.target.value))}
                        className={styles.slider}
                      />
                      <div className={styles.sliderLabels}>
                        <span>Flexible</span>
                        <span>Fast</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <aside className={styles.sidebarPreview}>
                <ProfilePreview formData={formData} services={services} industries={industries} />
              </aside>
            </div>
          </div>
        )

      case 2: // Portfolio & Credibility
        return (
          <div className={styles.stepContentWrapper}>
            <div className={styles.twoColumnLayout}>
              <div className={styles.mainContent}>
                <Card className={styles.stepCard}>
                  <h3 className={styles.sectionTitle}>Portfolio Projects</h3>
                  <p className={styles.sectionDescription}>Showcase your best work (optional but recommended)</p>
                  
                  {formData.portfolioItems.map((item, index) => (
                    <PortfolioCard
                      key={index}
                      item={item}
                      index={index + 1}
                      onRemove={() => handlePortfolioRemove(index)}
                      onChange={(field, value) => handlePortfolioChange(index, field, value)}
                      showRemove={formData.portfolioItems.length > 1}
                    />
                  ))}
                  
                  <Button
                    variant="outline"
                    onClick={handlePortfolioAdd}
                    className={styles.addButton}
                  >
                    <FiPlus /> Add Another Project
                  </Button>
                </Card>

                <Card className={styles.stepCard}>
                  <h3 className={styles.sectionTitle}>Tools & Technologies</h3>
                  <p className={styles.sectionDescription}>Select tools you're proficient with</p>
                  <div className={styles.chipGroup}>
                    {tools.map(tool => (
                      <Chip
                        key={tool}
                        selected={formData.tools.includes(tool)}
                        onClick={() => handleMultiSelect('tools', tool)}
                      >
                        {tool}
                      </Chip>
                    ))}
                  </div>
                </Card>

                <Card className={styles.stepCard}>
                  <h3 className={styles.sectionTitle}>Certifications</h3>
                  <p className={styles.sectionDescription}>Add your professional certifications (optional)</p>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="e.g., Google Ads Certified, HubSpot Inbound Marketing"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim()) {
                          handleMultiSelect('certifications', e.target.value.trim())
                          e.target.value = ''
                        }
                      }}
                    />
                    <p className={styles.helperText}>Press Enter to add each certification</p>
                  </div>
                  {formData.certifications.length > 0 && (
                    <div className={styles.chipGroup}>
                      {formData.certifications.map((cert, idx) => (
                        <Chip
                          key={idx}
                          selected={true}
                          onClick={() => handleMultiSelect('certifications', cert)}
                        >
                          {cert}
                        </Chip>
                      ))}
                    </div>
                  )}
                </Card>

                <Card className={styles.stepCard}>
                  <h3 className={styles.sectionTitle}>Testimonials</h3>
                  <p className={styles.sectionDescription}>Add client testimonials to build credibility</p>
                  
                  {formData.testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.repeatableBlock}>
                      <div className={styles.repeatableHeader}>
                        <span className={styles.repeatableTitle}>Testimonial {index + 1}</span>
                        {formData.testimonials.length > 1 && (
                          <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => handleTestimonialRemove(index)}
                            aria-label="Remove testimonial"
                          >
                            <FiX />
                          </button>
                        )}
                      </div>
                      <div className={styles.formGroup}>
                        <label>Client Name</label>
                        <input
                          type="text"
                          value={testimonial.name}
                          onChange={(e) => handleTestimonialChange(index, 'name', e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label>Role</label>
                          <input
                            type="text"
                            value={testimonial.role}
                            onChange={(e) => handleTestimonialChange(index, 'role', e.target.value)}
                            placeholder="Marketing Director"
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label>Company</label>
                          <input
                            type="text"
                            value={testimonial.company}
                            onChange={(e) => handleTestimonialChange(index, 'company', e.target.value)}
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label>Testimonial</label>
                        <textarea
                          rows="3"
                          value={testimonial.text}
                          onChange={(e) => handleTestimonialChange(index, 'text', e.target.value)}
                          placeholder="What they said about your work..."
                        />
                      </div>
                    </div>
                  ))}
                  
                  <Button
                    variant="outline"
                    onClick={handleTestimonialAdd}
                    className={styles.addButton}
                  >
                    <FiPlus /> Add Another Testimonial
                  </Button>
                </Card>
              </div>

              <aside className={styles.sidebarPreview}>
                {formData.portfolioItems.filter(item => item.title).length > 0 && (
                  <Card className={styles.portfolioPreview}>
                    <h4 className={styles.previewTitle}>Portfolio Preview</h4>
                    <div className={styles.portfolioGrid}>
                      {formData.portfolioItems
                        .filter(item => item.title)
                        .map((item, idx) => (
                          <div key={idx} className={styles.portfolioPreviewItem}>
                            {item.image ? (
                              <img src={item.image} alt={item.title} />
                            ) : (
                              <div className={styles.portfolioPlaceholder}>
                                <FiAward />
                              </div>
                            )}
                            <p className={styles.portfolioPreviewTitle}>{item.title}</p>
                          </div>
                        ))}
                    </div>
                  </Card>
                )}
              </aside>
            </div>
          </div>
        )

      case 3: // Legal & Compliance
        return (
          <div className={styles.stepContentWrapper}>
            <Card className={styles.stepCard}>
              <h3 className={styles.sectionTitle}>Entity Type</h3>
              <p className={styles.sectionDescription}>Select your business entity type</p>
              <div className={styles.entityCards}>
                {entityTypes.map(entity => (
                  <Card
                    key={entity.id}
                    className={`${styles.entityCard} ${formData.entityType === entity.id ? styles.selected : ''}`}
                    onClick={() => handleInputChange('entityType', entity.id)}
                  >
                    <h4 className={styles.entityTitle}>{entity.label}</h4>
                    <p className={styles.entityDescription}>{entity.description}</p>
                  </Card>
                ))}
              </div>
            </Card>

            {formData.entityType && (
              <>
                <ComplianceChecklist
                  entityType={formData.entityType}
                  documents={formData.documents}
                  onDocumentUpload={handleDocumentUpload}
                />

                <Card className={styles.stepCard}>
                  <h3 className={styles.sectionTitle}>
                    Bank Details
                    <Badge variant="green" className={styles.trustBadge}>
                      <FiShield /> Secure
                    </Badge>
                  </h3>
                  <p className={styles.sectionDescription}>For secure payouts</p>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="bankName">Bank Name *</label>
                    <input
                      type="text"
                      id="bankName"
                      value={formData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      placeholder="e.g., HDFC Bank"
                      required
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="accountNumber">Account Number *</label>
                      <input
                        type="text"
                        id="accountNumber"
                        value={formData.accountNumber}
                        onChange={(e) => handleInputChange('accountNumber', e.target.value.replace(/\D/g, ''))}
                        placeholder="Account number"
                        className={styles.maskedInput}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="ifscCode">IFSC Code *</label>
                      <input
                        type="text"
                        id="ifscCode"
                        value={formData.ifscCode}
                        onChange={(e) => handleInputChange('ifscCode', e.target.value.toUpperCase())}
                        placeholder="e.g., HDFC0001234"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="accountHolderName">Account Holder Name *</label>
                    <input
                      type="text"
                      id="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                      placeholder="Name as per bank records"
                      required
                    />
                  </div>

                  <div className={styles.trustInfo}>
                    <FiShield className={styles.trustIcon} />
                    <div>
                      <strong>Payouts are secure</strong>
                      <p>Your bank details are encrypted and stored securely. We use industry-standard security protocols.</p>
                    </div>
                  </div>

                  <div className={styles.trustBadges}>
                    <Badge variant="green" size="sm">
                      <FiShield /> SSL Encrypted
                    </Badge>
                    <Badge variant="green" size="sm">
                      No fees until first project
                    </Badge>
                  </div>
                </Card>
              </>
            )}
          </div>
        )

      case 4: // Review & Activate
        return (
          <div className={styles.stepContentWrapper}>
            <Card className={styles.stepCard}>
              <h2 className={styles.stepTitle}>Review Your Information</h2>
              <p className={styles.stepDescription}>Please review all details before activating your profile</p>
              
              {['account', 'profile', 'portfolio', 'legal'].map((section) => {
                const isExpanded = expandedSections[section] !== false
                return (
                  <div key={section} className={styles.reviewSection}>
                    <button
                      type="button"
                      className={styles.reviewSectionHeader}
                      onClick={() => toggleSection(section)}
                    >
                      <h3 className={styles.reviewTitle}>
                        {section === 'account' && 'Account Information'}
                        {section === 'profile' && 'Profile & Expertise'}
                        {section === 'portfolio' && 'Portfolio & Credibility'}
                        {section === 'legal' && 'Legal & Compliance'}
                      </h3>
                      <div className={styles.reviewActions}>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            // Navigate to relevant step
                            const stepMap = { account: 0, profile: 1, portfolio: 2, legal: 3 }
                            setCurrentStep(stepMap[section])
                          }}
                        >
                          <FiEdit2 /> Edit
                        </Button>
                        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className={styles.reviewContent}>
                        {section === 'account' && (
                          <>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Name:</span>
                              <span className={styles.reviewValue}>{formData.fullName}</span>
                            </div>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Email:</span>
                              <span className={styles.reviewValue}>{formData.email}</span>
                            </div>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Mobile:</span>
                              <span className={styles.reviewValue}>{formData.mobile}</span>
                            </div>
                          </>
                        )}
                        {section === 'profile' && (
                          <>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Business Name:</span>
                              <span className={styles.reviewValue}>{formData.businessName}</span>
                            </div>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Services:</span>
                              <span className={styles.reviewValue}>{formData.services.join(', ') || 'None selected'}</span>
                            </div>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Industries:</span>
                              <span className={styles.reviewValue}>{formData.industries.join(', ') || 'None selected'}</span>
                            </div>
                          </>
                        )}
                        {section === 'portfolio' && (
                          <>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Portfolio Items:</span>
                              <span className={styles.reviewValue}>{formData.portfolioItems.filter(i => i.title).length}</span>
                            </div>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Tools:</span>
                              <span className={styles.reviewValue}>{formData.tools.join(', ') || 'None selected'}</span>
                            </div>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Certifications:</span>
                              <span className={styles.reviewValue}>{formData.certifications.join(', ') || 'None'}</span>
                            </div>
                          </>
                        )}
                        {section === 'legal' && (
                          <>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Entity Type:</span>
                              <span className={styles.reviewValue}>
                                {entityTypes.find(e => e.id === formData.entityType)?.label || 'Not selected'}
                              </span>
                            </div>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Bank Name:</span>
                              <span className={styles.reviewValue}>{formData.bankName || 'Not provided'}</span>
                            </div>
                            <div className={styles.reviewRow}>
                              <span className={styles.reviewLabel}>Documents Uploaded:</span>
                              <span className={styles.reviewValue}>{formData.documents?.length || 0}</span>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}

              <div className={styles.termsSection}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    required
                    className={styles.checkbox}
                  />
                  <span>I agree to the Terms of Service and Privacy Policy</span>
                </label>
              </div>
            </Card>

            <WorkspaceMock />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className={styles.serviceExpert}>
      {/* Top Progress Bar */}
      <section className={styles.overviewSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.headerActions}>
            <h1 className={styles.heroTitle}>Service Expert Registration</h1>
            <Button variant="ghost" size="sm" onClick={handleSaveDraft}>
              Save Draft
            </Button>
          </div>
          <StepProgressBar
            steps={progressSteps}
            currentStep={currentStep}
            onStepClick={(step) => {
              // Allow going back to completed steps
              if (step <= currentStep) {
                setCurrentStep(step)
              }
            }}
            className={styles.progressBar}
          />
        </div>
      </section>

      {/* Main Form Section */}
      <section className={styles.formSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.formLayout}>
            {/* Left Sidebar Navigation */}
            <aside className={styles.sideNav}>
              <div className={styles.sideNavContent}>
                {formSteps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = index === currentStep
                  const isCompleted = index < currentStep
                  
                  return (
                    <button
                      key={step.id}
                      type="button"
                      className={`${styles.navStep} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
                      onClick={() => {
                        if (index <= currentStep) {
                          setCurrentStep(index)
                        }
                      }}
                      disabled={index > currentStep}
                    >
                      <div className={styles.navStepCircle}>
                        {isCompleted ? (
                          <FiCheckCircle />
                        ) : (
                          <Icon />
                        )}
                      </div>
                      <div className={styles.navStepContent}>
                        <div className={styles.navStepTitle}>{step.title}</div>
                        {isActive && <div className={styles.navStepIndicator}>Current step</div>}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Trust Panel */}
              <Card className={styles.trustPanel}>
                <div className={styles.trustPanelHeader}>
                  <FiShield className={styles.trustPanelIcon} />
                  <h4>Why Verification Matters</h4>
                </div>
                <p className={styles.trustPanelText}>
                  MarTechAdda is a neutral, transparent marketplace. Verification ensures credibility 
                  and builds trust between experts and businesses. Your information is secure and 
                  used only for platform operations.
                </p>
              </Card>
            </aside>

            {/* Right Side Form Content */}
            <main className={styles.formContent}>
              {renderStepContent()}
              
              <div className={styles.stepActions}>
                {currentStep > 0 && (
                  <Button 
                    variant="ghost" 
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                )}
                {currentStep < formSteps.length - 1 ? (
                  <Button 
                    variant="primary" 
                    onClick={handleNext}
                    disabled={!canProceed()}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      alert('Registration complete! Your profile is being reviewed.')
                      localStorage.removeItem('expertRegistrationDraft')
                    }}
                    disabled={!canProceed()}
                  >
                    Activate Profile
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  onClick={handleSaveDraft}
                  className={styles.saveDraftButton}
                >
                  Save Draft
                </Button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceExpert

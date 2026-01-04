import React, { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is an Authorized Person (AP)?',
      answer: 'An Authorized Person (AP) is a registered individual authorized by MarTechAdda to provide investment advisory services, facilitate trading activities, and help clients make informed financial decisions. APs act as intermediaries between investors and the stock market.'
    },
    {
      question: 'What are the eligibility criteria to become an AP?',
      answer: 'To become an AP, you need to be a graduate or equivalent from a recognized university, have required documents (PAN, Aadhaar, bank statements, etc.), and complete SEBI registration requirements. Prior experience in financial services is beneficial but not mandatory.'
    },
    {
      question: 'How long does the registration process take?',
      answer: 'The registration process typically takes 7-14 business days after submission of all required documents. This includes document verification, training completion, and final approval.'
    },
    {
      question: 'What kind of training and support is provided?',
      answer: 'We provide comprehensive training covering our platform, trading tools, compliance requirements, and best practices for advisory services. Ongoing support includes marketing materials, dedicated account management, and regular updates on new features.'
    },
    {
      question: 'How do I earn commissions as an AP?',
      answer: 'APs earn competitive commissions based on trading volume generated through their client referrals. The commission structure is transparent and detailed during the onboarding process. Additional incentives may be available based on performance.'
    },
    {
      question: 'Is there any investment required to become an AP?',
      answer: 'There is no upfront investment required to become an AP. However, you may need to meet certain regulatory requirements and maintain necessary documentation as per SEBI guidelines.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about becoming an authorized partner.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

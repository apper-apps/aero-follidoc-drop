import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { enquiryService } from "@/services/api/enquiryService";
import ApperIcon from "@/components/ApperIcon";
import FormField from "@/components/molecules/FormField";
import EnquiryModal from "@/components/organisms/EnquiryModal";
import Button from "@/components/atoms/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [enquiryModal, setEnquiryModal] = useState({ isOpen: false, type: 'distributor' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    try {
      await enquiryService.create({
        type: 'general',
        ...formData
      })

toast.success(
        'Your message has been sent successfully! We\'ll get back to you within 24 hours.',
        {
          position: "top-center",
          autoClose: 6000,
        }
      )
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  const openEnquiryModal = (type) => {
    setEnquiryModal({ isOpen: true, type })
  }

  const closeEnquiryModal = () => {
    setEnquiryModal({ isOpen: false, type: 'distributor' })
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/60123456789', '_blank')
  }

  const handleDirectEmail = () => {
    window.open('mailto:info@follidoc.uk', '_self')
  }

  const contactMethods = [
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      description: 'Quick response within minutes',
      contact: '+60-12-345-6789',
      action: handleWhatsApp,
      buttonText: 'Chat Now',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Detailed enquiries welcome',
      contact: 'info@follidoc.uk',
      action: handleDirectEmail,
      buttonText: 'Send Email',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: 'Phone',
      title: 'Call Direct',
      description: 'Speak to our specialists',
      contact: '+60-3-2780-1234',
      action: () => window.open('tel:+60327801234', '_self'),
      buttonText: 'Call Now',
      color: 'bg-purple-100 text-purple-800'
    }
  ]

  const faqs = [
    {
      question: 'How long does the treatment take?',
      answer: 'The complete Folli-Doc session takes approximately 3 hours, including digital mapping, simulation, bio-stimulation, and results reveal.'
    },
    {
      question: 'Is there any downtime after treatment?',
      answer: 'No downtime required. You can return to work the same day. The treatment is non-invasive with no recovery period needed.'
    },
    {
      question: 'How long do the results last?',
      answer: 'Results typically last 2-4 years with gradual, natural fading. This is significantly longer than conventional SMP treatments.'
    },
    {
      question: 'Is the treatment painful?',
      answer: 'The treatment is designed to be comfortable. Most clients experience minimal discomfort during the simulation phase and none during bio-stimulation.'
    },
    {
      question: 'Can I see results before paying?',
      answer: 'Yes! We show you the complete results before you decide to proceed with payment. You only pay if you\'re satisfied with the outcome.'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-surface to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                💬 Expert Support Available
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
              Get in <span className="text-gradient">Touch</span> Today
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your hair and confidence? Our specialists are here to answer 
              your questions and guide you through your hair restoration journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon="Calendar"
                onClick={handleWhatsApp}
                className="animate-pulse-gold"
              >
                Book Free Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon="HelpCircle"
                onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}
              >
                View FAQ
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Multiple Ways to <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred method to get in touch. We respond quickly to all enquiries 
              and provide personalized guidance for your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:border-primary transition-all duration-300 p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={method.icon} size={24} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 mb-3">{method.description}</p>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${method.color}`}>
                  {method.contact}
                </div>
                
                <Button
                  variant="primary"
                  size="sm"
                  onClick={method.action}
                  fullWidth
                >
                  {method.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Quick Enquiry Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Looking for Something Specific?
            </h3>
            <p className="text-gray-600 mb-6">
              Skip the general contact form and go straight to your specific enquiry type.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                icon="Users"
                onClick={() => openEnquiryModal('distributor')}
              >
                Become a Distributor
              </Button>
              
              <Button
                variant="outline"
                icon="GraduationCap"
                onClick={() => openEnquiryModal('course')}
              >
                Learn the Course
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Send Us a <span className="text-gradient">Detailed Message</span>
              </h2>
              <p className="text-xl text-gray-600">
                For complex enquiries or detailed questions, use our contact form below. 
                We'll respond with comprehensive information within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-primary/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    icon="User"
                  />
                  
                  <FormField
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    icon="Mail"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    icon="Phone"
                    placeholder="+60-12-345-6789"
                  />
                  
                  <FormField
                    label="Subject *"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    error={errors.subject}
                    icon="MessageSquare"
                    placeholder="e.g., Treatment Information"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-primary focus:ring-primary"
                      />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-primary focus:ring-primary"
                      />
                      <span>Phone</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={handleInputChange}
                        className="mr-2 text-primary focus:ring-primary"
                      />
                      <span>WhatsApp</span>
                    </label>
                  </div>
                </div>

                <FormField
                  label="Your Message *"
                  name="message"
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  placeholder="Please provide details about your enquiry, hair concerns, expectations, or any specific questions you have about our treatments..."
                />

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    loading={loading}
                    icon="Send"
                    size="lg"
                    className="flex-1"
                  >
                    {loading ? 'Sending Message...' : 'Send Message'}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    icon="MessageCircle"
                    size="lg"
                    onClick={handleWhatsApp}
                  >
                    Quick WhatsApp
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-500 pt-2">
                  By submitting this form, you agree to be contacted by Folli-Doc regarding your enquiry.
                  <br />
                  We typically respond within 24 hours and never share your information with third parties.
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get instant answers to the most common questions about Folli-Doc treatments, 
              technology, and what to expect during your hair restoration journey.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
              >
                <h3 className="text-lg font-bold text-white mb-3 font-display flex items-center">
                  <ApperIcon name="HelpCircle" size={20} className="text-primary mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-6">
              Still have questions? Our specialists are here to help with personalized answers.
            </p>
            <Button
              variant="primary"
              size="lg"
              icon="MessageCircle"
              onClick={handleWhatsApp}
            >
              Ask Our Specialists
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={closeEnquiryModal}
        type={enquiryModal.type}
      />
    </div>
  )
}

export default Contact
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import { enquiryService } from '@/services/api/enquiryService'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import FormField from '@/components/molecules/FormField'

const EnquiryModal = ({ isOpen, onClose, type = 'distributor' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    experience: '',
    profession: '',
    clinicName: '',
    yearsExperience: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

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

    if (type === 'distributor') {
      if (!formData.company.trim()) newErrors.company = 'Company is required'
      if (!formData.location.trim()) newErrors.location = 'Location is required'
      if (!formData.experience.trim()) newErrors.experience = 'Experience is required'
    } else {
      if (!formData.profession.trim()) newErrors.profession = 'Profession is required'
      if (!formData.clinicName.trim()) newErrors.clinicName = 'Clinic name is required'
      if (!formData.yearsExperience.trim()) newErrors.yearsExperience = 'Years of experience is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    try {
      await enquiryService.create({
        type,
        ...formData
      })

      toast.success(
        `Your ${type === 'distributor' ? 'distributor' : 'course'} enquiry has been sent successfully! We'll contact you within 24 hours.`,
        {
          position: "top-center",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      )

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        location: '',
        experience: '',
        profession: '',
        clinicName: '',
        yearsExperience: '',
        message: ''
      })
      
      onClose()
    } catch (error) {
      toast.error('Failed to send enquiry. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  const modalTitle = type === 'distributor' ? 'Become a Distributor' : 'Learn the Course'
  const modalDescription = type === 'distributor' 
    ? 'Join our network of authorized distributors and bring Folli-Doc technology to your region.'
    : 'Master the Folli-Doc dual-action system with our comprehensive training program.'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 font-display">
                      {modalTitle}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {modalDescription}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ApperIcon name="X" size={24} />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <FormField
                  label="Phone Number *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                  icon="Phone"
                  placeholder="+60-12-345-6789"
                />

                {/* Distributor Specific Fields */}
                {type === 'distributor' && (
                  <>
                    <FormField
                      label="Company Name *"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      error={errors.company}
                      icon="Building"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        label="Target Location *"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        error={errors.location}
                        icon="MapPin"
                        placeholder="e.g., Kuala Lumpur, Johor"
                      />
                      
                      <FormField
                        label="Industry Experience *"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        error={errors.experience}
                        icon="Award"
                        placeholder="e.g., 5+ years in beauty industry"
                      />
                    </div>
                  </>
                )}

                {/* Course Specific Fields */}
                {type === 'course' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        label="Profession *"
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        error={errors.profession}
                        icon="Stethoscope"
                        placeholder="e.g., Dermatologist, Aesthetician"
                      />
                      
                      <FormField
                        label="Years of Experience *"
                        name="yearsExperience"
                        value={formData.yearsExperience}
                        onChange={handleInputChange}
                        error={errors.yearsExperience}
                        icon="Calendar"
                        placeholder="e.g., 5"
                      />
                    </div>

                    <FormField
                      label="Clinic/Practice Name *"
                      name="clinicName"
                      value={formData.clinicName}
                      onChange={handleInputChange}
                      error={errors.clinicName}
                      icon="Building2"
                    />
                  </>
                )}

                <FormField
                  label="Additional Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={
                    type === 'distributor'
                      ? "Tell us about your distribution network and business goals..."
                      : "Tell us about your current practice and training expectations..."
                  }
                />

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    loading={loading}
                    icon="Send"
                    className="flex-1"
                  >
                    {loading ? 'Sending...' : 'Send Enquiry'}
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-500 pt-2">
                  By submitting this form, you agree to be contacted by Folli-Doc regarding your enquiry.
                  <br />
                  We typically respond within 24 hours.
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default EnquiryModal
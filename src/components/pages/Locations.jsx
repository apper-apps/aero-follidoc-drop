import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { locationService } from '@/services/api/locationService'
import LocationCard from '@/components/molecules/LocationCard'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Locations = () => {
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadLocations = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await locationService.getAll()
        setLocations(data)
      } catch (err) {
        setError(err.message || 'Failed to load locations')
      } finally {
        setLoading(false)
      }
    }

    loadLocations()
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/60123456789', '_blank')
  }

  const handleEmail = () => {
    window.open('mailto:info@follidoc.uk', '_self')
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <LoadingSpinner size="xl" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <ApperIcon name="AlertCircle" size={48} className="text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Failed to Load Locations</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button 
            onClick={() => window.location.reload()} 
            variant="primary"
            icon="RefreshCw"
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

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
                📍 Exclusively in Malaysia
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
              <span className="text-gradient">World-Class Results</span> at Your Doorstep
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Folli-Doc Hair Simulation Centre is the only authorized provider of UK-developed 
              innovation in Malaysia. No need to fly to London or Zurich for premium hair restoration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon="MessageCircle"
                onClick={handleWhatsApp}
                className="animate-pulse-gold"
              >
                Book Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon="Mail"
                onClick={handleEmail}
              >
                Email Enquiry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
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
              Our <span className="text-gradient">Premium Centres</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit any of our state-of-the-art centres across Malaysia for your 
              hair restoration consultation and treatment.
            </p>
          </motion.div>

          {locations.length === 0 ? (
            <div className="text-center py-12">
              <ApperIcon name="MapPin" size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Locations Available</h3>
              <p className="text-gray-600">
                Please check back later or contact us directly for location information.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.Id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <LocationCard location={location} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-primary/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  Can't Find Your <span className="text-gradient">Nearest Centre?</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Contact us directly and we'll help you find the best solution for your hair restoration needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-4">Quick response within minutes</p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleWhatsApp}
                    fullWidth
                  >
                    Chat Now
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="Mail" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">info@follidoc.uk</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleEmail}
                    fullWidth
                  >
                    Send Email
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="Clock" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600 mb-4">Within 24 hours</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Fast Support
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                  <ApperIcon name="Star" size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Service Guarantee</h3>
                  <p className="text-gray-600">
                    Every Folli-Doc centre maintains our highest standards for technology, 
                    hygiene, and customer service. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-white">
              <span className="text-gradient">Flexible Hours</span> for Your Convenience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4 font-display">Kuala Lumpur</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Holidays</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4 font-display">Sibu</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4 font-display">Penang</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span>11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Extended Hours</span>
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-4">
                Need an appointment outside regular hours? We offer flexible scheduling for your convenience.
              </p>
              <Button
                variant="primary"
                size="lg"
                icon="Calendar"
                onClick={handleWhatsApp}
              >
                Schedule Flexible Appointment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Locations
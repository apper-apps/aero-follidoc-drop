import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '@/components/atoms/Button'
import StatCard from '@/components/molecules/StatCard'
import FeatureCard from '@/components/molecules/FeatureCard'
import LocationCard from '@/components/molecules/LocationCard'
import EnquiryModal from '@/components/organisms/EnquiryModal'
import ApperIcon from '@/components/ApperIcon'
import { locationService } from '@/services/api/locationService'
import { useEffect } from 'react'

const Home = () => {
  const [locations, setLocations] = useState([])
  const [enquiryModal, setEnquiryModal] = useState({ isOpen: false, type: 'distributor' })

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await locationService.getAll()
        setLocations(data)
      } catch (error) {
        console.error('Failed to load locations:', error)
      }
    }

    loadLocations()
  }, [])

  const openEnquiryModal = (type) => {
    setEnquiryModal({ isOpen: true, type })
  }

  const closeEnquiryModal = () => {
    setEnquiryModal({ isOpen: false, type: 'distributor' })
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/60123456789', '_blank')
  }

  const features = [
    {
      icon: 'Zap',
      title: 'Follicular Simulation (UK)',
      description: '60,000 strand illusions with 3D micro-layering technology for ultra-realistic density.',
      highlight: true
    },
    {
      icon: 'Sparkles',
      title: 'Bio-Photonic Stimulation (Swiss)',
      description: 'Growth factors and peptides with 8x deeper absorption for biological follicle activation.'
    },
    {
      icon: 'Shield',
      title: 'Medical Grade Safety',
      description: 'Bio-compatible pigments, EU-certified, and clinically validated for maximum safety.'
    },
    {
      icon: 'Clock',
      title: '3-Hour Transformation',
      description: 'Complete session with digital mapping, simulation, bio-stimulation, and results reveal.'
    },
    {
      icon: 'Award',
      title: 'Globally Recognized',
      description: 'Trusted in 30+ countries by professionals and featured in European conferences.'
    },
    {
      icon: 'Target',
      title: 'Instant Results',
      description: 'See your transformation immediately with no downtime, no surgery, no commitment.'
    }
  ]

  const comparisonData = [
    { feature: 'Density Appearance', folliDoc: '60,000 strands', conventional: '~5,000–10,000 dots' },
    { feature: 'Technology Origin', folliDoc: 'UK + Switzerland', conventional: 'China/Korea' },
    { feature: 'Safety Standards', folliDoc: 'Bio-pigments, EU-certified', conventional: 'Often unregulated' },
    { feature: 'Visual Realism', folliDoc: '3D multi-angle layering', conventional: 'Flat 2D shading' },
    { feature: 'Biological Benefit', folliDoc: 'YES – Follicle Activation', conventional: 'NO – Cosmetic Only' },
    { feature: 'Result Longevity', folliDoc: '2–4 years', conventional: '6–18 months' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-surface to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30 mb-4">
                  🌍 Trusted in 30+ Countries
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
                <span className="text-white">Hair Simulation &</span>
                <br />
                <span className="text-gradient">Bio-Stimulation System</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
                Where British Engineering Meets Swiss Trichological Precision
              </p>

              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Revolutionary dual-action innovation for instant density and biological follicle activation. 
                Visible results in 1 session with no downtime, no surgery, no commitment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  variant="primary"
                  size="xl"
                  icon="MessageCircle"
                  onClick={handleWhatsApp}
                  className="animate-pulse-gold"
                >
                  Book Free Consultation
                </Button>
                
                <Button
                  variant="outline"
                  size="xl"
                  icon="Users"
                  onClick={() => openEnquiryModal('distributor')}
                >
                  Become Distributor
                </Button>
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <StatCard number="60000" suffix="+" label="Hair Strands" delay={0} />
                <StatCard number="30" suffix="+" label="Countries" delay={200} />
                <StatCard number="3" label="Hour Session" delay={400} />
                <StatCard number="99" suffix="%" label="Satisfaction" delay={600} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary"
          >
            <ApperIcon name="ChevronDown" size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
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
              <span className="text-black">Dual Innovation.</span>
              <span className="text-gradient"> One Session.</span>
              <span className="text-black"> Real Results.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the world's most advanced hair restoration system combining UK simulation 
              technology with Swiss bio-stimulation for unprecedented results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Why It Outperforms <span className="text-gradient">Traditional SMP</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike basic SMP that only mimics hair dots, our system feeds your follicles 
              and fuels natural growth for results that look better and last longer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-surface to-black text-white">
                      <th className="px-6 py-4 text-left font-display text-lg">Feature</th>
                      <th className="px-6 py-4 text-center font-display text-lg">
                        <span className="text-primary">Folli-Doc Dual Action</span>
                      </th>
                      <th className="px-6 py-4 text-center font-display text-lg">Conventional SMP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr 
                        key={index}
                        className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary/5 transition-colors`}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                            <ApperIcon name="CheckCircle" size={16} className="mr-1" />
                            {row.folliDoc}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">{row.conventional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
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
              <span className="text-gradient">Exclusively in Malaysia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Folli-Doc Hair Simulation Centre is the only authorized provider of this UK-developed 
              innovation in Malaysia. World-class results now available at your doorstep.
            </p>
          </motion.div>

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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-surface via-black to-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">
              Upgrade Your Hair. <span className="text-gradient">Upgrade Your Life.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              You've tried shampoos, vitamins, and oils. Now experience what thousands across 
              Europe and Asia already have — the power of British-engineered follicular simulation 
              + Swiss follicle stimulation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="primary"
                size="xl"
                icon="MessageCircle"
                onClick={handleWhatsApp}
                className="animate-pulse-gold"
              >
                Book Free Consultation
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                icon="GraduationCap"
                onClick={() => openEnquiryModal('course')}
              >
                Learn the Course
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <ApperIcon name="CheckCircle" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm text-gray-400">Instant Results You Can See</p>
              </div>
              <div className="text-center">
                <ApperIcon name="Award" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm text-gray-400">British & Swiss Technology</p>
              </div>
              <div className="text-center">
                <ApperIcon name="Clock" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm text-gray-400">No Recovery Time</p>
              </div>
              <div className="text-center">
                <ApperIcon name="Shield" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm text-gray-400">Only Pay If Satisfied</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-primary font-display text-lg">
                ✨ Made in the UK. Backed by Swiss Science. Delivered by Folli-Doc.
              </p>
            </div>
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

export default Home
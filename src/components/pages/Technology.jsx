import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '@/components/atoms/Button'
import FeatureCard from '@/components/molecules/FeatureCard'
import EnquiryModal from '@/components/organisms/EnquiryModal'
import ApperIcon from '@/components/ApperIcon'

const Technology = () => {
  const [enquiryModal, setEnquiryModal] = useState({ isOpen: false, type: 'course' })

  const openEnquiryModal = (type) => {
    setEnquiryModal({ isOpen: true, type })
  }

  const closeEnquiryModal = () => {
    setEnquiryModal({ isOpen: false, type: 'course' })
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/60123456789', '_blank')
  }

  const sessionSteps = [
    {
      step: 1,
      title: 'Digital Scalp Mapping',
      description: 'Advanced density scan to pinpoint thinning areas with precision analysis',
      icon: 'Scan',
      duration: '30 mins'
    },
    {
      step: 2,
      title: 'Hair Simulation (UK)',
      description: '60,000 hair strand illusion with 3D micro-layering technology',
      icon: 'Zap',
      duration: '90 mins'
    },
    {
      step: 3,
      title: 'Bio-Stimulation (Swiss)',
      description: 'Follicle reactivation with growth factor delivery system',
      icon: 'Sparkles',
      duration: '45 mins'
    },
    {
      step: 4,
      title: 'Results Reveal',
      description: 'Mirror reveal and satisfaction confirmation before payment',
      icon: 'Eye',
      duration: '15 mins'
    }
  ]

  const ukTechnology = [
    {
      icon: 'Target',
      title: '3D Micro-Layering',
      description: 'Ultra-realistic density with multi-angle precision for natural appearance'
    },
    {
      icon: 'Shield',
      title: 'Bio-Compatible Pigments',
      description: 'Safety-certified, natural-looking pigments that blend seamlessly'
    },
    {
      icon: 'Zap',
      title: 'Zero Patchiness',
      description: 'Advanced application technique prevents uneven coverage'
    },
    {
      icon: 'Clock',
      title: '2-4 Year Longevity',
      description: 'Long-lasting results with gradual, natural fading'
    }
  ]

  const swissTechnology = [
    {
      icon: 'Microscope',
      title: 'Micro-Impulse Technology',
      description: 'Opens scalp microchannels for enhanced absorption'
    },
    {
      icon: 'Droplets',
      title: '8x Deeper Absorption',
      description: 'Revolutionary delivery system for maximum penetration'
    },
    {
      icon: 'Dna',
      title: 'Growth Factor Infusion',
      description: 'Peptides and antioxidants for biological activation'
    },
    {
      icon: 'Heart',
      title: 'Painless & Drug-Free',
      description: 'Comfortable treatment with no pharmaceutical side effects'
    }
  ]

  const certifications = [
    {
      title: 'UK Cosmetic Device Standards',
      description: 'Certified under British regulatory framework',
      icon: 'Award'
    },
    {
      title: 'Swiss Lab Validated',
      description: '99.9% absorption rate clinically proven',
      icon: 'FlaskConical'
    },
    {
      title: 'EU Medical Grade',
      description: 'Meets European medical device standards',
      icon: 'Shield'
    },
    {
      title: 'ISO 9001:2015',
      description: 'Quality management system certified',
      icon: 'CheckCircle'
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
                🔬 British Engineering + Swiss Precision
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
              Revolutionary <span className="text-gradient">Dual-Action</span> Technology
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The world's first hair restoration system combining UK follicular simulation 
              with Swiss bio-photonic stimulation for instant visual results and biological activation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon="MessageCircle"
                onClick={handleWhatsApp}
                className="animate-pulse-gold"
              >
                Book Technology Demo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon="GraduationCap"
                onClick={() => openEnquiryModal('course')}
              >
                Learn the Technique
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Session Process */}
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
              Inside the <span className="text-gradient">3-Hour Session</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience instant confidence engineering backed by over 8 years of R&D 
              in our comprehensive transformation protocol.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sessionSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300 p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                        {step.step}
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{step.duration}</span>
                    </div>
                    
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <ApperIcon name={step.icon} size={24} className="text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {index < sessionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UK Technology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-8 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl md:text-5xl font-bold font-display">
                <span className="text-gradient">UK Technology:</span> Follicular Simulation
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              British-engineered devices deliver up to 60,000 strand illusions in a single sitting 
              — ideal for receding hairlines, crown zones, and post-shedding patches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ukTechnology.map((feature, index) => (
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

      {/* Swiss Technology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-8 bg-red-600 mr-4"></div>
              <h2 className="text-3xl md:text-5xl font-bold font-display">
                <span className="text-gradient">Swiss Innovation:</span> Bio-Photonic Stimulation
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than visual restoration — Swiss-developed micro-impulse technology opens 
              scalp microchannels and infuses growth factors for biological activation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {swissTechnology.map((feature, index) => (
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

      {/* Certifications */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">
              <span className="text-gradient">Globally Recognized</span> Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our technology meets the highest international standards for safety, 
              efficacy, and quality assurance across multiple regulatory frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={cert.icon} size={24} className="text-primary" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {cert.title}
                </h3>
                
                <p className="text-gray-300 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-surface to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">
              Ready to Experience <span className="text-gradient">Next-Gen Hair Restoration?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands who have experienced the power of British engineering 
              combined with Swiss precision. Book your technology demonstration today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="xl"
                icon="MessageCircle"
                onClick={handleWhatsApp}
                className="animate-pulse-gold"
              >
                Book Technology Demo
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                icon="GraduationCap"
                onClick={() => openEnquiryModal('course')}
              >
                Professional Training
              </Button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-primary font-display text-lg">
                🧪 Science You Can See. Confidence You Can Feel.
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

export default Technology
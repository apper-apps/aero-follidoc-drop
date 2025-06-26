import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const NotFound = () => {
  const navigate = useNavigate()

  const handleWhatsApp = () => {
    window.open('https://wa.me/60123456789', '_blank')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-surface to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <ApperIcon name="SearchX" size={64} className="text-primary" />
            </div>
          </motion.div>

          {/* 404 Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold font-display text-gradient mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              icon="Home"
              onClick={() => navigate('/')}
            >
              Go Home
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              icon="ArrowLeft"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              icon="MessageCircle"
              onClick={handleWhatsApp}
            >
              Get Help
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
          >
            <h3 className="text-lg font-bold text-white mb-4 font-display">
              Looking for something specific?
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                onClick={() => navigate('/technology')}
                className="text-gray-300 hover:text-primary transition-colors text-sm"
              >
                <ApperIcon name="Cpu" size={16} className="mx-auto mb-1" />
                Technology
              </button>
              
              <button
                onClick={() => navigate('/locations')}
                className="text-gray-300 hover:text-primary transition-colors text-sm"
              >
                <ApperIcon name="MapPin" size={16} className="mx-auto mb-1" />
                Locations
              </button>
              
              <button
                onClick={() => navigate('/contact')}
                className="text-gray-300 hover:text-primary transition-colors text-sm"
              >
                <ApperIcon name="Phone" size={16} className="mx-auto mb-1" />
                Contact
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="text-gray-300 hover:text-primary transition-colors text-sm"
              >
                <ApperIcon name="MessageCircle" size={16} className="mx-auto mb-1" />
                WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Brand Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-primary font-display text-lg">
              ✨ Made in the UK. Backed by Swiss Science. Delivered by Folli-Doc.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
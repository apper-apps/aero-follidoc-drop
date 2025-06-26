import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  highlight = false,
  className = '' 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className={`
        p-6 rounded-xl transition-all duration-300
        ${highlight 
          ? 'bg-gradient-to-br from-surface to-black text-white border-2 border-primary gold-glow' 
          : 'bg-white border border-gray-200 hover:border-primary hover:shadow-lg'
        }
        ${className}
      `}
    >
      <div className={`
        w-12 h-12 rounded-lg flex items-center justify-center mb-4
        ${highlight ? 'bg-primary text-black' : 'bg-primary/10 text-primary'}
      `}>
        <ApperIcon name={icon} size={24} />
      </div>
      
      <h3 className={`
        text-lg font-semibold mb-2
        ${highlight ? 'text-white' : 'text-gray-900'}
      `}>
        {title}
      </h3>
      
      <p className={`
        ${highlight ? 'text-gray-300' : 'text-gray-600'}
      `}>
        {description}
      </p>
    </motion.div>
  )
}

export default FeatureCard
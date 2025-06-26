import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fomoService } from '@/services/api/fomoService'
import ApperIcon from '@/components/ApperIcon'

const FomoWidget = () => {
  const [notifications, setNotifications] = useState([])
  const [currentNotification, setCurrentNotification] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fomoService.getActive()
        setNotifications(data)
      } catch (error) {
        console.error('Failed to load FOMO notifications:', error)
      }
    }

    loadNotifications()
  }, [])

  useEffect(() => {
    if (notifications.length === 0) return

    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
      setCurrentNotification(randomNotification)
      setIsVisible(true)

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000)

    // Then show notifications every 15-25 seconds
    const interval = setInterval(() => {
      if (!isVisible) {
        showNotification()
      }
    }, Math.random() * 10000 + 15000) // 15-25 seconds

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [notifications, isVisible])

  if (!currentNotification) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="fomo-widget bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 border border-primary/20">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                <ApperIcon name="User" size={16} className="text-black" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <ApperIcon name="MapPin" size={14} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800">
                    {currentNotification.location}
                  </span>
                  <span className="text-xs text-gray-500">
                    {currentNotification.timeAgo}
                  </span>
                </div>
                
                <p className="text-sm text-gray-700 font-medium">
                  {currentNotification.message}
                </p>
                
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs text-gray-500">Live activity</span>
                </div>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ApperIcon name="X" size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FomoWidget
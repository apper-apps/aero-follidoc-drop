import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { routeArray } from '@/config/routes'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/60123456789', '_blank')
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-primary/20' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ApperIcon name="Sparkles" size={20} className="text-black" />
              </div>
              <div className="text-xl md:text-2xl font-bold font-display">
                <span className="text-white">Folli</span>
                <span className="text-primary">-Doc</span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {routeArray.map((route) => (
                <NavLink
                  key={route.id}
                  to={route.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary'
                        : 'text-white hover:text-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {route.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="primary"
                size="sm"
                icon="MessageCircle"
                onClick={handleWhatsApp}
              >
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-white hover:text-primary transition-colors"
            >
              <ApperIcon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={toggleMobileMenu}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-surface z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xl font-bold font-display">
                    <span className="text-white">Folli</span>
                    <span className="text-primary">-Doc</span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-white hover:text-primary transition-colors"
                  >
                    <ApperIcon name="X" size={20} />
                  </button>
                </div>

                <nav className="space-y-4 mb-8">
                  {routeArray.map((route) => (
                    <NavLink
                      key={route.id}
                      to={route.path}
                      onClick={toggleMobileMenu}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                          isActive
                            ? 'bg-primary/20 text-primary border border-primary/30'
                            : 'text-white hover:bg-white/10'
                        }`
                      }
                    >
                      <ApperIcon name={route.icon} size={20} />
                      <span className="font-medium">{route.label}</span>
                    </NavLink>
                  ))}
                </nav>

                <div className="space-y-3">
                  <Button
                    variant="primary"
                    fullWidth
                    icon="MessageCircle"
                    onClick={() => {
                      handleWhatsApp()
                      toggleMobileMenu()
                    }}
                  >
                    WhatsApp Consultation
                  </Button>
                  
                  <div className="text-center text-sm text-gray-400">
                    <p>Email: info@follidoc.uk</p>
                    <p>Available in KL, Sibu, Penang</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
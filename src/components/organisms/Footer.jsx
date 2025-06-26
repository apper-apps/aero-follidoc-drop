import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'
import { routeArray } from '@/config/routes'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' }
  ]

  const certifications = [
    'UK Cosmetic Device Standards',
    'Swiss Lab Certified',
    'EU Medical Grade',
    'ISO 9001:2015'
  ]

  return (
    <footer className="bg-surface text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ApperIcon name="Sparkles" size={20} className="text-black" />
              </div>
              <div className="text-xl font-bold font-display">
                <span className="text-white">Folli</span>
                <span className="text-primary">-Doc</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Where British Engineering Meets Swiss Trichological Precision. 
              Advanced Hair Simulation & Bio-Stimulation System.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <ApperIcon name="MapPin" size={16} className="mr-2 text-primary" />
              Trusted in 30+ Countries
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2">
              {routeArray.map((route) => (
                <li key={route.id}>
                  <NavLink
                    to={route.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <ApperIcon name={route.icon} size={16} className="mr-2" />
                    {route.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <ApperIcon name="Mail" size={16} className="mr-3 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@follidoc.uk" 
                  className="hover:text-primary transition-colors"
                >
                  info@follidoc.uk
                </a>
              </div>
              <div className="flex items-center">
                <ApperIcon name="MessageCircle" size={16} className="mr-3 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/60123456789" 
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Consultation
                </a>
              </div>
              <div className="flex items-start">
                <ApperIcon name="MapPin" size={16} className="mr-3 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>KL Gateway Mall</p>
                  <p>Wisma Sanyan, Sibu</p>
                  <p>Gurney Plaza, Penang</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <ApperIcon name="CheckCircle" size={16} className="mr-2 text-primary flex-shrink-0" />
                  <span className="text-sm">{cert}</span>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-400">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors duration-200"
                  >
                    <ApperIcon name={social.icon} size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Folli-Doc UK. All rights reserved. 
              <span className="text-primary ml-2">Made in the UK. Backed by Swiss Science.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
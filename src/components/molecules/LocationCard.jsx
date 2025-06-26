import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const LocationCard = ({ location }) => {
  const handleCall = () => {
    window.open(`tel:${location.phone}`, '_self')
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${location.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')
  }

  const handleEmail = () => {
    window.open(`mailto:${location.email}`, '_self')
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 hover:border-primary transition-all duration-300 overflow-hidden"
    >
      {/* Map Embed */}
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <iframe
          src={location.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
            {location.city}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
          {location.name}
        </h3>
        
        <div className="space-y-3 text-sm text-gray-600 mb-6">
          <div className="flex items-start gap-2">
            <ApperIcon name="MapPin" size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <span>{location.address}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ApperIcon name="Clock" size={16} className="text-primary flex-shrink-0" />
            <span>{location.hours}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ApperIcon name="Car" size={16} className="text-primary flex-shrink-0" />
            <span>{location.parking}</span>
          </div>
        </div>

        {/* Services */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Services Available</h4>
          <div className="flex flex-wrap gap-2">
            {location.services?.map((service, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Actions */}
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="outline"
            size="sm"
            icon="Phone"
            onClick={handleCall}
            className="text-xs"
          >
            Call
          </Button>
          
          <Button
            variant="primary"
            size="sm"
            icon="MessageCircle"
            onClick={handleWhatsApp}
            className="text-xs"
          >
            WhatsApp
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            icon="Mail"
            onClick={handleEmail}
            className="text-xs"
          >
            Email
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default LocationCard
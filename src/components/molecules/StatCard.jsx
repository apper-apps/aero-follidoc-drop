import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const StatCard = ({ number, label, suffix = '', icon, delay = 0 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = parseInt(number) / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= parseInt(number)) {
          setCount(parseInt(number))
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [number, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient font-display mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  )
}

export default StatCard
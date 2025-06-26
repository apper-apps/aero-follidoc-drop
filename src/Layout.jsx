import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import FomoWidget from '@/components/organisms/FomoWidget'

const Layout = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      <FomoWidget />
    </div>
  )
}

export default Layout
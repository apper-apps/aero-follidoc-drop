import Home from '@/components/pages/Home'
import Technology from '@/components/pages/Technology'
import Locations from '@/components/pages/Locations'
import Contact from '@/components/pages/Contact'

export const routes = {
  home: {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: 'Home',
    component: Home
  },
  technology: {
    id: 'technology',
    label: 'Technology',
    path: '/technology',
    icon: 'Cpu',
    component: Technology
  },
  locations: {
    id: 'locations',
    label: 'Locations',
    path: '/locations',
    icon: 'MapPin',
    component: Locations
  },
  contact: {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    icon: 'Phone',
    component: Contact
  }
}

export const routeArray = Object.values(routes)
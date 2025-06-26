import { delay } from '@/utils/delay'
import locationData from '@/services/mockData/location.json'

let data = [...locationData]

export const locationService = {
  async getAll() {
    await delay(250)
    return [...data]
  },

  async getById(id) {
    await delay(200)
    const location = data.find(item => item.Id === parseInt(id, 10))
    if (!location) {
      throw new Error('Location not found')
    }
    return { ...location }
  },

  async create(location) {
    await delay(400)
    const newLocation = {
      ...location,
      Id: Math.max(...data.map(item => item.Id), 0) + 1
    }
    
    data.push(newLocation)
    return { ...newLocation }
  },

  async update(id, updateData) {
    await delay(300)
    const index = data.findIndex(item => item.Id === parseInt(id, 10))
    if (index === -1) {
      throw new Error('Location not found')
    }
    
    const updatedLocation = { ...data[index], ...updateData }
    data[index] = updatedLocation
    return { ...updatedLocation }
  },

  async delete(id) {
    await delay(300)
    const index = data.findIndex(item => item.Id === parseInt(id, 10))
    if (index === -1) {
      throw new Error('Location not found')
    }
    
    const deletedLocation = { ...data[index] }
    data.splice(index, 1)
    return deletedLocation
  }
}
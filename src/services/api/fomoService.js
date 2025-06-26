import { delay } from '@/utils/delay'
import fomoData from '@/services/mockData/fomo.json'

let data = [...fomoData]

export const fomoService = {
  async getAll() {
    await delay(200)
    return [...data]
  },

  async getActive() {
    await delay(200)
    return data.filter(notification => notification.isActive)
  },

  async getById(id) {
    await delay(200)
    const notification = data.find(item => item.Id === parseInt(id, 10))
    if (!notification) {
      throw new Error('Notification not found')
    }
    return { ...notification }
  },

  async create(notification) {
    await delay(300)
    const newNotification = {
      ...notification,
      Id: Math.max(...data.map(item => item.Id), 0) + 1,
      isActive: true
    }
    
    data.push(newNotification)
    return { ...newNotification }
  },

  async update(id, updateData) {
    await delay(200)
    const index = data.findIndex(item => item.Id === parseInt(id, 10))
    if (index === -1) {
      throw new Error('Notification not found')
    }
    
    const updatedNotification = { ...data[index], ...updateData }
    data[index] = updatedNotification
    return { ...updatedNotification }
  },

  async delete(id) {
    await delay(200)
    const index = data.findIndex(item => item.Id === parseInt(id, 10))
    if (index === -1) {
      throw new Error('Notification not found')
    }
    
    const deletedNotification = { ...data[index] }
    data.splice(index, 1)
    return deletedNotification
  }
}
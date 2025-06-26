import { delay } from '@/utils/delay'
import enquiryData from '@/services/mockData/enquiry.json'

let data = [...enquiryData]

export const enquiryService = {
  async getAll() {
    await delay(300)
    return [...data]
  },

  async getById(id) {
    await delay(200)
    const enquiry = data.find(item => item.Id === parseInt(id, 10))
    if (!enquiry) {
      throw new Error('Enquiry not found')
    }
    return { ...enquiry }
  },

  async create(enquiry) {
    await delay(500)
    
    // Simulate email sending
    console.log('Sending enquiry email to info@follidoc.uk:', enquiry)
    
    const newEnquiry = {
      ...enquiry,
      Id: Math.max(...data.map(item => item.Id), 0) + 1,
      timestamp: new Date().toISOString(),
      status: 'pending'
    }
    
    data.push(newEnquiry)
    return { ...newEnquiry }
  },

  async update(id, updateData) {
    await delay(300)
    const index = data.findIndex(item => item.Id === parseInt(id, 10))
    if (index === -1) {
      throw new Error('Enquiry not found')
    }
    
    const updatedEnquiry = { ...data[index], ...updateData }
    data[index] = updatedEnquiry
    return { ...updatedEnquiry }
  },

  async delete(id) {
    await delay(300)
    const index = data.findIndex(item => item.Id === parseInt(id, 10))
    if (index === -1) {
      throw new Error('Enquiry not found')
    }
    
    const deletedEnquiry = { ...data[index] }
    data.splice(index, 1)
    return deletedEnquiry
  }
}
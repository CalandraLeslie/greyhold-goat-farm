import { reactive, computed } from 'vue'

export const cartStore = reactive({
  items: [],
  
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      this.items.push({
        id: product.id || Date.now(), // Fallback if no ID
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      })
    }
  },
  
  removeItem(productId) {
    const index = this.items.findIndex(item => item.id === productId)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  },
  
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId)
    if (item) {
      item.quantity = Math.max(1, quantity)
    }
  },
  
  clearCart() {
    this.items = []
  },
  
  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0)
  },
  
  get totalPrice() {
    return this.items.reduce((sum, item) => {
      // Extract numeric price from string (e.g., "$8 per quart" → 8)
      const price = parseFloat(item.price.replace(/[^\d.]/g, ''))
      return sum + (price * item.quantity)
    }, 0).toFixed(2)
  }
})
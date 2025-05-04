<template>
  <div class="confirmation-overlay" @click="close">
    <div class="confirmation-container" @click.stop>
      <div class="confirmation-header">
        <h2>Order Confirmation</h2>
        <button class="close-btn" @click="close">&times;</button>
      </div>
      
      <div class="confirmation-content">
        <div class="success-icon">✓</div>
        <h3>Thank You for Your Order!</h3>
        
        <div class="order-details">
          <p class="order-number">Order #{{ order.orderNumber }}</p>
          <p class="order-date">{{ formatDate(order.orderDate) }}</p>
          
          <div class="confirmation-summary">
            <h4>Order Summary</h4>
            <div class="summary-items">
              <div v-for="item in order.items" :key="item.id" class="summary-item">
                <span>{{ item.quantity }}× {{ item.name }}</span>
                <span>${{ extractPrice(item.price) * item.quantity }}</span>
              </div>
            </div>
            
            <div class="summary-total">
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>${{ calculateSubtotal() }}</span>
              </div>
              <div class="summary-row">
                <span>Shipping:</span>
                <span>$5.00</span>
              </div>
              <div class="summary-row total">
                <span>Total:</span>
                <span>${{ order.total }}</span>
              </div>
            </div>
          </div>
          
          <div class="shipping-info">
            <h4>Shipping Information</h4>
            <p>{{ order.shippingInfo.firstName }} {{ order.shippingInfo.lastName }}</p>
            <p>{{ order.shippingInfo.address }}</p>
            <p>{{ order.shippingInfo.city }}, {{ order.shippingInfo.state }} {{ order.shippingInfo.zip }}</p>
            <p>{{ order.shippingInfo.email }}</p>
            <p>{{ order.shippingInfo.phone }}</p>
          </div>
        </div>
        
        <p class="confirmation-message">
          We've sent a confirmation email to {{ order.shippingInfo.email }} with your order details.
          If you have any questions about your order, please contact our customer support.
        </p>
        
        <div class="confirmation-actions">
          <button class="btn primary-btn" @click="continueShopping">Continue Shopping</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    continueShopping() {
      this.close();
      // Scroll to products section
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    },
    extractPrice(priceString) {
      // Extract numeric price from string (e.g., "$8 per quart" → 8)
      const price = parseFloat(priceString.replace(/[^\d.]/g, ''));
      return price;
    },
    calculateSubtotal() {
      return this.order.items.reduce((sum, item) => {
        return sum + (this.extractPrice(item.price) * item.quantity);
      }, 0).toFixed(2);
    }
  }
}
</script>

<style scoped>
.confirmation-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  padding: 1rem;
}

.confirmation-container {
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.confirmation-header {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
}

.confirmation-header h2 {
  color: rgb(95, 141, 78);
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;
}

.confirmation-content {
  padding: 2rem;
  text-align: center;
}

.success-icon {
  width: 70px;
  height: 70px;
  background-color: rgb(95, 141, 78);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 1.5rem;
}

.confirmation-content h3 {
  color: rgb(95, 141, 78);
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.order-details {
  text-align: left;
  margin-bottom: 2rem;
}

.order-number {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(142, 58, 60);
  margin-bottom: 0.5rem;
}

.order-date {
  color: #777;
  margin-bottom: 1.5rem;
}

.confirmation-summary, .shipping-info {
  background-color: rgb(249, 246, 240);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.confirmation-summary h4, .shipping-info h4 {
  color: rgb(122, 91, 62);
  margin-top: 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}

.summary-items {
  margin-bottom: 1rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
}

.summary-total {
  border-top: 1px solid #ddd;
  padding-top: 1rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
}

.total {
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(142, 58, 60);
  border-top: 1px solid #ddd;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
}

.shipping-info p {
  margin: 0.5rem 0;
}

.confirmation-message {
  color: #777;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.confirmation-actions {
  margin-top: 2rem;
}

.primary-btn {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  background-color: rgb(142, 58, 60);
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.primary-btn:hover {
  background-color: rgb(122, 38, 40);
}

/* Add responsive styles */
@media (max-width: 768px) {
  .confirmation-container {
    width: 90%;
    max-width: 600px;
  }
  
  .confirmation-content {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .confirmation-container {
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
  }
  
  .confirmation-overlay {
    padding: 0;
  }
  
  .confirmation-header {
    padding: 1rem;
  }
  
  .confirmation-content {
    padding: 1rem;
  }
  
  .success-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }
  
  .confirmation-content h3 {
    font-size: 1.5rem;
  }
  
  .confirmation-summary, .shipping-info {
    padding: 1rem;
  }
  
  .confirmation-actions button {
    width: 100%;
  }
}
</style>
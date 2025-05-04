<template>
  <div class="checkout-overlay" @click="close">
    <div class="checkout-container" @click.stop>
      <div class="checkout-header">
        <h2>Checkout</h2>
        <button class="close-btn" @click="close">&times;</button>
      </div>
      
      <div v-if="currentStep === 'cart'" class="checkout-step">
        <h3>Review Your Cart</h3>
        <div class="checkout-items">
          <div v-for="item in cartStore.items" :key="item.id" class="checkout-item">
            <div class="item-image">
              <img :src="item.image" :alt="item.name">
            </div>
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <div class="item-meta">
                <span class="item-quantity">Qty: {{ item.quantity }}</span>
                <span class="item-price">{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="checkout-summary">
          <div class="summary-row">
            <span>Subtotal:</span>
            <span>${{ cartStore.totalPrice }}</span>
          </div>
          <div class="summary-row">
            <span>Shipping:</span>
            <span>$5.00</span>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <span>${{ (Number(cartStore.totalPrice) + 5).toFixed(2) }}</span>
          </div>
        </div>
        
        <button class="btn primary-btn" @click="nextStep">Continue to Shipping</button>
      </div>
      
      <div v-if="currentStep === 'shipping'" class="checkout-step">
        <h3>Shipping Information</h3>
        <form @submit.prevent="nextStep" class="checkout-form">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" v-model="shippingInfo.firstName" required>
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" v-model="shippingInfo.lastName" required>
            </div>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="shippingInfo.email" required>
          </div>
          
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" v-model="shippingInfo.phone" required>
          </div>
          
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" v-model="shippingInfo.address" required>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" v-model="shippingInfo.city" required>
            </div>
            <div class="form-group">
              <label for="state">State</label>
              <input type="text" id="state" v-model="shippingInfo.state" required>
            </div>
            <div class="form-group">
              <label for="zip">Zip Code</label>
              <input type="text" id="zip" v-model="shippingInfo.zip" required>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn secondary-btn" @click="prevStep">Back</button>
            <button type="submit" class="btn primary-btn">Continue to Payment</button>
          </div>
        </form>
      </div>
      
      <div v-if="currentStep === 'payment'" class="checkout-step">
        <h3>Payment Information</h3>
        <form @submit.prevent="placeOrder" class="checkout-form">
          <div class="form-group">
            <label for="cardName">Name on Card</label>
            <input type="text" id="cardName" v-model="paymentInfo.cardName" required>
          </div>
          
          <div class="form-group">
            <label for="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" v-model="paymentInfo.cardNumber" placeholder="1234 5678 9012 3456" required>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="expiry">Expiry Date</label>
              <input type="text" id="expiry" v-model="paymentInfo.expiry" placeholder="MM/YY" required>
            </div>
            <div class="form-group">
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" v-model="paymentInfo.cvv" placeholder="123" required>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn secondary-btn" @click="prevStep">Back</button>
            <button type="submit" class="btn primary-btn">Place Order</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { cartStore } from '../store/cartStore';

export default {
  data() {
    return {
      cartStore,
      currentStep: 'cart',
      shippingInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: ''
      },
      paymentInfo: {
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
      }
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    nextStep() {
      if (this.currentStep === 'cart') {
        this.currentStep = 'shipping';
      } else if (this.currentStep === 'shipping') {
        this.currentStep = 'payment';
      }
    },
    prevStep() {
      if (this.currentStep === 'shipping') {
        this.currentStep = 'cart';
      } else if (this.currentStep === 'payment') {
        this.currentStep = 'shipping';
      }
    },
    placeOrder() {
      // Here you would normally send the order to your backend
      // For now, we'll just simulate a successful order
      
      // Create an order object with all the data
      const order = {
        items: [...cartStore.items],
        shippingInfo: {...this.shippingInfo},
        paymentInfo: {
          cardName: this.paymentInfo.cardName,
          cardNumber: this.paymentInfo.cardNumber.slice(-4).padStart(16, '*'),
          expiry: this.paymentInfo.expiry
        },
        total: (Number(cartStore.totalPrice) + 5).toFixed(2),
        orderNumber: 'GH-' + Math.floor(100000 + Math.random() * 900000),
        orderDate: new Date().toISOString()
      };
      
      // Emit the order completed event with the order data
      this.$emit('order-completed', order);
      
      // Clear the cart
      cartStore.clearCart();
    }
  }
}
</script>

<style scoped>
.checkout-overlay {
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

.checkout-container {
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

.checkout-header {
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

.checkout-header h2 {
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

.checkout-step {
  padding: 2rem;
}

.checkout-step h3 {
  color: rgb(122, 91, 62);
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.checkout-items {
  margin-bottom: 2rem;
}

.checkout-item {
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.item-image {
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  border-radius: 4px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  margin: 0 0 0.5rem 0;
  color: rgb(51, 51, 51);
}

.item-meta {
  display: flex;
  justify-content: space-between;
}

.item-quantity {
  color: #777;
}

.item-price {
  font-weight: 600;
  color: rgb(142, 58, 60);
}

.checkout-summary {
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: rgb(249, 246, 240);
  border-radius: 8px;
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

.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: rgb(51, 51, 51);
}

.form-group input {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group input:focus {
  border-color: rgb(95, 141, 78);
  outline: none;
  box-shadow: 0 0 0 2px rgba(95, 141, 78, 0.2);
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.primary-btn, .secondary-btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: rgb(142, 58, 60);
  color: white;
}

.primary-btn:hover {
  background-color: rgb(122, 38, 40);
}

.secondary-btn {
  background-color: #eee;
  color: #333;
}

.secondary-btn:hover {
  background-color: #ddd;
}

@media (max-width: 600px) {
  .form-row {
    flex-direction: column;
    gap: 1rem;
  }
  
  .checkout-step {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .checkout-container {
    width: 90%;
    max-width: 600px;
  }
  
  .checkout-step {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .checkout-container {
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
  }
  
  .checkout-overlay {
    padding: 0;
  }
  
  .checkout-header {
    padding: 1rem;
  }
  
  .checkout-step {
    padding: 1rem;
  }
  
  .checkout-item {
    flex-wrap: wrap;
  }
  
  .item-meta {
    width: 100%;
    margin-top: 0.5rem;
  }
  
  .form-row {
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-actions {
    flex-direction: column-reverse;
    gap: 0.75rem;
  }
  
  .form-actions button {
    width: 100%;
  }
}
</style>
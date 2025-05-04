<template>
  <div class="cart-overlay" v-if="isOpen" @click="close">
    <div class="cart-container" @click.stop>
      <div class="cart-header">
        <h2>Your Cart</h2>
        <button class="close-btn" @click="close">&times;</button>
      </div>

      <div v-if="cartStore.items.length === 0" class="cart-empty">
        <div class="empty-cart-icon">🛒</div>
        <p>Your cart is empty</p>
      </div>

      <div v-else class="cart-items">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <div class="item-image">
            <img :src="item.image" :alt="item.name">
          </div>
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="item-price">{{ item.price }}</p>
          </div>
          <div class="item-quantity">
            <button @click="updateQuantity(item.id, item.quantity - 1)" class="quantity-btn">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)" class="quantity-btn">+</button>
          </div>
          <button class="remove-btn" @click="removeItem(item.id)">
            <span>×</span>
          </button>
        </div>
      </div>

      <div class="cart-footer" v-if="cartStore.items.length > 0">
        <div class="cart-summary">
          <div class="summary-row">
            <span>Items:</span>
            <span>{{ cartStore.totalItems }}</span>
          </div>
          <div class="summary-row total">
            <span>Total:</span>
            <span>${{ cartStore.totalPrice }}</span>
          </div>
        </div>
        <div class="cart-actions">
          <button class="btn secondary-btn" @click="clearCart">Clear Cart</button>
          <button class="btn primary-btn" @click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cartStore } from '../store/cartStore';

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cartStore
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    goToProducts() {
      this.close();
      // Smooth scroll to products section
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    updateQuantity(productId, quantity) {
      if (quantity < 1) {
        this.removeItem(productId);
        return;
      }
      cartStore.updateQuantity(productId, quantity);
    },
    removeItem(productId) {
      cartStore.removeItem(productId);
    },
    clearCart() {
      if (confirm('Are you sure you want to clear your cart?')) {
        cartStore.clearCart();
      }
    },
    checkout() {
      this.$emit('checkout');
      this.close();
    }
  }
}
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1100;
  animation: fadeIn 0.3s ease;
}

.cart-container {
  width: 100%;
  max-width: 450px;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;
}

.cart-header {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h2 {
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

.cart-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #777;
}

.empty-cart-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ccc;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.cart-item {
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  position: relative;
  align-items: center;
}

.item-image {
  width: 70px;
  height: 70px;
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

.item-details h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: rgb(51, 51, 51);
}

.item-price {
  color: rgb(142, 58, 60);
  margin: 0;
  font-weight: 600;
}

.item-quantity {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.quantity-btn {
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quantity {
  margin: 0 0.5rem;
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0 0.5rem;
}

.remove-btn:hover {
  color: rgb(142, 58, 60);
}

.cart-footer {
  border-top: 1px solid #eee;
  padding: 1.5rem;
  background-color: rgb(249, 246, 240);
}

.cart-summary {
  margin-bottom: 1rem;
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

.cart-actions {
  display: flex;
  gap: 1rem;
}

.primary-btn, .secondary-btn {
  flex: 1;
  padding: 0.8rem;
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

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@media (max-width: 500px) {
  .cart-container {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .cart-container {
    width: 80%;
    max-width: 400px;
  }
}

@media (max-width: 576px) {
  .cart-container {
    width: 100%;
    max-width: none;
  }
  
  .cart-header {
    padding: 1rem;
  }
  
  .cart-items {
    padding: 0.5rem;
  }
  
  .cart-item {
    padding: 0.75rem;
    position: relative;
  }
  
  .item-image {
    width: 60px;
    height: 60px;
  }
  
  .item-quantity {
    margin-top: 0.5rem;
  }
  
  .remove-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  
  .cart-footer {
    padding: 1rem;
  }
  
  .cart-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .cart-actions button {
    width: 100%;
  }
  
  .cart-empty {
    padding: 2rem 1rem;
  }
}
</style>
<template>
  <div id="app">
    <Navbar @open-cart="openCart" />
    <HeroSection />
    <AboutSection />
    <GoatGallery />
    <ProductsSection @cart-updated="handleCartUpdated" @show-notification="showNotification" />
    <ContactForm />
    <Footer />
    
    <!-- Shopping Cart -->
    <ShoppingCart 
      :is-open="isCartOpen" 
      @close="closeCart"
      @checkout="openCheckout" 
    />
    
    <!-- Checkout -->
    <CheckoutForm 
      v-if="isCheckoutOpen" 
      @close="closeCheckout"
      @order-completed="handleOrderCompleted"
    />
    
    <!-- Order Confirmation -->
    <OrderConfirmation
      v-if="currentOrder"
      :order="currentOrder"
      @close="closeOrderConfirmation"
    />
    
    <!-- Notifications -->
    <div class="notification" v-if="notification" :class="{ show: notification }">
      {{ notification }}
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import GoatGallery from './components/GoatGallery.vue';
import ProductsSection from './components/ProductsSection.vue';
import ContactForm from './components/ContactForm.vue';
import Footer from './components/Footer.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import CheckoutForm from './components/CheckoutForm.vue';
import OrderConfirmation from './components/OrderConfirmation.vue';

export default {
  components: {
    Navbar,
    HeroSection,
    AboutSection,
    GoatGallery,
    ProductsSection,
    ContactForm,
    Footer,
    ShoppingCart,
    CheckoutForm,
    OrderConfirmation
  },
  data() {
    return {
      isCartOpen: false,
      isCheckoutOpen: false,
      notification: null,
      notificationTimeout: null,
      currentOrder: null
    }
  },
  methods: {
    openCart() {
      this.isCartOpen = true;
    },
    closeCart() {
      this.isCartOpen = false;
    },
    openCheckout() {
      this.isCartOpen = false;
      this.isCheckoutOpen = true;
    },
    closeCheckout() {
      this.isCheckoutOpen = false;
    },
    handleCartUpdated() {
      // This method is called when the cart is updated
      // You can add animations or other effects here
    },
    showNotification(message) {
      // Clear any existing timeout
      if (this.notificationTimeout) {
        clearTimeout(this.notificationTimeout);
      }
      
      this.notification = message;
      
      // Hide notification after 3 seconds
      this.notificationTimeout = setTimeout(() => {
        this.notification = null;
      }, 3000);
    },
    handleOrderCompleted(order) {
      this.isCheckoutOpen = false;
      this.currentOrder = order;
    },
    closeOrderConfirmation() {
      this.currentOrder = null;
    }
  }
}
</script>

<style>
@import './styles/main.css';
@import './styles/animations.css';
@import './styles/variables.css';
@import './styles/responsive.css'; /* Add this line */

.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgb(95, 141, 78);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2000;
}

.notification.show {
  transform: translateY(0);
  opacity: 1;
}

/* Add global responsive styles */
@media (max-width: 768px) {
  .notification {
    bottom: 10px;
    right: 10px;
    padding: 0.8rem 1.2rem;
  }
}

@media (max-width: 576px) {
  .notification {
    bottom: 5px;
    right: 5px;
    left: 5px;
    text-align: center;
    padding: 0.7rem 1rem;
  }
}

/* Add a meta viewport tag to your index.html if not already present */
</style>
<template>
  <nav class="navbar" :class="{ 'nav-open': isMobileMenuOpen }">
    <div class="navbar-container">
      <div class="logo">
        <router-link to="/">Greyhold Ranch</router-link>
      </div>
      
      <div class="mobile-controls">
        <div class="cart-icon-container" @click.stop="openCart">
          <span class="cart-icon">🛒</span>
          <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
        </div>
        
        <button class="menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <ul class="nav-links" :class="{ 'active': isMobileMenuOpen }">
        <li><a href="#hero" @click="scrollToSection('hero')">Home</a></li>
        <li><a href="#about" @click="scrollToSection('about')">About</a></li>
        <li><a href="#gallery" @click="scrollToSection('gallery')">Gallery</a></li>
        <li><a href="#products" @click="scrollToSection('products')">Products</a></li>
        <li><a href="#contact" @click="scrollToSection('contact')">Contact</a></li>
        <li class="cart-icon-container desktop-cart" @click="openCart">
          <span class="cart-icon">🛒</span>
          <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { cartStore } from '../store/cartStore';

export default {
  data() {
    return {
      cartStore,
      isMobileMenuOpen: false
    }
  },
  computed: {
    cartItemCount() {
      return cartStore.totalItems;
    }
  },
  methods: {
    scrollToSection(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      this.isMobileMenuOpen = false; // Close menu when clicking nav item
    },
    openCart() {
      this.$emit('open-cart');
      this.isMobileMenuOpen = false;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: rgba(237, 224, 200, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  flex-wrap: wrap;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(51, 51, 51);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  text-decoration: none;
  color: rgb(51, 51, 51);
  transition: color 0.3s ease;
  font-weight: 500;
}

.nav-links li a:hover {
  color: rgb(142, 58, 60);
}

.cart-icon-container {
  cursor: pointer;
  position: relative;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.cart-icon-container:hover {
  background-color: rgba(142, 58, 60, 0.1);
}

.cart-icon {
  font-size: 1.5rem;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: rgb(142, 58, 60);
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile menu styles */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-toggle span {
  width: 100%;
  height: 2px;
  background-color: rgb(51, 51, 51);
  transition: all 0.3s ease;
}

.mobile-controls {
  display: none;
  align-items: center;
  gap: 1rem;
}

/* Desktop cart is shown by default */
.desktop-cart {
  display: flex;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0.8rem 1rem;
  }
  
  .mobile-controls {
    display: flex;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .nav-links {
    flex-direction: column;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    padding: 0;
    margin: 0;
  }
  
  .nav-links.active {
    max-height: 300px;
    padding: 1rem 0;
  }
  
  .nav-links li {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
  }
  
  /* Hide desktop cart in mobile view */
  .desktop-cart {
    display: none;
  }
  
  /* Style for when nav is open */
  .nav-open {
    background-color: rgba(237, 224, 200, 1);
  }
}

@media (max-width: 576px) {
  .logo {
    font-size: 1.2rem;
  }
}
</style>
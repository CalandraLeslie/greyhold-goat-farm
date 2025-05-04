<template>
  <section id="products" class="section products-section">
    <div class="container">
      <h2>Our Products</h2>
      <div class="products-grid">
        <div v-for="(product, index) in products" :key="index" class="product-card">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <div class="product-actions">
            <button @click="openModal(index)" class="btn view-btn">Learn More</button>
            <button @click="addToCart(product)" class="btn cart-btn">
              <span class="cart-icon">🛒</span> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Detail Modal -->
    <div v-if="selectedProduct !== null" class="product-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">&times;</button>
        <div class="modal-header">
          <h2>{{ products[selectedProduct].name }}</h2>
        </div>
        <div class="modal-body">
          <div class="modal-image">
            <img :src="products[selectedProduct].image" :alt="products[selectedProduct].name">
          </div>
          <div class="modal-details">
            <h3>Description</h3>
            <p>{{ products[selectedProduct].fullDescription }}</p>
            
            <div v-if="products[selectedProduct].benefits.length > 0">
              <h3>Benefits</h3>
              <ul class="benefits-list">
                <li v-for="(benefit, i) in products[selectedProduct].benefits" :key="i">
                  {{ benefit }}
                </li>
              </ul>
            </div>
            
            <div v-if="products[selectedProduct].availability" class="availability">
              <h3>Availability</h3>
              <p>{{ products[selectedProduct].availability }}</p>
            </div>
            
            <div class="cta-section">
              <p class="price-tag" v-if="products[selectedProduct].price">
                {{ products[selectedProduct].price }}
              </p>
              <div class="quantity-controls">
                <button @click="decrementQuantity" class="quantity-btn">-</button>
                <span class="quantity">{{ quantity }}</span>
                <button @click="incrementQuantity" class="quantity-btn">+</button>
              </div>
              <button @click="addToCartFromModal()" class="order-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { cartStore } from '../store/cartStore'

export default {
  data() {
    return {
      selectedProduct: null,
      quantity: 1,
      products: [
        {
          id: 'milk-001',
          name: "Fresh Goat Milk",
          image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Creamy, nutritious goat milk from our happy, pasture-raised herd.",
          fullDescription: "Our Fresh Goat Milk comes directly from our pasture-raised herd of Alpine and Saanen goats. We milk our goats daily in a clean, stress-free environment to ensure the highest quality. Unlike cow's milk, goat milk has smaller fat globules making it easier to digest for many people who have sensitivities to traditional dairy products.",
          benefits: [
            "Naturally homogenized with smaller fat particles", 
            "Contains essential vitamins and minerals including calcium and potassium",
            "Lower in lactose than cow milk, making it easier to digest",
            "Rich, creamy taste with a smooth finish"
          ],
          availability: "Available year-round with peak freshness from March through October.",
          price: "$8 per quart",
          orderLink: "#order-form",
          link: "#milk-products"
        },
        {
          name: "Artisanal Goat Cheese",
          image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Handcrafted cheeses made in small batches from our premium goat milk.",
          fullDescription: "Our Artisanal Goat Cheese is handcrafted in small batches using traditional methods. We offer several varieties including fresh chèvre, aged tomme, and feta-style, each with its own unique flavor profile. Our cheese-making process begins with our premium goat milk and ends with careful aging in our temperature-controlled cheese cave.",
          benefits: [
            "Made from 100% goat milk with no fillers or preservatives",
            "Rich in protein and calcium",
            "Lower in calories than many cow milk cheeses",
            "Available in multiple varieties and flavor profiles"
          ],
          availability: "Fresh chèvre available weekly. Aged varieties released seasonally.",
          price: "Starting at $6 per 4oz package",
          orderLink: "#order-form",
          link: "#cheese-products"
        },
        {
          name: "Goat Milk Soap",
          image: "https://images.pexels.com/photos/4210342/pexels-photo-4210342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Natural, moisturizing soap that's gentle on all skin types.",
          fullDescription: "Our Goat Milk Soap is crafted by hand using milk from our own goats combined with premium plant oils and natural fragrances. Each bar is created in small batches and cured for at least 4 weeks to create a long-lasting, gentle soap. The natural creamy texture of goat milk adds moisturizing properties that help nourish your skin.",
          benefits: [
            "Contains natural alpha-hydroxy acids that help remove dead skin cells",
            "Rich in vitamins A, B1, B6, B12, C, D, and E",
            "Gentle enough for sensitive skin and conditions like eczema",
            "Available in multiple scents including lavender, citrus, and unscented"
          ],
          availability: "Available year-round in our farm store and online.",
          price: "$6 per bar or 4 for $20",
          orderLink: "#order-form",
          link: "#soap-products"
        },
        {
          name: "Premium Breeding Stock",
          image: "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Quality goats with excellent genetics and health records.",
          fullDescription: "Our Premium Breeding Stock comes from carefully selected bloodlines with an emphasis on health, productivity, and temperament. We raise Alpine, Saanen, Boer, and Nigerian Dwarf goats, each with complete documentation including pedigrees, health testing, and production records where applicable. All breeding animals are raised on our farm and fully acclimated to our management practices.",
          benefits: [
            "Registered animals with complete pedigrees",
            "Health testing for common genetic conditions",
            "Milk production records for dairy breeds",
            "Growth rates and conformation details for meat breeds"
          ],
          availability: "Varies throughout the year. Contact us for current availability.",
          price: "Starting at $300 for doelings",
          orderLink: "#contact-form",
          link: "#breeding-stock"
        },
        {
          name: "Farm Fresh Eggs",
          image: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Free-range eggs from our heritage breed chickens, fed natural diets.",
          fullDescription: "Our Farm Fresh Eggs come from our flock of heritage breed chickens that enjoy free range of our pastures alongside our goats. The hens forage naturally for insects and plants, supplemented with organic feed. This natural diet creates eggs with deep golden yolks and exceptional flavor that store-bought eggs simply can't match.",
          benefits: [
            "Eggs from hens raised with outdoor access and natural foraging",
            "No antibiotics or hormones",
            "Rich in omega-3 fatty acids and vitamin E",
            "Vibrant yolks with superior taste"
          ],
          availability: "Available weekly, year-round with seasonal variations in quantity.",
          price: "$6 per dozen",
          orderLink: "#order-form",
          link: "#fresh-eggs"
        }
      ]
    }
  },
  methods: {
    openModal(index) {
      this.selectedProduct = index;
      this.quantity = 1;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    },
    closeModal() {
      this.selectedProduct = null;
      document.body.style.overflow = ''; // Restore scrolling
    },
    incrementQuantity() {
      this.quantity += 1;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    addToCart(product) {
      cartStore.addItem(product);
      this.$emit('cart-updated');
      
      // Show brief notification
      this.showNotification(`${product.name} added to cart!`);
    },
    addToCartFromModal() {
      const product = this.products[this.selectedProduct];
      cartStore.addItem(product, this.quantity);
      this.$emit('cart-updated');
      
      // Show notification and close modal
      this.showNotification(`${this.quantity} × ${product.name} added to cart!`);
      this.closeModal();
    },
    showNotification(message) {
      // We'll implement this notification system in the main App.vue
      this.$emit('show-notification', message);
    }
  }
}
</script>

<style scoped>
.products-section {
  background-color: rgb(249, 246, 240);
  padding: 4rem 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

/* Make product grid responsive */
@media (max-width: 992px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 576px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .product-card {
    max-width: 100%;
  }
  
  .product-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .view-btn, .cart-btn {
    width: 100%;
  }
}

/* Make modal responsive */
@media (max-width: 768px) {
  .modal-content {
    width: 90%;
    max-width: 90%;
    padding: 1.5rem;
  }
  
  .modal-body {
    flex-direction: column;
  }
  
  .modal-image {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .modal-details {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .modal-content {
    width: 95%;
    padding: 1rem;
  }
  
  .modal-header h2 {
    font-size: 1.5rem;
  }
  
  .cta-section {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .price-tag {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 992px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 576px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .product-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .view-btn, .cart-btn {
    width: 100%;
    padding: 0.75rem 0;
  }
  
  /* Modal responsiveness */
  .modal-content {
    width: 95%;
    max-height: 90vh;
    padding: 1rem;
  }
  
  .modal-body {
    flex-direction: column;
  }
  
  .modal-image {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
  
  .modal-details {
    width: 100%;
  }
  
  .cta-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-card h3 {
  color: rgb(95, 141, 78);
  margin: 1rem;
}

.product-card p {
  color: rgb(102, 102, 102);
  margin: 0 1rem 1rem;
  font-size: 0.9rem;
}

.btn {
  background-color: rgb(142, 58, 60);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 1rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-family: inherit;
}

.btn:hover {
  background-color: rgb(122, 38, 40);
}

/* Modal Styles */
.product-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  font-weight: bold;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  z-index: 10;
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.modal-header h2 {
  color: rgb(95, 141, 78);
  margin: 0;
  font-size: 2rem;
}

.modal-body {
  display: flex;
  padding: 0;
}

.modal-image {
  flex: 0.8;
  max-width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-image img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.modal-details {
  flex: 2;
  padding: 2rem;
}

.modal-details h3 {
  color: rgb(142, 58, 60);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.modal-details p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #444;
}

.benefits-list {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.benefits-list li {
  margin-bottom: 0.5rem;
  position: relative;
  line-height: 1.4;
}

.availability {
  margin-bottom: 1.5rem;
  padding: 0.8rem;
  background-color: rgba(95, 141, 78, 0.1);
  border-radius: 4px;
}

.cta-section {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-tag {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(142, 58, 60);
  margin: 0;
}

.order-btn {
  background-color: rgb(142, 58, 60);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 600;
}

.order-btn:hover {
  background-color: rgb(122, 38, 40);
  transform: translateY(-2px);
}

.product-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0 1rem 1rem;
}

.view-btn, .cart-btn {
  flex: 1;
  padding: 0.5rem;
  min-width: 100px;
}

.view-btn {
  background-color: rgb(95, 141, 78);
}

.view-btn:hover {
  background-color: rgb(75, 121, 58);
}

.cart-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.cart-icon {
  font-size: 1.1rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quantity-btn:hover {
  background-color: #f0f0f0;
}

.quantity {
  margin: 0 10px;
  font-size: 1.2rem;
  min-width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .modal-body {
    flex-direction: column;
  }
  
  .modal-image {
    max-width: 100%;
    height: 300px;
  }
  
  .cta-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
<template>
  <section id="hero" class="hero-section">
    <div class="hero-content">
      <h1>Welcome to Greyhold Ranch</h1>
      <p>Premium goat farm in Las Cruces, New Mexico</p>
      <div class="hero-buttons">
        <a href="#about" class="btn primary-btn">About Us</a>
        <a href="#gallery" class="btn secondary-btn">See Our Goats</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  background-image: url('https://images.pexels.com/photos/248880/pexels-photo-248880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 2rem;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero-content h1 {
  font-size: 4.5rem;
  margin-bottom: 1rem;
  color: rgb(249, 246, 240);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 700;
}

.hero-content p {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: rgb(237, 224, 200);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.btn {
  padding: 0.85rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.primary-btn {
  background-color: rgb(142, 58, 60);
  color: white;
  border: 2px solid rgb(142, 58, 60);
}

.primary-btn:hover {
  background-color: rgb(122, 38, 40);
  border-color: rgb(122, 38, 40);
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.secondary-btn {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.secondary-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

@media (max-width: 992px) {
  .hero-content {
    max-width: 80%;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 70vh;
  }
  
  .hero-content {
    max-width: 90%;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-content p {
    font-size: 1.4rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .hero-content h1 {
    font-size: 1.75rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .cta-button {
    padding: 0.75rem 1.5rem;
  }
}
</style>
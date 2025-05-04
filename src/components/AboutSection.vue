<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <div class="section-header">
            <h2>About Greyhold Ranch</h2>
            <div class="divider"></div>
          </div>
          
          <div class="about-story">
            <p>Nestled in the scenic landscapes of Las Cruces, New Mexico, Greyhold Ranch has been a family-owned operation for over three generations. Our commitment to sustainable farming practices and ethical animal husbandry has made us a trusted name in the local agricultural community.</p>
            
            <p>We specialize in raising premium goat breeds, carefully selected for their superior genetics, temperament, and productivity. Every animal at Greyhold Ranch receives individualized care, ensuring their health and wellbeing throughout their lives with us.</p>
            
            <div class="about-values">
              <div class="value-card">
                <div class="value-icon">🌱</div>
                <h3>Sustainability</h3>
                <p>Our farm employs regenerative agriculture techniques that protect the soil, conserve water, and promote biodiversity.</p>
              </div>
              
              <div class="value-card">
                <div class="value-icon">💧</div>
                <h3>Quality</h3>
                <p>From our breeding stock to our dairy products, we maintain the highest standards for everything produced at Greyhold Ranch.</p>
              </div>
              
              <div class="value-card">
                <div class="value-icon">🤝</div>
                <h3>Community</h3>
                <p>We believe in supporting our local community through educational programs and partnerships with area businesses.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-images">
          <div class="image-container main-image">
            <img src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Greyhold Ranch landscape">
          </div>
          <div class="image-container secondary-images">
            <img src="https://images.pexels.com/photos/325257/pexels-photo-325257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Ranch barn">
            <img src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Goat at Greyhold Ranch">
          </div>
        </div>
      </div>
      
      <div class="stats-container">
        <div class="stat-item">
          <h3>35+</h3>
          <p>Years Experience</p>
        </div>
        <div class="stat-item">
          <h3>200+</h3>
          <p>Goats Raised</p>
        </div>
        <div class="stat-item">
          <h3>15+</h3>
          <p>Premium Products</p>
        </div>
        <div class="stat-item">
          <h3>50+</h3>
          <p>Acres of Land</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style scoped>
.about-section {
  padding: 6rem 0;
  background-color: rgb(237, 224, 200);
  position: relative;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="1" fill="rgba(122, 91, 62, 0.1)"/></svg>');
  background-repeat: repeat;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.about-content {
  display: flex;
  gap: 4rem;
  margin-bottom: 4rem;
}

.about-text {
  flex: 1;
}

.section-header {
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2.8rem;
  color: rgb(95, 141, 78);
  margin-bottom: 1rem;
}

.divider {
  width: 100px;
  height: 3px;
  background-color: rgb(122, 91, 62);
  margin-bottom: 1.5rem;
}

.about-story p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgb(51, 51, 51);
  margin-bottom: 1.5rem;
}

.about-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.value-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  color: rgb(95, 141, 78);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.value-card p {
  font-size: 0.95rem;
  color: rgb(102, 102, 102);
  line-height: 1.5;
}

.about-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-container {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.main-image {
  height: 300px;
}

.secondary-images {
  display: flex;
  gap: 1rem;
  height: 200px;
}

.secondary-images img {
  flex: 1;
  height: 100%;
  width: 50%;
  object-fit: cover;
}

.about-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  border-right: 1px solid rgba(0,0,0,0.1);
}

.stat-item:last-child {
  border-right: none;
}

.stat-item h3 {
  font-size: 2.5rem;
  color: rgb(142, 58, 60);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.stat-item p {
  color: rgb(102, 102, 102);
  font-size: 1.1rem;
}

@media (max-width: 1024px) {
  .about-content {
    flex-direction: column;
  }
  
  .about-values {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-item:nth-child(2) {
    border-right: none;
  }
}

@media (max-width: 768px) {
  .about-values {
    grid-template-columns: 1fr;
  }
  
  .secondary-images {
    flex-direction: column;
    height: auto;
  }
  
  .secondary-images img {
    width: 100%;
    height: 200px;
  }
  
  .stats-container {
    grid-template-columns: 1fr;
  }
  
  .stat-item {
    border-right: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  
  .stat-item:last-child {
    border-bottom: none;
  }
}

@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
  }
  
  .about-image {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
    max-height: 400px;
  }
  
  .about-text {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .about-image {
    max-height: 300px;
  }
}
</style>
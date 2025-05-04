<template>
  <section id="gallery" class="section gallery-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Goat Breeds</h2>
        <p class="section-description">Discover our premium goat breeds raised with care in the beautiful landscapes of New Mexico</p>
      </div>
      
      <div class="featured-breeds">
        <div v-for="(breed, index) in featuredBreeds" :key="'featured-'+index" class="featured-breed">
          <div class="breed-image">
            <img :src="breed.image" :alt="breed.breed">
          </div>
          <div class="breed-details">
            <h3>{{ breed.breed }}</h3>
            <p class="breed-origin">Origin: {{ breed.origin }}</p>
            <p class="breed-description">{{ breed.description }}</p>
            <ul class="breed-traits">
              <li v-for="(trait, i) in breed.traits" :key="i">{{ trait }}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="gallery-grid">
        <div v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
          <img :src="image.url" :alt="image.caption">
          <div class="caption">
            <p>{{ image.caption }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      featuredBreeds: [
        {
          breed: "Alpine",
          image: "https://placehold.co/600x400/e9d8c2/333333?text=Alpine+Goat",
          origin: "French Alps",
          description: "Alpine goats are medium to large-sized animals with erect ears and straight or dished faces. They're known for their hardiness, adaptability and excellent milk production.",
          traits: ["Excellent milk production", "Adaptable to various climates", "Alert temperament", "Strong legs for rough terrain"]
        },
        {
          breed: "Saanen",
          image: "https://placehold.co/600x400/f5f5f5/333333?text=Saanen+Goat", 
          origin: "Saanen Valley, Switzerland",
          description: "Saanen goats are the largest dairy goat breed. They're pure white or cream-colored with short, fine coats and are prized for their high milk yield.",
          traits: ["High milk yield", "Docile temperament", "Long lactation periods", "Excellent for commercial dairy"]
        },
        {
          breed: "Boer",
          image: "https://placehold.co/600x400/e8c4b8/333333?text=Boer+Goat",
          origin: "South Africa",
          description: "Boer goats are a premier meat goat breed with distinctive white bodies and red heads. They're known for rapid growth, excellent meat quality and hardy constitutions.",
          traits: ["Excellent meat production", "Fast growth rate", "Hardy and disease-resistant", "Good maternal instincts"]
        },
        {
          breed: "Nigerian Dwarf",
          image: "https://placehold.co/600x400/d8e4c3/333333?text=Nigerian+Dwarf+Goat",
          origin: "West Africa",
          description: "Nigerian Dwarf goats are small dairy goats that stand no more than 23 inches tall. Despite their small size, they produce milk with a higher butterfat content than most dairy goat breeds.",
          traits: ["High butterfat milk", "Friendly temperament", "Small size, ideal for smaller properties", "Multiple color variations"]
        }
      ],
      galleryImages: [
        {
          url: "https://placehold.co/600x400/e5e5e5/333333?text=Goats+in+Pasture",
          caption: "Our farm's goats enjoy fresh pasture daily"
        },
        {
          url: "https://placehold.co/600x400/e5e5e5/333333?text=Natural+Environment",
          caption: "Our goats are raised in a natural environment"
        },
        {
          url: "https://placehold.co/600x400/e5e5e5/333333?text=Baby+Goats",
          caption: "Baby goats enjoying the morning sun"
        },
        {
          url: "https://placehold.co/600x400/e5e5e5/333333?text=Healthy+Herd",
          caption: "Our herd is carefully monitored for health and happiness"
        }
      ]
    }
  }
}
</script>

<style scoped>
.gallery-section {
  background-color: rgb(249, 246, 240);
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.8rem;
  color: rgb(95, 141, 78);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: rgb(122, 91, 62);
}

.section-description {
  font-size: 1.2rem;
  color: rgb(102, 102, 102);
  max-width: 700px;
  margin: 0 auto;
}

.featured-breeds {
  margin-bottom: 4rem;
}

.featured-breed {
  display: flex;
  margin-bottom: 3rem;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.featured-breed:nth-child(even) {
  flex-direction: row-reverse;
}

.breed-image {
  flex: 1;
  min-height: 400px;
}

.breed-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.breed-details {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.breed-details h3 {
  font-size: 2rem;
  color: rgb(95, 141, 78);
  margin-bottom: 0.5rem;
}

.breed-origin {
  font-style: italic;
  color: rgb(122, 91, 62);
  margin-bottom: 1rem;
}

.breed-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: rgb(51, 51, 51);
}

.breed-traits {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.breed-traits li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.95rem;
  color: rgb(102, 102, 102);
}

.breed-traits li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: rgb(142, 58, 60);
  font-weight: bold;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 280px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 1.5rem 1rem 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .caption {
  transform: translateY(0);
}

@media (max-width: 992px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .featured-breed, .featured-breed:nth-child(even) {
    flex-direction: column;
  }
  
  .breed-image {
    min-height: 300px;
  }
  
  .breed-traits {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
  }
}
</style>
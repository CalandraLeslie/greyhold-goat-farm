<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you! Reach out with any questions about our goats or products.</p>
      </div>
      
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info-text">
              <h3>Location</h3>
              <p>1234 Ranch Road<br>Las Cruces, NM 88001</p>
            </div>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="info-text">
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
              <p>Mon-Fri: 8am-5pm</p>
            </div>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-text">
              <h3>Email</h3>
              <p>info@greyholdranch.com</p>
              <p>orders@greyholdranch.com</p>
            </div>
          </div>
          
          <div class="social-links">
            <h3>Follow Us</h3>
            <div class="social-icons">
              <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div class="ranch-hours">
            <h3>Ranch Hours</h3>
            <table class="hours-table">
              <tr>
                <td>Monday - Friday:</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Saturday:</td>
                <td>10:00 AM - 4:00 PM</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>Closed</td>
              </tr>
            </table>
            <p class="tour-note">* Farm tours available by appointment</p>
          </div>
        </div>
        
        <div class="contact-form-container">
          <form class="contact-form">
            <div class="form-header">
              <h3>Send Us a Message</h3>
            </div>
            
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name">
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address">
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" name="subject">
                <option value="">Select a subject</option>
                <option value="products">Product Inquiry</option>
                <option value="goats">Goat Purchases</option>
                <option value="tours">Farm Tours</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Type your message here"></textarea>
            </div>
            
            <div class="form-group form-checkbox">
              <input type="checkbox" id="newsletter" name="newsletter">
              <label for="newsletter">Subscribe to our newsletter</label>
            </div>
            
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
      
      <div class="map-container">
        <div class="map-overlay">
          <div class="map-text">
            <h3>Visit Our Ranch</h3>
            <p>Click to view map</p>
          </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108234.73400131856!2d-106.80587398578923!3d32.3149652818222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86de1face19b4573%3A0x6e0777faa582210!2sLas%20Cruces%2C%20NM!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // Component logic
}
</script>

<style scoped>
.contact-section {
  padding: 6rem 0;
  background-color: rgb(249, 246, 240);
  position: relative;
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

.section-header p {
  font-size: 1.2rem;
  color: rgb(102, 102, 102);
  max-width: 700px;
  margin: 0 auto;
}

.contact-container {
  display: flex;
  gap: 2rem;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-form-container {
  flex: 1;
}

.info-card {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.info-icon {
  font-size: 1.8rem;
  color: rgb(142, 58, 60);
  margin-right: 1.5rem;
  width: 50px;
  height: 50px;
  background-color: rgba(142, 58, 60, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-text h3 {
  color: rgb(95, 141, 78);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.info-text p {
  color: rgb(102, 102, 102);
  line-height: 1.5;
  margin: 0;
}

.social-links {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.social-links h3 {
  color: rgb(95, 141, 78);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(142, 58, 60);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: rgb(122, 38, 40);
  transform: translateY(-3px);
}

.ranch-hours {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.ranch-hours h3 {
  color: rgb(95, 141, 78);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.hours-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 0.5rem;
}

.hours-table td {
  padding: 0.5rem 0;
  color: rgb(102, 102, 102);
}

.hours-table td:first-child {
  font-weight: 600;
}

.tour-note {
  font-style: italic;
  font-size: 0.9rem;
  color: rgb(142, 58, 60);
}

.contact-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.form-header {
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-header h3 {
  font-size: 1.8rem;
  color: rgb(95, 141, 78);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: rgb(51, 51, 51);
  font-weight: 600;
}

.form-group input, 
.form-group select, 
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 1rem;
  color: rgb(51, 51, 51);
  transition: border-color 0.3s ease;
}

.form-group input:focus, 
.form-group select:focus, 
.form-group textarea:focus {
  border-color: rgb(95, 141, 78);
  outline: none;
}

.form-checkbox {
  display: flex;
  align-items: center;
}

.form-checkbox input {
  width: auto;
  margin-right: 0.5rem;
}

.form-checkbox label {
  margin-bottom: 0;
}

.submit-btn {
  background-color: rgb(142, 58, 60);
  color: white;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background-color: rgb(122, 38, 40);
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.map-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(95, 141, 78, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.map-overlay:hover {
  opacity: 0;
}

.map-text {
  text-align: center;
  color: white;
}

.map-text h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 1024px) {
  .contact-container {
    flex-direction: column;
  }
}

@media (max-width: 992px) {
  .contact-container {
    flex-direction: column;
  }
  
  .contact-info {
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2.2rem;
  }
  
  .info-card {
    flex-direction: column;
    text-align: center;
  }
  
  .info-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

@media (max-width: 576px) {
  .input-row {
    flex-direction: column;
  }
  
  .input-group {
    width: 100%;
  }
  
  .submit-button {
    width: 100%;
  }
}
</style>
<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div class="contact-info">
        <p>Contact us: info@greyholdranch.com</p>
        <p>Location: Las Cruces, New Mexico</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Greyhold Ranch. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: rgb(237, 224, 200);
  color: rgb(51, 51, 51);
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.social-media a {
  margin: 0 10px;
  color: rgb(142, 58, 60);
  text-decoration: none;
}

.social-media a:hover {
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 10px;
  font-size: 0.9em;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-column {
    min-width: 100%;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>
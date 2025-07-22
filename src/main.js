import '../AIXORA/assets/js/tiny-slider.js'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="logo">
          <h1>My Website</h1>
        </div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="main">
      <section class="hero">
        <div class="hero-content">
          <h2>Welcome to Our Amazing Website</h2>
          <p>Discover innovative solutions and exceptional experiences tailored just for you.</p>
          <button class="cta-button">Get Started</button>
        </div>
        <div class="hero-image">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Modern workspace" />
        </div>
      </section>

      <section class="features">
        <h3>Why Choose Us?</h3>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h4>Fast & Reliable</h4>
            <p>Lightning-fast performance with 99.9% uptime guarantee.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h4>Beautiful Design</h4>
            <p>Stunning, modern designs that captivate your audience.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h4>Secure & Safe</h4>
            <p>Enterprise-grade security to protect your data.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
  </div>
`

// Add interactive functionality
document.querySelector('.cta-button').addEventListener('click', () => {
  alert('Welcome! Ready to get started?')
})

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href').substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  })
})
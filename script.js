// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
});

// Mobile menu toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Form submit
function submitForm(e) {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
  e.target.reset();
}

// Auto-select package from URL param (contact page)
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const pkg = params.get('pkg');
  if (pkg) {
    const sel = document.getElementById('pkgSelect');
    if (sel) {
      for (let opt of sel.options) {
        if (opt.value === pkg || opt.text === pkg) { opt.selected = true; break; }
      }
    }
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.pkg-card, .feature-card, .dest-card, .testi-card, .itinerary-day, .highlight-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

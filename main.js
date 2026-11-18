document.addEventListener('DOMContentLoaded', function() {
  // Toggle mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('.main-nav ul');

  navToggle.addEventListener('click', function() {
    navUl.classList.toggle('show');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // close nav on mobile after click
      if (navUl.classList.contains('show')) {
        navUl.classList.remove('show');
      }
    });
  });

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
fetch('http://localhost:5000/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Alice', email: 'alice@mail.com', message: 'Hi!' })
})


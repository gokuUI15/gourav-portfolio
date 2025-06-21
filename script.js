// script.js

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px 15px';
darkModeToggle.style.backgroundColor = '#1e90ff';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
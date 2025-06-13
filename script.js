// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Horizontal scroll for pet profiles with arrow buttons
document.addEventListener('DOMContentLoaded', function () {
  const profilesList = document.getElementById('petProfilesList');
  const leftBtn = document.querySelector('.profiles-scroll-container .scroll-btn.left');
  const rightBtn = document.querySelector('.profiles-scroll-container .scroll-btn.right');
  const scrollAmount = 260; // approx width of card + gap

  if (leftBtn && rightBtn && profilesList) {
    leftBtn.addEventListener('click', function () {
      profilesList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', function () {
      profilesList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});

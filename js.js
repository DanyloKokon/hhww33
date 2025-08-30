const images = document.querySelectorAll('img[data-src]');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.onload = () => img.classList.add('loaded');
      obs.unobserve(img);
    }
  });
}, {
  threshold: 0.5
});

images.forEach(img => observer.observe(img));

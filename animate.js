// Scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.post-card, .platform, .info-card, .gig, .testi, .stat');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.animationDelay = (i % 4 * 0.08) + 's';
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
});

window.addEventListener('load', () => {
  gsap.from('.header', { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out' });
  gsap.from('.hero-text > *', { y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.1 });
  gsap.from('.hero-panel', { x: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 });
  gsap.from('.service-card', { y: 30, opacity: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out', delay: 0.3 });
  gsap.from('.form-panel', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4 });
});

// Form submission handled by formsubmit.co

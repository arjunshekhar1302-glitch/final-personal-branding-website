const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const revealElements = document.querySelectorAll('[data-reveal]');

menuToggle?.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

window.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
    navbar.classList.remove('open');
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => observer.observe(element));

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navbar.classList.remove('open');
    }
  });
});

const counters = document.querySelectorAll('.stat-card strong');

if (counters.length) {
  const counterObserver = new IntersectionObserver(
    (entries, observerRef) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const value = entry.target.textContent.replace('+', '');
        const endValue = parseInt(value, 10) || 0;
        let startValue = 0;
        const step = Math.max(1, Math.ceil(endValue / 40));
        const updateCounter = () => {
          startValue += step;
          entry.target.textContent = `${startValue}${value.includes('%') ? '%' : '+'}`;
          if (startValue < endValue) {
            requestAnimationFrame(updateCounter);
          } else {
            entry.target.textContent = value.includes('%') ? `${endValue}%` : `${endValue}+`;
          }
        };
        updateCounter();
        observerRef.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((counter) => counterObserver.observe(counter));
}

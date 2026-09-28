// Highlight mục đang xem trên sidebar
const links = Array.from(document.querySelectorAll('nav.side a.lnk'));
const sections = links
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    }
  });
}, { rootMargin: '-10% 0px -80% 0px' });

sections.forEach(s => observer.observe(s));

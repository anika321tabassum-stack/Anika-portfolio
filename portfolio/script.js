// ===== Anika Tabassum Portfolio — interactions =====

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Full-screen nav toggle ---- */
  const menuBtn = document.getElementById('menuBtn');
  const overlayNav = document.getElementById('overlayNav');

  function closeNav(){
    overlayNav.classList.remove('open');
    overlayNav.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openNav(){
    overlayNav.classList.add('open');
    overlayNav.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  menuBtn.addEventListener('click', () => {
    const isOpen = overlayNav.classList.contains('open');
    isOpen ? closeNav() : openNav();
  });

  overlayNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));
  } else {
    // Fallback: just show everything
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

});

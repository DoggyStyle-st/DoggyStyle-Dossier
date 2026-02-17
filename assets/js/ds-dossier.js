(() => {
  const d = new Date();
  const stamp = d.toLocaleDateString('de-DE');
  const t1 = document.getElementById('stamp');
  const t2 = document.getElementById('stamp2');
  if (t1) t1.textContent = `Stand: ${stamp}`;
  if (t2) t2.textContent = stamp;

  const url = new URL(window.location.href);
  const b = url.searchParams.get('build');
  if (b) {
    const el = document.getElementById('buildVal');
    if (el) el.textContent = `DS-DOSSIER ${b}`;
  }
  // scrollSpy: highlight active menu item and auto-scroll menu (iPad-friendly)
  const nav = document.querySelector('.side-nav');
  const navLinks = Array.from(document.querySelectorAll('.side-nav a.nav-item[href^="#"]'));
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  let lastActive = null;
  const setActive = (id) => {
    const a = navLinks.find(x => x.getAttribute('href') === `#${id}`);
    if (!a) return;
    if (lastActive) lastActive.classList.remove('active');
    a.classList.add('active');
    lastActive = a;
    // keep active item in view inside sidebar
    const r = a.getBoundingClientRect();
    const nr = nav.getBoundingClientRect();
    if (r.top < nr.top + 40 || r.bottom > nr.bottom - 40) {
      a.scrollIntoView({block:'center', inline:'nearest'});
    }
  };

  const scrollSpy = () => {
    // pick the last section whose top is above a threshold
    const y = window.scrollY || document.documentElement.scrollTop;
    const threshold = y + 120; // header offset
    let current = sections[0];
    for (const s of sections) {
      if (!s) continue;
      const top = s.offsetTop;
      if (top <= threshold) current = s;
    }
    if (current && current.id) setActive(current.id);
  };

  window.addEventListener('scroll', scrollSpy, {passive:true});
  window.addEventListener('resize', scrollSpy);
  setTimeout(scrollSpy, 150);

})();
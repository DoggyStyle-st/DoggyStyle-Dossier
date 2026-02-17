(() => {
  const d = new Date();
  const stamp = d.toLocaleDateString('de-DE');
  const t1 = document.getElementById('stamp');
  const t2 = document.getElementById('stamp2');
  if (t1) t1.textContent = `Stand: ${stamp}`;
  if (t2) t2.textContent = stamp;

  const btn = document.getElementById('btnPrint');
  if (btn) btn.addEventListener('click', () => window.print());

  const url = new URL(window.location.href);
  const b = url.searchParams.get('build');
  if (b) {
    const el = document.getElementById('buildVal');
    if (el) el.textContent = `DS-DOSSIER ${b}`;
  }
})();
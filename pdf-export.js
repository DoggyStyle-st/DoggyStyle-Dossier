/* Doggy Style Dossier – PDF export (browser print-to-PDF) */
(function () {
  function onReady(fn){
    if(document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  onReady(function () {
    var btn = document.getElementById("exportPdfBtn");
    if(!btn) return;
    btn.addEventListener("click", function () {
      try { window.scrollTo({ top: 0, behavior: "instant" }); } catch(e){ window.scrollTo(0,0); }
      setTimeout(function(){ window.print(); }, 150);
    });
  });
})();

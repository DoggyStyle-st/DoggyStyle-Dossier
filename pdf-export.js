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
      // Expand all <details> blocks so the print/PDF contains the full content.
      var details = Array.prototype.slice.call(document.querySelectorAll('details'));
      var prevOpen = details.map(function(d){ return !!d.open; });
      details.forEach(function(d){ d.open = true; });

      function restoreDetails(){
        try{
          details.forEach(function(d,i){ d.open = !!prevOpen[i]; });
        }catch(e){}
      }

      // iOS Safari: 'afterprint' is not 100% reliable, so we use both event + fallback.
      function onAfterPrint(){
        window.removeEventListener('afterprint', onAfterPrint);
        restoreDetails();
      }
      window.addEventListener('afterprint', onAfterPrint);

      try { window.scrollTo({ top: 0, behavior: "instant" }); } catch(e){ window.scrollTo(0,0); }
      setTimeout(function(){ window.print(); }, 150);
      setTimeout(restoreDetails, 2500);
    });
  });
})();

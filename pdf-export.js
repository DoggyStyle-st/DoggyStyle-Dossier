
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.createElement("button");
    btn.innerText = "Als PDF exportieren";
    btn.id = "pdfExportBtn";

    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "12px 18px";
    btn.style.background = "#F5B62E";
    btn.style.color = "#000";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.fontWeight = "bold";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
    btn.style.zIndex = "9999";

    btn.addEventListener("click", function () {
        window.print();
    });

    document.body.appendChild(btn);
});

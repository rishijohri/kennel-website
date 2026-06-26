/* Kennel showcase — light interactions */
(function () {
  "use strict";

  /* ---- Scroll reveal ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- Hero canvas: draw edges + scale stage to fit ---- */
  var edgesSvg = document.getElementById("edges");
  if (edgesSvg) {
    var EDGES = [
      { d: "M99 60 C 99 96, 226 84, 226 118", mint: false },   // root -> impl
      { d: "M226 200 C 226 250, 93 250, 93 296", mint: false }, // impl -> test
      { d: "M226 200 C 226 250, 330 250, 330 296", mint: true }, // impl -> refactor
    ];
    EDGES.forEach(function (e) {
      var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", e.d);
      if (e.mint) p.setAttribute("class", "mint");
      edgesSvg.appendChild(p);
    });
  }

  var mock = document.getElementById("canvasMock");
  var stage = document.getElementById("canvasStage");
  function layoutStage() {
    if (!mock || !stage) return;
    var avail = mock.clientWidth - 36; // mock horizontal padding (18 + 18)
    var scale = Math.min(1, avail / 440);
    stage.style.transform = "translateX(-50%) scale(" + scale + ")";
    mock.style.minHeight = 420 * scale + 36 + "px";
  }
  layoutStage();
  window.addEventListener("resize", layoutStage, { passive: true });
  window.addEventListener("load", layoutStage);

  /* ---- Play hero video into view once (muted, best-effort) ---- */
  var vid = document.querySelector("#see-it video");
  if (vid && !reduce && "IntersectionObserver" in window) {
    var vo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var pr = vid.play();
            if (pr && pr.catch) pr.catch(function () {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    vo.observe(vid);
  }
})();

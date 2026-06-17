// Animate bar fills + reveal-on-scroll when elements enter the viewport.
(function () {
  "use strict";

  function animateBars(scope) {
    scope.querySelectorAll(".bar-fill").forEach(function (el) {
      var pct = el.getAttribute("data-pct");
      if (pct) requestAnimationFrame(function () { el.style.width = pct + "%"; });
    });
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      animateBars(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.18 });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".reveal, .chart").forEach(function (el) {
      io.observe(el);
    });
    // Set current year in footer.
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();

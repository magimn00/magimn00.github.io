(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var paints = document.querySelectorAll('[data-paint]');
  if (!reduce && paints.length) {
    var ticking = false;
    var run = function () {
      var y = window.scrollY || 0;
      for (var i = 0; i < paints.length; i++) {
        var sp = parseFloat(paints[i].getAttribute('data-paint')) || 0;
        paints[i].style.translate = '0px ' + (-y * sp).toFixed(1) + 'px';
      }
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(run); }
    }, { passive: true });
    run();
  }

  function observe(sel, apply) {
    var els = document.querySelectorAll(sel);
    if (!els.length) return;
    if (!('IntersectionObserver' in window) || reduce) {
      for (var i = 0; i < els.length; i++) apply(els[i]);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        apply(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    for (var j = 0; j < els.length; j++) io.observe(els[j]);
    setTimeout(function () { for (var k = 0; k < els.length; k++) apply(els[k]); }, 2500);
  }

  observe('[data-reveal]', function (el) { el.classList.add('is-visible'); });
  observe('[data-brush]', function (el) { setTimeout(function () { el.classList.add('is-painted'); }, 160); });
  observe('[data-rule]', function (el) { setTimeout(function () { el.classList.add('is-drawn'); }, 90); });
})();
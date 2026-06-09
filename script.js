// VERTEX SURFACES — shared scripts

// Mobile menu toggle
(function () {
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', false);
      });
    });
  }
})();

// Scroll reveal
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

// Collections filter (collections page only)
(function () {
  var grid = document.getElementById('grid');
  var chips = document.querySelectorAll('.chip');
  if (!grid || !chips.length) return;
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (x) { x.classList.remove('active'); });
      c.classList.add('active');
      var cat = c.dataset.cat;
      grid.querySelectorAll('.card').forEach(function (card) {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
})();

// Contact form (contact page only) — placeholder behaviour
(function () {
  var btn = document.getElementById('send');
  if (!btn) return;
  btn.addEventListener('click', function () {
    btn.textContent = 'Thanks — we\u2019ll be in touch';
    btn.style.background = 'var(--serpentine)';
    btn.style.borderColor = 'var(--serpentine)';
  });
})();

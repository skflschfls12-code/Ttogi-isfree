(function () {
  // 표는 휴대폰에서 옆으로 스크롤되도록 감싸기
  document.querySelectorAll('.prose table').forEach(function (t) {
    var w = document.createElement('div');
    w.className = 'table-wrap';
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 글 블록이 화면에 들어오면 하나씩 '짜잔' 하고 나타나게
  var items = document.querySelectorAll('.reveal, .prose > *');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('shown'); });
  } else {
    items.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('shown'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  // 스크롤하면 대표 사진이 살짝 흐려지고 커지게
  var img = document.getElementById('heroImg');
  var hero = document.getElementById('hero');
  if (!img || reduce) return;
  var ticking = false;
  function update() {
    var p = Math.min(window.scrollY / hero.offsetHeight, 1);
    img.style.transform = 'scale(' + (1 + p * 0.08) + ')';
    img.style.filter = 'blur(' + (p * 6) + 'px) brightness(' + (1 - p * 0.15) + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
})();

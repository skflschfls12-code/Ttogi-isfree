(function () {
  // 마우스가 있는 기기에서만, 움직임 줄이기 설정이 꺼져 있을 때만
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  dot.setAttribute('aria-hidden', 'true');
  document.body.appendChild(dot);

  var x = -100, y = -100, cx = x, cy = y;
  var clickable = 'a, button, label, input, [role="button"]';

  document.addEventListener('mousemove', function (e) {
    x = e.clientX; y = e.clientY;
    if (!dot.classList.contains('on')) { cx = x; cy = y; dot.classList.add('on'); }
    dot.classList.toggle('big', !!e.target.closest(clickable));
  });
  document.addEventListener('mouseleave', function () { dot.classList.remove('on'); });
  document.addEventListener('mousedown', function () { dot.classList.add('down'); });
  document.addEventListener('mouseup', function () { dot.classList.remove('down'); });

  (function loop() {
    cx += (x - cx) * 0.2;
    cy += (y - cy) * 0.2;
    dot.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
    requestAnimationFrame(loop);
  })();
})();

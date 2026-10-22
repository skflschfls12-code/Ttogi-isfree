(function () {
  var q = document.getElementById('q');
  var cards = document.querySelectorAll('#list .card');
  var empty = document.getElementById('empty');

  function apply() {
    var term = q.value.trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (c) {
      var ok = !term || c.dataset.text.toLowerCase().indexOf(term) !== -1;
      c.hidden = !ok;
      if (ok) shown++;
    });
    empty.hidden = shown !== 0;
  }

  q.addEventListener('input', apply);
  apply();
})();

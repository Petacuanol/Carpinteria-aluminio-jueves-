// Marca sección activa leve (opcional)
(function(){
  const links = document.querySelectorAll('.nav a');
  const ids = Array.from(links).map(a => a.getAttribute('href').slice(1));
  const secs = ids.map(id => document.getElementById(id)).filter(Boolean);
  if(!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const l = document.querySelector(`.nav a[href='#${e.target.id}']`);
      if(l){
        if(e.isIntersecting){ links.forEach(x=>x.classList.remove('active')); l.classList.add('active'); }
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px', threshold:[0, 0.3, 0.6]});
  secs.forEach(s => obs.observe(s));
})();
// Aplica los enlaces del objeto CURSO_LINKS a cada botón .link
(function(){
  const links = document.querySelectorAll('.link');
  const conf = (window.CURSO_LINKS || {});
  links.forEach(btn => {
    const key = btn.getAttribute('data-key');
    const url = conf[key];
    if (url && typeof url === 'string' && url.trim().length > 0){
      btn.setAttribute('href', url);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener');
    } else {
      btn.addEventListener('click', function(e){
        e.preventDefault();
        alert('Falta configurar el enlace para este módulo. Editá el archivo config.js');
      });
    }
  });

  // Resalta sección activa en el menú al hacer scroll
  const menuLinks = document.querySelectorAll('header nav a');
  const ids = Array.from(menuLinks).map(a => a.getAttribute('href').replace('#','')).filter(Boolean);
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
  const onIntersect = entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`header nav a[href='#${id}']`);
      if(link){
        if(entry.isIntersecting){
          menuLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  };
  const obs = new IntersectionObserver(onIntersect, {rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.6]});
  sections.forEach(sec => obs.observe(sec));
})();
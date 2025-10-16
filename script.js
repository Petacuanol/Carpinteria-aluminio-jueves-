// Marca el link activo al hacer scroll y compensa header fijo
(function(){
  const links = document.querySelectorAll('.nav a');
  const ids = Array.from(links).map(a => a.getAttribute('href').slice(1));
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        links.forEach(l=>l.classList.remove('active'));
        const link = document.querySelector(`.nav a[href='#${e.target.id}']`);
        if(link) link.classList.add('active');
      }
    });
  },{rootMargin:'-40% 0px -50% 0px', threshold:[0,0.2,0.6]});
  sections.forEach(s=>obs.observe(s));
})();
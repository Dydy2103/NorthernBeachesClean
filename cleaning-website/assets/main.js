// Mobile menu toggle
const toggle = document.querySelector('[data-nav-toggle]');
const menu = document.querySelector('[data-menu]');
if (toggle && menu){
  toggle.addEventListener('click', () => menu.classList.toggle('is-open'));
}

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

(() => {
 const menuButton=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.main-nav');
 if(menuButton && nav){
  menuButton.addEventListener('click',()=>{
   const open=nav.classList.toggle('is-open');
   menuButton.setAttribute('aria-expanded',String(open));
   menuButton.querySelector('.menu-icon').innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';
  });
  nav.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',e=>{
   const dropdown=link.closest('.nav-dropdown');
   if(window.matchMedia('(max-width:760px)').matches && dropdown){
    e.preventDefault();dropdown.classList.toggle('submenu-open');
   }else if(window.matchMedia('(max-width:760px)').matches){
    nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');
    menuButton.querySelector('.menu-icon').innerHTML='<i class="fa-solid fa-bars"></i>';
   }
  }));
  nav.querySelectorAll('.submenu a').forEach(link=>link.addEventListener('click',()=>{
   nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');
   menuButton.querySelector('.menu-icon').innerHTML='<i class="fa-solid fa-bars"></i>';
  }));
 }
 document.querySelectorAll('.current-year').forEach(el=>el.textContent=new Date().getFullYear());
})();

(() => {
 const tours=[
 {name:'Char Dham Yatra',places:'Haridwar · Yamunotri · Gangotri · Kedarnath · Badrinath',price:'Enquire for Details',duration:'9 Nights / 10 Days',tag:'9 Nights / 10 Days',dest:'Spiritual Tours',type:'Spiritual',img:'images/Marigold Garlands at the Mountain Temple.webp',link:'chardham-itinerary.html'},
 {name:'Braj Spiritual Tour',places:'Vrundavan · Mathura · Gokul · Nandgaon · Barsana · Govardhan · Radhakund · Shyamkund',price:'₹ 10,500',duration:'4 Nights / 5 Days',tag:'4 Nights / 5 Days',dest:'Spiritual Tours',type:'Spiritual',img:'images/braj-spiritual-hero.webp',link:'braj-spiritual-itinerary.html'},
 {name:'Kashmir Group Tour',places:'Srinagar · Sonmarg · Gulmarg · Pahalgam · Vaishnodevi',price:'₹ 18,499',duration:'7 Nights / 8 Days',tag:'7 Nights / 8 Days',dest:'Kashmir',type:'Group Tours',img:'images/kashmir-hero.webp',link:'kashmir-itinerary.html'},
 {name:'Himachal Group Tour (by Train)',places:'Shimla · Kullu · Manali · Dalhousie · Amritsar',price:'₹ 15,499',duration:'7 Nights / 8 Days',tag:'7 Nights / 8 Days',dest:'Himachal',type:'Group Tours',img:'images/himachal-overview-snow-village.webp'},
 {name:'Himachal Group Tour (by Flight)',places:'Shimla · Kullu · Manali · Dalhousie · Khajjiar · Amritsar',price:'₹ 19,499',duration:'7 Nights / 8 Days',tag:'7 Nights / 8 Days',dest:'Himachal',type:'Group Tours',img:'images/himachal-overview-main.webp'},
 {name:'Himachal Group Tour',places:'Shimla · Khajjiar · Kullu · Amritsar · Manali · Dalhousie',price:'₹ 21,500',duration:'7 Nights / 8 Days',tag:'7 Nights / 8 Days',dest:'Himachal',type:'Group Tours',img:'images/himachal-hero.webp',link:'himachal-itinerary.html'},
 {name:'Haridwar & North India Tour',places:'Delhi · Haridwar · Dehradun · Mussoorie · Rishikesh · Mathura · Vrindavan · Gokul · Govardhan · Agra',price:'₹ 15,499',duration:'5 Nights / 6 Days',tag:'5 Nights / 6 Days',dest:'Spiritual Tours',type:'Spiritual',img:'images/haridwar-north-hero.webp',link:'haridwar-itinerary.html'},
 {name:'Nainital & Uttarakhand Tour',places:'Delhi · Nainital · Haridwar · Rishikesh · Dehradun · Mussoorie · Kainchi Dham',price:'₹ 21,999',duration:'7 Days',tag:'7 Days',dest:'Uttarakhand',type:'Group Tours',img:'images/nainital-hero.webp',link:'nainital-itinerary.html'},
 {name:'Kerala Group Tour',places:'Munnar · Thekkady · Alleppey · Kovalam',price:'₹ 16,999',duration:'7 Nights / 8 Days',tag:'7 Nights / 8 Days',dest:'Kerala',type:'Family',img:'images/Kerala Backwaters Houseboat Paradise.webp',link:'kerala-itinerary.html'}
 ];

 // Custom, consistently styled dropdowns. Native selects remain as the source of truth
 // so the existing filtering and form logic continues to work.
 function enhanceTourSelect(select){
  if(!select || select.dataset.customized==='true') return;
  select.dataset.customized='true';
  const host=select.parentElement;
  host.classList.add('gt-select-host');
  select.classList.add('gt-native-select');
  const wrap=document.createElement('div');
  wrap.className='gt-custom-select';
  const trigger=document.createElement('button');
  trigger.type='button';
  trigger.className='gt-select-trigger';
  trigger.setAttribute('aria-haspopup','listbox');
  trigger.setAttribute('aria-expanded','false');
  const value=document.createElement('span');
  value.className='gt-select-value';
  const arrow=document.createElement('i');
  arrow.className='fa-solid fa-chevron-down gt-select-arrow';
  arrow.setAttribute('aria-hidden','true');
  trigger.append(value,arrow);
  const menu=document.createElement('div');
  menu.className='gt-select-menu';
  menu.setAttribute('role','listbox');
  menu.hidden=true;
  function sync(){
   const selectedOption=select.options[select.selectedIndex];
   value.textContent=selectedOption ? selectedOption.textContent.trim() : '';
   menu.querySelectorAll('[role="option"]').forEach(option=>{
    const active=option.dataset.value===select.value;
    option.setAttribute('aria-selected',String(active));
    option.classList.toggle('is-selected',active);
   });
  }
  [...select.options].forEach(option=>{
   const item=document.createElement('button');
   item.type='button';
   item.className='gt-select-option';
   item.setAttribute('role','option');
   item.dataset.value=option.value || option.textContent.trim();
   item.textContent=option.textContent.trim();
   item.addEventListener('click',()=>{
    select.value=option.value || option.textContent.trim();
    select.dispatchEvent(new Event('change',{bubbles:true}));
    close();
    trigger.focus();
   });
   menu.append(item);
  });
  function open(){
   document.querySelectorAll('.gt-custom-select.is-open').forEach(other=>{
    if(other!==wrap){other.classList.remove('is-open');other.querySelector('.gt-select-menu').hidden=true;other.querySelector('.gt-select-trigger').setAttribute('aria-expanded','false');}
   });
   wrap.classList.add('is-open');menu.hidden=false;trigger.setAttribute('aria-expanded','true');
  }
  function close(){wrap.classList.remove('is-open');menu.hidden=true;trigger.setAttribute('aria-expanded','false');}
  trigger.addEventListener('click',()=>menu.hidden?open():close());
  trigger.addEventListener('keydown',e=>{
   if(e.key==='ArrowDown'||e.key==='Enter'||e.key===' '){e.preventDefault();open();menu.querySelector('.gt-select-option')?.focus();}
   if(e.key==='Escape')close();
  });
  menu.addEventListener('keydown',e=>{
   const options=[...menu.querySelectorAll('.gt-select-option')];
   const idx=options.indexOf(document.activeElement);
   if(e.key==='ArrowDown'){e.preventDefault();options[Math.min(idx+1,options.length-1)]?.focus();}
   if(e.key==='ArrowUp'){e.preventDefault();options[Math.max(idx-1,0)]?.focus();}
   if(e.key==='Escape'){close();trigger.focus();}
   if(e.key==='Tab')close();
  });
  select.addEventListener('change',sync);
  host.append(wrap);
  wrap.append(trigger,menu);
  sync();
 }
 ['destination-select','month-select','type-select'].forEach(id=>enhanceTourSelect(document.getElementById(id)));
 document.addEventListener('click',e=>{
  if(!e.target.closest('.gt-custom-select'))document.querySelectorAll('.gt-custom-select.is-open').forEach(w=>{
   w.classList.remove('is-open');w.querySelector('.gt-select-menu').hidden=true;w.querySelector('.gt-select-trigger').setAttribute('aria-expanded','false');
  });
 });

 const grid=document.getElementById('tour-grid'),noResults=document.querySelector('.gt-no-results');
 let selected='All';
 function render(){
  const dest=document.getElementById('destination-select').value;
  const type=document.getElementById('type-select').value;
  const month=document.getElementById('month-select').value;
  const filtered=tours.filter(t=>{
   const destMatch=(selected==='All'||t.dest===selected||(selected==='Uttarakhand'&&t.dest==='Uttarakhand'));
   const selectMatch=dest==='All'||t.dest===dest;
   const typeMatch=type==='Group Tours'||t.type===type||(type==='Spiritual'&&t.dest==='Spiritual Tours');
   return destMatch&&selectMatch&&typeMatch;
  });
  const idCounts={};
  grid.innerHTML=filtered.map((t,i)=>{const baseId=`tour-${t.dest.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;idCounts[baseId]=(idCounts[baseId]||0)+1;const cardId=idCounts[baseId]===1?baseId:`${baseId}-${idCounts[baseId]}`;return `<article id="${cardId}" class="gt-card" style="animation-delay:${i*75}ms"><div class="gt-card-photo" style="background-image:url('${t.img}')"><span>${t.tag}</span></div><div class="gt-card-info"><h3>${t.name}</h3><p>${t.places}</p><div class="gt-card-bottom"><div><strong>${t.price}</strong>${t.price.startsWith('₹')?'<small> per person</small>':''}</div><a href="${t.link||'mailto:info@rstours.com?subject='+encodeURIComponent(t.name+' Enquiry')}">View Details <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></div></article>`;}).join('');
  noResults.hidden=filtered.length>0;
 }
 document.querySelectorAll('.gt-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.gt-tabs button').forEach(b=>b.classList.toggle('active',b===btn));
  selected=btn.dataset.dest;document.getElementById('destination-select').value=selected==='All'?'All':selected;render();
 }));
 document.getElementById('tour-search').addEventListener('submit',e=>{
  e.preventDefault();selected=document.getElementById('destination-select').value;
  document.querySelectorAll('.gt-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.dest===selected));
  render();document.querySelector('.gt-packages-section').scrollIntoView({behavior:'smooth',block:'start'});
 });
 ['destination-select','type-select','month-select'].forEach(id=>document.getElementById(id).addEventListener('change',render));
 const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
 menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));menu.querySelector('.menu-icon').textContent=open?'×':'☰';});
 document.querySelectorAll('.current-year').forEach(el=>el.textContent=new Date().getFullYear());render();
 // Reveal sections as they enter the viewport.
 const revealNodes=[...document.querySelectorAll('.gt-search-wrap,.gt-packages-section,.gt-benefits,.gt-cta')];
 revealNodes.forEach(node=>node.classList.add('gt-reveal'));
 if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}
  }),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
  revealNodes.forEach(node=>revealObserver.observe(node));
 }else revealNodes.forEach(node=>node.classList.add('is-visible'));
})();

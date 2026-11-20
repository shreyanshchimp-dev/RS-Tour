(() => {
  const { photos, destinations, packages, memories, testimonials } = window.RS_DATA;
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const setBackground = (el, url, overlay='') => { el.style.backgroundImage = `${overlay ? overlay + ',' : ''}url("${url}")`; };
  setBackground($('.footer-cta'), photos.cta, 'linear-gradient(90deg,rgba(5,47,91,.94),rgba(5,47,91,.78) 55%,rgba(5,47,91,.08))');

  // Homepage hero slider: uses only images already included in this project.
  const hero = $('.hero');
  const heroSlides = [
    { image: './images/homepage-hero-himalayas.webp', eyebrow: 'Explore', title: 'Incredible India<br>and Beyond', copy: 'Well-planned group tours, family holidays and unforgettable travel experiences.', link: 'group-tours.html', label: 'Explore Group Tours' },
    { image: './images/kashmir-hero.webp', eyebrow: 'Discover', title: 'The Beauty of<br>Kashmir', copy: 'Experience serene lakes, mountain valleys and unforgettable moments.', link: 'kashmir-itinerary.html', label: 'Explore Kashmir' },
    { image: './images/Kerala Backwaters Houseboat Paradise.webp', eyebrow: 'Escape to', title: 'God’s Own<br>Country', copy: 'Cruise peaceful backwaters and discover the timeless charm of Kerala.', link: 'kerala-itinerary.html', label: 'Explore Kerala' },
    { image: './images/himachal-hero.webp', eyebrow: 'Find Your', title: 'Mountain<br>Getaway', copy: 'Breathe in the fresh mountain air on a memorable Himachal journey.', link: 'himachal-itinerary.html', label: 'Explore Himachal' },
    { image: './images/haridwar-north-hero.webp', eyebrow: 'Journey to', title: 'Sacred North<br>India', copy: 'Discover meaningful journeys through India’s spiritual heartland.', link: 'haridwar-itinerary.html', label: 'Explore North India' }
  ];
  const heroDots = $$('.hero-dots button');
  const heroHeading = $('.hero h1');
  const heroEyebrow = $('.hero .script-line');
  const heroCopyText = $('.hero-copy p');
  const heroExplore = $('.hero-actions .btn-orange');
  let heroIndex = 0, heroTimer;
  function showHeroSlide(index) {
    heroIndex = (index + heroSlides.length) % heroSlides.length;
    const slide = heroSlides[heroIndex];
    hero.style.backgroundImage = `url("${slide.image}")`;
    heroEyebrow.innerHTML = `${slide.eyebrow} <span class="flight-path">〰 <span>✈</span></span>`;
    heroHeading.innerHTML = slide.title;
    heroCopyText.textContent = slide.copy;
    heroExplore.href = slide.link;
    heroExplore.innerHTML = `${slide.label} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>`;
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === heroIndex);
      dot.setAttribute('aria-pressed', String(i === heroIndex));
    });
  }
  function startHeroTimer() {
    window.clearInterval(heroTimer);
    heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 2500);
  }
  heroDots.forEach((dot, i) => dot.addEventListener('click', () => { showHeroSlide(i); startHeroTimer(); }));
  $('.hero-prev').addEventListener('click', () => { showHeroSlide(heroIndex - 1); startHeroTimer(); });
  $('.hero-next').addEventListener('click', () => { showHeroSlide(heroIndex + 1); startHeroTimer(); });
  hero.addEventListener('mouseenter', () => window.clearInterval(heroTimer));
  hero.addEventListener('mouseleave', startHeroTimer);
  hero.addEventListener('focusin', () => window.clearInterval(heroTimer));
  hero.addEventListener('focusout', startHeroTimer);
  showHeroSlide(0);
  startHeroTimer();

  // Destination filters and staggered card entrance
  const grid = $('.destination-grid');
  const filterButtons = $$('.filter-btn');
  function renderDestinations(filter='All') {
    const list = filter === 'All' ? destinations : destinations.filter(d => (Array.isArray(d.category) ? d.category : [d.category]).includes(filter));
    grid.classList.remove('destination-grid-exit');
    grid.innerHTML = list.map((d, i) => {
      const target = d.name === 'Kashmir' ? 'kashmir-itinerary.html' : (d.name === 'Kerala' ? 'kerala-itinerary.html' : (d.name === 'Himachal' ? 'himachal-itinerary.html' : (d.name === 'Uttarakhand' ? 'nainital-itinerary.html' : (d.name === 'Dubai' ? 'group-tours.html#tour-grid' : (d.name === 'Char Dham' ? 'chardham-itinerary.html' : `group-tours.html#tour-${d.name.toLowerCase()}`)))));
      return `<a class="destination-card destination-card-enter" href="${target}" aria-label="View ${d.name} itinerary" style="background-image:linear-gradient(0deg,rgba(2,20,43,.92) 0%,rgba(2,20,43,.48) 38%,transparent 72%),url('${d.image}');animation-delay:${i*65}ms"><span><b>${d.name}</b><small>${d.detail}</small><em class="destination-itinerary-btn">View Itinerary <i class="fa-solid fa-arrow-right"></i></em></span></a>`;
    }).join('');
  }
  renderDestinations();
  filterButtons.forEach(button => button.addEventListener('click', () => {
    if (button.classList.contains('selected')) return;
    filterButtons.forEach(b => { b.classList.toggle('selected', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    grid.classList.add('destination-grid-exit');
    window.setTimeout(() => renderDestinations(button.dataset.filter), 150);
  }));

  // Packages carousel: buttons, dots, mouse drag and touch swipe
  let packageIndex = 0, dragStart = null;
  const card = $('.package-card'), image = $('.package-image img'), duration = $('.duration span');
  const title = $('.package-info h3'), route = $('.package-info p'), price = $('.package-info strong'), dots = $('.package-dots');
  function showPackage(index) {
    packageIndex = (index + packages.length) % packages.length;
    const item = packages[packageIndex];
    card.classList.remove('package-card-enter'); void card.offsetWidth; card.classList.add('package-card-enter');
    image.src = item.image; image.alt = item.title; title.textContent = item.title;
    route.textContent = item.route; price.textContent = item.price; duration.textContent = item.duration;
    $$('.package-dots button').forEach((dot, i) => dot.classList.toggle('on', i === packageIndex));
  }
  const changePackage = amount => showPackage(packageIndex + amount);
  $('.round-arrow.prev').addEventListener('click', () => changePackage(-1));
  $('.round-arrow.next').addEventListener('click', () => changePackage(1));
  dots.innerHTML = packages.map((item, i) => `<button type="button" aria-label="Show ${item.title}" class="${i===0?'on':''}"></button>`).join('');
  $$('.package-dots button').forEach((dot, i) => dot.addEventListener('click', () => showPackage(i)));
  showPackage(0);
  const stage = $('.package-stage');
  stage.addEventListener('pointerdown', e => {
    if (e.target.closest('button,a')) return;
    dragStart = {x:e.clientX, y:e.clientY};
    if (stage.setPointerCapture) stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener('pointerup', e => {
    if (!dragStart) return;
    const dx=e.clientX-dragStart.x, dy=e.clientY-dragStart.y; dragStart=null;
    if (Math.abs(dx)>48 && Math.abs(dx)>Math.abs(dy)*1.2) changePackage(dx<0?1:-1);
  });
  stage.addEventListener('pointercancel', () => dragStart=null);
  stage.addEventListener('dragstart', e => e.preventDefault());

  // Special experience photography
  $$('.special-card').forEach((el, i) => { const img=$('img',el); img.src=[photos.honeymoon,photos.ladies,photos.corporate,photos.seniors][i]; img.alt=['Couple enjoying a romantic hot-air-balloon experience','Friends travelling together on a group holiday','Colleagues collaborating during a corporate trip','Senior travellers enjoying a group holiday'][i]; });

  // Memories gallery
  $('.memory-gallery').innerHTML = memories.map((url,i) => `<div class="memory-photo photo-${i+1}"><img src="${url}" alt="RS Tours travel memory ${i+1}" loading="lazy"></div>`).join('');

  // Testimonial carousel
  let testimonialIndex=0;
  const avatar=$('.customer-avatar'), quote=$('.testimonial-copy p'), byline=$('.testimonial-copy b');
  function showTestimonial(i) {
    testimonialIndex=(i+testimonials.length)%testimonials.length;
    const item=testimonials[testimonialIndex]; avatar.src=item.avatar; avatar.alt=item.name;
    quote.textContent=`“${item.quote}”`; byline.textContent=`— ${item.name}, ${item.place}`;
  }
  const controls=$$('.testimonial-controls button');
  controls[0].addEventListener('click',()=>showTestimonial(testimonialIndex-1));
  controls[1].addEventListener('click',()=>showTestimonial(testimonialIndex+1));
  showTestimonial(0);
  document.querySelectorAll('.current-year').forEach(el=>el.textContent=new Date().getFullYear());

  // Reveal-on-scroll animation, matching the React implementation
  const nodes=$$('.section, .packages-band, .why-band, .footer-cta, .category-shell');
  nodes.forEach(node=>node.classList.add('reveal-on-scroll'));
  if ('IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    }),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
    nodes.forEach(node=>observer.observe(node));
  } else nodes.forEach(node=>node.classList.add('is-visible'));
})();

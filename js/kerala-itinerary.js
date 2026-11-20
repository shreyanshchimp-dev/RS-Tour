const expand=document.getElementById('expand-all');const days=[...document.querySelectorAll('.day-list details')];if(expand){expand.addEventListener('click',()=>{const shouldOpen=days.some(d=>!d.open);days.forEach(d=>d.open=shouldOpen);expand.innerHTML=shouldOpen?'Collapse All &nbsp;−':'Expand All &nbsp;＋'});}
// Tabbed tour information: show one content panel at a time.
const sectionLinks=[...document.querySelectorAll('.section-tabs [role="tab"]')];
const tabPanels=[...document.querySelectorAll('.tour-tab-panel[role="tabpanel"]')];
function activateTourTab(tab, moveFocus=false){
 const panelId=tab.getAttribute('aria-controls');
 sectionLinks.forEach(item=>{
  const selected=item===tab;
  item.classList.toggle('active',selected);
  item.setAttribute('aria-selected',String(selected));
  item.tabIndex=selected?0:-1;
 });
 tabPanels.forEach(panel=>{
  const selected=panel.id===panelId;
  panel.hidden=!selected;
  panel.classList.toggle('is-active',selected);
 });
 if(moveFocus) tab.focus();
}
sectionLinks.forEach((tab,index)=>{
 tab.addEventListener('click',event=>{
  event.preventDefault();
  activateTourTab(tab);
 });
 tab.addEventListener('keydown',event=>{
  let next=index;
  if(event.key==='ArrowRight') next=(index+1)%sectionLinks.length;
  else if(event.key==='ArrowLeft') next=(index-1+sectionLinks.length)%sectionLinks.length;
  else if(event.key==='Home') next=0;
  else if(event.key==='End') next=sectionLinks.length-1;
  else return;
  event.preventDefault();
  activateTourTab(sectionLinks[next],true);
 });
});
// Keep the default Overview panel visible on initial load.
if(sectionLinks.length) activateTourTab(sectionLinks[0]);

// Callback requests open a pre-addressed email with the visitor's entered details.
const callbackForm=document.getElementById('kerala-callback-form');
if(callbackForm){
 callbackForm.addEventListener('submit',event=>{
  event.preventDefault();
  const name=callbackForm.elements.name.value.trim();
  const phone=callbackForm.elements.phone.value.trim();
  if(!name||!phone)return;
  const subject=encodeURIComponent('Callback Request - Kerala With Kumarakom Tour');
  const body=encodeURIComponent(`Please call me about the Kerala With Kumarakom Honeymoon Special.\\nName: ${name}\\nMobile: ${phone}`);
  window.location.href=`mailto:info@rstours.com?subject=${subject}&body=${body}`;
 });
}

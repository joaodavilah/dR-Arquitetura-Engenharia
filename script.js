if('scrollRestoration' in history)history.scrollRestoration='manual';
if(location.hash)history.replaceState(null,'',location.pathname+location.search);
window.addEventListener('load',()=>requestAnimationFrame(()=>window.scrollTo(0,0)));

lucide.createIcons();
gsap.registerPlugin(ScrollTrigger);
const menu=document.querySelector('.mobile-menu');
document.querySelector('.menu-button').onclick=()=>{menu.classList.add('open');document.body.style.overflow='hidden'};
document.querySelector('.close-menu').onclick=()=>{menu.classList.remove('open');document.body.style.overflow=''};
document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>{menu.classList.remove('open');document.body.style.overflow='';document.querySelector(b.dataset.scroll)?.scrollIntoView({behavior:'smooth'})}));
gsap.from('.hero-kicker,.hero-title .line,.hero-copy,.hero-actions',{y:55,opacity:0,duration:1.1,stagger:.12,ease:'power4.out',delay:.15});
gsap.from('.hero-media',{clipPath:'inset(0 0 100% 0)',duration:1.35,ease:'power4.inOut',delay:.15});
gsap.to('.hero-media img',{yPercent:12,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.utils.toArray('.reveal').forEach(el=>gsap.from(el,{y:50,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%',once:true}}));
gsap.utils.toArray('.project-card').forEach((el,i)=>gsap.from(el,{y:80,opacity:0,duration:1,delay:(i%2)*.08,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
const copyStatus=document.querySelector('.copy-status');
document.querySelectorAll('.copy-contact').forEach(button=>button.addEventListener('click',async()=>{
  try{
    if(navigator.clipboard&&window.isSecureContext){
      await navigator.clipboard.writeText(button.dataset.copy);
    }else{
      const field=document.createElement('textarea');
      field.value=button.dataset.copy;field.style.position='fixed';field.style.opacity='0';
      document.body.appendChild(field);field.select();document.execCommand('copy');field.remove();
    }
    copyStatus.textContent='Contato copiado.';
  }catch{
    copyStatus.textContent='Selecione o e-mail ou telefone para copiar.';
  }
  setTimeout(()=>copyStatus.textContent='',2400);
}));

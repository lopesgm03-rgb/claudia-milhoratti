const toggle = document.querySelector('.menu');
const nav = document.querySelector('#navegacao');
if(toggle && nav){
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
}
const year = document.querySelector('#year');
if(year) year.textContent=String(new Date().getFullYear());
const config=window.SITE_CONFIG||{};
const actions=document.querySelector('#contact-actions');
const details=document.querySelector('#contact-details');
const links=[];
const phone=String(config.whatsapp||'').replace(/\D/g,'');
if(/^55\d{10,11}$/.test(phone)) links.push(['WhatsApp ↗','https://wa.me/'+phone+'?text='+encodeURIComponent('Olá, gostaria de informações sobre atendimento jurídico.')]);
const email=String(config.email||'').trim();
if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) links.push(['Enviar e-mail ↗','mailto:'+email]);
if(actions&&links.length){actions.replaceChildren();actions.classList.add('contact-actions');links.forEach(([label,url])=>{const a=document.createElement('a');a.className='button light';a.textContent=label;a.href=url;if(url.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer';}actions.append(a);});}
if(details) [config.endereco,config.horario].filter(Boolean).forEach(value=>{const p=document.createElement('p');p.textContent=value;details.append(p);});

(function(){
  var $=function(i){return document.getElementById(i)};
  var img=$('photo');

  // scrolling ticker text
  var words=['DEVELOPER','DESIGNER','CREATOR','BUILDER','PROBLEM SOLVER'],h='';
  for(var k=0;k<2;k++)words.forEach(function(w){h+='<span>'+w+'</span><span>✦</span>'});
  $('mq').innerHTML=h+h;

  // placeholder if photo file is missing
  img.addEventListener('error',function(){img.onerror=null;img.src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Cpath d='M200 40c-52 0-86 40-86 96 0 46 22 84 52 102-80 22-126 78-126 170v192h320V408c0-92-46-148-126-170 30-18 52-56 52-102 0-56-34-96-86-96z' fill='%23999' fill-opacity='.55'/%3E%3C/svg%3E"});

  // reveal + counters
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');
    e.target.querySelectorAll('[data-n]').forEach(function(el){var n=+el.dataset.n,v=0,st=Math.max(1,Math.ceil(n/40)),
      iv=setInterval(function(){v=Math.min(n,v+st);el.textContent=v+(n>=20&&n<100?'+':'');if(v>=n)clearInterval(iv)},35)});
    io.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});

  // cursor
  var cd=$('cd'),cr=$('cr'),mx=0,my=0,rx=0,ry=0;
  addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;cd.style.transform='translate('+(mx-4)+'px,'+(my-4)+'px)'});
  (function loop(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;cr.style.transform='translate('+(rx-18)+'px,'+(ry-18)+'px)';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,.proj,.card,.chips span').forEach(function(e){
    e.addEventListener('mouseenter',function(){cr.style.width=cr.style.height='60px'});
    e.addEventListener('mouseleave',function(){cr.style.width=cr.style.height='36px'})});
})();
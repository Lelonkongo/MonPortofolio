

const lien=document.querySelector(".lien");
const barmenu=document.querySelector(".bar-menu");
const barFerme=document.querySelector(".bar-ferme");
const enleve1=document.querySelector(".enleve1");
const enleve2=document.querySelector(".enleve2");
const enleve3=document.querySelector(".enleve3");

 
barmenu.addEventListener("click", ()=>{
   lien.classList.toggle('ameneMenu');
   barFerme.style.display="block";
   barmenu.style.display="none";
 
});

barFerme.addEventListener("click", ()=>{
   lien.classList.toggle('ameneMenu');
   barFerme.style.display="none";
   barmenu.style.display="block";
});



enleve1.addEventListener("click",()=>{

  lien.classList.remove("ameneMenu");
  barFerme.style.display="none";
  barmenu.style.display="block";
});
enleve2.addEventListener("click",()=>{

  lien.classList.remove("ameneMenu");
  barFerme.style.display="none";
  barmenu.style.display="block";
});
enleve3.addEventListener("click",()=>{

  lien.classList.remove("ameneMenu");
  barFerme.style.display="none";
  barmenu.style.display="block";
})








 const observer= new IntersectionObserver((enties) => {
   for (const entry of enties) {
     if(entry.isIntersecting){
       entry.target.animate([
         {transform: 'translateX(-100px)',opacity:0},
         {transform: 'translateX(0)',opacity:2},
       ], {
         duration:1000
     })
   }
   } 
 })
 observer.observe(document.querySelector('.p1'));
 observer.observe(document.querySelector('.p2'));
 observer.observe(document.querySelector('.p3'));
 observer.observe(document.querySelector('.message'));
 observer.observe(document.querySelector('.image'));

 const obser= new IntersectionObserver((ent) => {
   for (const entr of ent) {
     if(entr.isIntersecting){
       entr.target.animate([
       {transform: 'translateY(-100px)',opacity:0},
         {transform: 'translateY(0)',opacity:2},
         
       ], {
         duration:1000
     })
   }
   }
   
 })
 obser.observe(document.querySelector('.bas-text1'));
 obser.observe(document.querySelector('.bas-text2'));
 obser.observe(document.querySelector('.bas-text3'));
 obser.observe(document.querySelector('.bas-text3'));
 
 
 const obse= new IntersectionObserver((ent) => {
   for (const entr of ent) {
     if(entr.isIntersecting){
       entr.target.animate([
       {transform: 'translateY(100px)',opacity:0},
         {transform: 'translateY(0)',opacity:2},
         
       ], {
         duration:1000
     })
   }
   }
   
 })

 
 obse.observe(document.querySelector('.sociaux'));


 const obs= new IntersectionObserver((ent) => {
   for (const entr of ent) {
     if(entr.isIntersecting){
       entr.target.animate([
       {transform: 'translateX(1000px)',opacity:0},
         {transform: 'translateY(0)',opacity:2},
         
       ], {
         duration:1600
     })
   }
   }
   
 })

 
 obs.observe(document.querySelector('.service'));
 obs.observe(document.querySelector('.propos'));



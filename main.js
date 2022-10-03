
let navShow = document.getElementById('navShow');
let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
   if(navShow.style.display == "none"){
    navShow.style.display = "block";
    navShow.style.transition = "0.5s";
   }else{
    navShow.style.display = "none";
    navShow.style.transition = "0.5s";
   }
})
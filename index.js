
function playmusic(){
    x= document.getElementById("ok1")
   x.play();
}
function playymusic(){
    x= document.getElementById("ok2")
   x.play();
}
function playmmusic(){
    x= document.getElementById("ok3")
   x.play();
}function playmuusic(){
    x= document.getElementById("ok4")
   x.play();
}
function playmussic(){
    x= document.getElementById("ok5")
   x.play();
}
function playmusiic(){
    x= document.getElementById("ok6")
   x.play();
}
window.addEventListener('keydown',function(e){
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
  const key = document.querySelector(`.one[data-key = "${e.keyCode}"]`)
  if(!audio) return;
  audio.currentTime =0;
  audio.play();
 
  key.classList.add("two")
})
var x = document.querySelectorAll(".one");
x.forEach((ele)=>{
    ele.addEventListener("transitionend",(abc)=>{
        abc.target.classList.remove("two")
    })
})


// var x = document.querySelectorAll(".one");
// x.forEach((ele) =>{
// ele.addEventListener("transitionend",(abc)=>{
// abc.target.classList.remove("two");
// })
// })
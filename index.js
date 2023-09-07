
// js for disable right click of the mouse 
  document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert('Right Click is Disabled please inspect with F12 :)');    
    }, false);

    // js for preloader 
let preloader = document.querySelector('.preloader');
window.addEventListener("load",function(){
  preloader.style.display = "none"
})

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
var typed = new Typed(".typing",{
  strings:["Developer ","UI/UX Designer ","Web Designer "],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})
var typed = new Typed(".typings",{
  strings:["Web Designer ","Developer ","UI/UX Designer "],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

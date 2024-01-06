
// js for disable right click of the mouse 
  document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert('Right Click is Disabled please inspect with F12 :)');    
    }, false);

    // js for preloader 


// window.addEventListener("load", () => {
//   const loader = document.querySelector(".loader");

//   loader.classList.add("loader--hidden");

//   loader.addEventListener("transitionend", () => {
//     document.body.removeChild(loader);
//   });
// });


// improve version of loader copied from chatgpt
const onLoad = () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });

    // Remove the "load" event listener
    window.removeEventListener("load", onLoad);
  } else {
    console.error("Loader element not found");
  }
};

window.addEventListener("load", onLoad);



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

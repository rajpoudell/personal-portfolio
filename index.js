
// const pic = document.querySelectorAll(".skillspic");
// const skill = document.querySelectorAll(".aboutskills");
 

// for (let i = 0; i < pic.length; i++) {
//     // pic[i].addEventListener("click", function() {
//     //   pic[i].style.opacity = "0";
//     //   skill[i].style.display = "block";
      
//     // });

//     // for mouse over and mouse out 
//     pic[i].addEventListener("mouseover", function() {
//       pic[i].style.opacity = "0";
//       skill[i].style.display = "block";
      
//     });
//     pic[i].addEventListener("mouseout", function() {
//       pic[i].style.opacity = "1";
//       skill[i].style.display = "none";
//     });
//   }

// js for disable right click of the mouse 

  document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    alert('Right Click is Disabled');    
    }, false);

    // js for preloader 
let preloader = document.querySelector('.preloader');
window.addEventListener("load",function(){
  preloader.style.display = "none"
})
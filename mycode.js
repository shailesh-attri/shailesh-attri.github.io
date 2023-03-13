window.addEventListener('scroll', ()=>{
    document.querySelector('header').classList.toggle('window-scroll',window.scrollY>0)
})

function mycv(){
    alert("My CV is not available on the server for now");
}
function msgsend(){
    alert("Your valuable messages have been sent");
}
// let header = document.querySelector("header");
// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");


// function hamburgerMenu(){
//   alert ("Haburger Menu");
// menu.onclick = () => {
//   navbar.classList.toggle("active");
// };
// window.onscroll = () => {
//   navbar.classList.remove("active");
// };
// }
function mymenu(){
//   let menu =document.getElementById("menu");
//   let navbar=document.getElementById("nav");

//   menu.onclick = () => {
//   menu.classList.toggle("bx-menu");
//   navbar.classList.toggle("active");
// }


// const menuIcon = document.getElementById('menu-icon');
// const menu = document.querySelector('.menu');

// menuIcon.addEventListener('click', () => {
//   menuIcon.classList.toggle('active');
//   menu.classList.toggle('show');
// });

const hamburger = document.getElementById('menu');
const menu = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('bx-menu');
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    menu.style.height = '200px';
  } else {
    menu.style.height = '0';
  }
});
}

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }





function darkModeToggle() {


  var body = document.querySelector('body');
  var toggleIcon = document.querySelector('#darkmode');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    toggleIcon.classList.remove('bx-moon');
    toggleIcon.classList.add('bx-sun');
  } else {
    toggleIcon.classList.remove('bx-sun');
    toggleIcon.classList.add('bx-moon');
  }
}

const sr=ScrollReveal({
  distance:'65px',
  duration:2600,
  delay:450,
  reset:true
});
sr.reveal('.social',{delay:500, origin:'left'});
sr.reveal('.home-text',{delay:200, origin:'top'});
sr.reveal('.home-img',{delay:450, origin:'top'});
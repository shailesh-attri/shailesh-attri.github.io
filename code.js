window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  function toggleTheme(){
    const navList = document.querySelector('.sidebar');
    
   
    // menuBtn.classList.toggle('fa-times');
    // menuBtn.classList.toggle('fa-bars');
    
    navList.classList.toggle('active');
    
    
  }
  function toggle_btn(){
    const navList = document.querySelector('.dropdown-menu');
    const menuBtn = document.querySelector('#menu-btn');
   
    menuBtn.classList.toggle('fa-times');
    menuBtn.classList.toggle('fa-bars');
    
    navList.classList.toggle('active');
    
    
  }
  const hamburgerBtn = document.getElementById('menu-btn');
const homeImg = document.querySelector('.my-home-img');

hamburgerBtn.addEventListener('click', () => {
  homeImg.classList.toggle('active');
  alert("hello");
});
// function toggleTheme(){
//   alert('hello');
//   const Tog_div=document.querySelector('.tog_btn');  
// const toggle=document.querySelector('.dropdown-menu');
// const toggle_btn=document.querySelector('#menu-btn');

// toggle.classList.toggle('open');
// toggle_btn.classList.toggle('.fa-bars')
// toggle_btn.classList.toggle('.fa-times')


// }



//   const alt_style=document.querySelectorAll('.alternate-style');

// function setActiveStyle(color){
//   alt_style.forEach((style) => {
//     if (color === style.getAttribute('title')){
//       style.removeAttribute('disabled');
//     } else {
//       style.setAttribute('disabled', 'true');
//     }
//   })
// }



toggleButton.addEventListener("click", function() {
  sidebar.classList.toggle("open");
  alert("hello");
});

function red() {
  const body = document.querySelector('body');
  // body.classList.add('defalut')
  if(body.classList.contains('blue') || body.classList.contains('green')){
    body.classList.remove('blue')
    body.classList.remove('green')

  }
  body.classList.toggle('red');
  
}

function gold() {
  const body = document.querySelector('body');
  // const button = document.querySelector('clr-2');
  // body.classList.add('defalut')

  if(body.classList.contains('red') || body.classList.contains('green')){
    body.classList.remove('red')
    body.classList.remove('green')

  }
  body.classList.toggle('blue');
  // button.classList.toggle('active');
}
function green() {
  const body = document.querySelector('body');
  // const button = document.querySelector('clr-3');
  if(body.classList.contains('red') || body.classList.contains('blue')){
    body.classList.remove('red')
    body.classList.remove('blue')

  }
  body.classList.toggle('green');
  // button.classList.toggle('active');
}
const input = document.querySelector('txt');
const select = document.querySelector('select');
const textarea = document.querySelector('area');
const dob = document.querySelector('dob');

input.addEventListener('focus', function() {
  this.style.borderColor = 'red';
  
});

select.addEventListener('focus', function() {
  this.style.borderColor = 'red';
  
});


textarea.addEventListener('focus', function() {
  this.style.borderColor = 'red';
  
});


function showLoader() {
  document.getElementById("loader").style.display = "block";
  // Add other loading actions here if needed
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loader").style.display = "none";
  // Add other actions after loading here if needed

  window.onload = function() {
    document.getElementById("loader").style.display = "none";
  }
});

let my_button = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    my_button.style.display = "block";
  } else {
    my_button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



  
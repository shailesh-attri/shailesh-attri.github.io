

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');
    var folio = document.querySelector('.folio');
    
    
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      folio.classList.add('scrolled');
      
    } else {
      
      navbar.classList.remove('scrolled');
      folio.classList.remove('scrolled');
      
    }
  });

  window.addEventListener('scroll', function() {
   
    var DownButton = document.querySelector('.scroll-to-down');
    var TopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 100) {
    TopButton.style.display='block'
    
    } else {
      TopButton.style.display='none'
      
    }
   
  });


  

  function toggleTheme(){
    const navList = document.querySelector('.sidebar');
    
   
    // menuBtn.classList.toggle('fa-times');
    // menuBtn.classList.toggle('fa-bars');
    
    navList.classList.toggle('active');
    
    
  }
// window.addEventListener('scroll', function(){
//   var slide = document.querySelector('.dropdown-menu');
//   var s_pos = slide.getBoundingClientRect().top;
//   var screenPos = window.innerHeight/2
//   if(s_pos<screenPosition){
//     slide.classList.add('hidden');
//   }
// })





  function toggle_btn(){
    const navList = document.querySelector('.dropdown-menu');
    const menuBtn = document.querySelector('#menu-btn');
   
    menuBtn.classList.toggle('fa-times');
    menuBtn.classList.toggle('fa-bars');
    
    navList.classList.toggle('active');
    
    
    
  }
  








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


// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//  // For Chrome, Firefox, IE and Opera
//   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//     scrollToTopButton.style.display = "block";
//   } else {
//     scrollToTopButton.style.display = "none";
//   }
// }



// Detect when the user has scrolled down 20 pixels from the top of the page



function scrollFunction() {
  

  // Get a reference to the "scroll-to-top" button
  
  window.scrollTo(0,0)
}





// window.addEventListener("scroll", checkHeight)

//   function checkHeight() {
//   if (window.scrollY > 200) {
//     scrollToTopButton.style.display = "block";
//   } else {
//     scrollToTopButton.style.display = "none";
//   }
// }







  
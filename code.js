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



// toggleButton.addEventListener("click", function() {
//   sidebar.classList.toggle("open");
//   alert("hello");
// });

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



  
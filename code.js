

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
   
    
    var TopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 100) {
    TopButton.style.display='block'
    
    } else {
      TopButton.style.display='none'
      
    }
   
  });




  window.addEventListener('scroll', function() {
  var HamBtn = document.querySelector('.dropdown-menu')
  if (window.scrollY > 100) {
    
    HamBtn.style.display='none'
    } else {
      HamBtn.style.display='block'
      
    }
   
  });








  function toggle_btn(){
    const navList = document.querySelector('.dropdown-menu');
    const menuBtn = document.querySelector('#menu-btn');
   
    menuBtn.classList.toggle('fa-times');
    menuBtn.classList.toggle('fa-bars');
    
    navList.classList.toggle('active');
    
  }
  






// -----------------------------------------------

function red() {
  const body = document.querySelector('body');
 
  if(body.classList.contains('blue') || body.classList.contains('green')){
    body.classList.remove('blue')
    body.classList.remove('green')

  }
  body.classList.toggle('red');
  
}



// ---------
function gold() {
  const body = document.querySelector('body');
  

  if(body.classList.contains('red') || body.classList.contains('green')){
    body.classList.remove('red')
    body.classList.remove('green')

  }
  body.classList.toggle('blue');

}



// -------------
function green() {
  const body = document.querySelector('body');
 
  if(body.classList.contains('red') || body.classList.contains('blue')){
    body.classList.remove('red')
    body.classList.remove('blue')

  }
  body.classList.toggle('green');
 
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












function scrollFunction() {
  
  window.scrollTo(0,0)
}


// ---------------Send Mail----------------//

var my_btn = document.createElementById("mail-btn");
function _mail_btn(){
 var name = document.getElementById("name").value;
 var email = document.getElementById("email").value;
 var msg = document.getElementById("message").value;
var body =  'Name: ' +name + '<br/>' 
            'Email: ' + email + '<br/>'
            'Message: ' + msg + '<br/>'



  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "bittuattri786@gmail.com",
    Password : "F55559C21C5EEFFB2DA7905DF0E778F7161F",
    
    To : 'bittuattri786@gmail.com',
    From : email,
    Subject : "You have a contact Enquiry",
    Body : body
}).then(
  message => alert('You information has been sent to Gaurav Dhaka, Thank you ')
);
  
}
  
 







  
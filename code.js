

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




 








  function toggle_btn(){
    const navList = document.querySelector('.dropdown-menu');
    const menuBtn = document.querySelector('#menu-btn');
   
    menuBtn.classList.toggle('fa-times');
    menuBtn.classList.toggle('fa-bars');
    
    navList.classList.toggle('active');
    
  }
  
  





// -----------------------------------------------


















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
  
 







  
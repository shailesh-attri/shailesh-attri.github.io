// window.addEventListener('scroll', ()=>{
//     document.querySelector('header').classList.toggle('scrolled',window.scrollY>0)
// })

   // When the user scrolls the page, execute pageScroll function 
  
  
  
  
  function call(){
    alert('Please wait...');
  }
  function submit(){
    alert('Your appointment has been Booked');
  }


  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  function toggleNav() {
    const menuBtn = document.getElementById('menu-btn');
    const navList = document.getElementById('navbar');
    
    menuBtn.classList.toggle('fa-bars');
    menuBtn.classList.toggle('fa-bars');
    navList.classList.toggle('show');
    
  }
  
  // function toggleNav() {
  //   var x = document.getElementById("navbar");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   } else {
  //     x.style.display = "block";
  //   }
  // }
  
  
  
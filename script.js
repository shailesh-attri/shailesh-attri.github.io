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
    const menuBtn = document.querySelector('#menu-btn');
    const navList = document.querySelector('#navbar');
    
    // menuBtn.classList.toggle('fa-bars');
    // menuBtn.classList.toggle('fa-arrow-right');
    
    navList.classList.toggle('active');
    
  }

  function search_btn() {
    
   
    const navList = document.querySelector('#search');
    
   
    navList.classList.toggle('show-bar');
    
  }
  
  // function toggleNav() {
  //   var x = document.getElementById("navbar");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   } else {
  //     x.style.display = "block";
  //   }
  // }
  
  
  // // Poses carousel
  // const carousel = document.querySelector('.carousel')
  // firstImg = carousel.querySelectorAll('img')[0]
  // arrowIcon = document.querySelectorAll('.wrapper i')
  
  // let isDragStart = false, prevPageX, prevScrollLeft
  // let firstImgWidth = firstImg.clientWidth + 1.5

  // arrowIcon.forEach(icon => {
  //   icon.addEventListener('click', () => {
  //     carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth
  //   })
  // })

  // const dragStart = (e) => {
  //   isDragStart = true
  //   prevPageX = e.pageX
  //   prevScrollLeft = carousel.scrollLeft
  // }

  // const dragStop = () => {
  //   isDragStart = false;

  // }

  // carousel.addEventListener('mousedown', dragStart)
  // carousel.addEventListener('mousemove', dragging)
  // carousel.addEventListener('mouseup', dragStop)



  const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".item");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

let index = 0;

right.addEventListener("click", () => {
  index++;
  if (index > items.length - 1) {
    index = 0;
  }
  carousel.style.transform = `translateX(${-index * 320}px)`;
});

left.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = items.length - 1;
  }
  carousel.style.transform = `translateX(${-index * 320}px)`;
});
  
  
//  sticky nav
 
 const nav=document.querySelector('nav');

 const navOffset=nav.offsetTop;
 
 window.addEventListener('scroll', () => {
     if(window.pageYOffset >=navOffset){
         nav.classList.add('sticky');
     }else{
         nav.classList.remove('sticky')
     };
 });
  

//  animation

AOS.init({
    duration:2000
});

//  slider
$('.feature-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// our work mixitup
var confi=document.querySelector('.mixcount');
var mixer=mixitup(confi);

// couter up

jQuery(document).ready(function($) {
    $('.counter').counterUp({
            delay: 10,
            time: 5000
        });
});
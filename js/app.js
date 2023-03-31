

    var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 3000
  });



  $(document).ready(function(){
    $('.testimoneal-content').owlCarousel({
      loop:true,
      nav:false,
      margin:10,
      autoplay:true,
      autoplayTimeout:3000,
      smartSpeed:800,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });
  })
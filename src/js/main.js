var mySwiper = new Swiper(".swiper-container", {
    // If loop true set photoswipe - counterEl: false
    loop: true,
    /* slidesPerView || auto - if you want to set width by css like flickity.js layout - in this case width:80% by CSS */
    slidesPerView: "auto",
    spaceBetween: 7,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },
     // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });

/*$(function(){

  $('.load-more').on(click, function(){
    const btn = $(this);
    const loader = btn.find('.span');
    $.ajax({
      url: '/load.html',
      type: 'GET',
      beforeSend: function(){
        
      },
      succsess: function(response){

      },
      error: function(){
        alert('Error');
      }
    });
  });

});*/
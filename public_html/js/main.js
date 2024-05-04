$(document).ready(function () {

 /*carousel for beneift section*/
if ($(".team-slider").length > 0){
    $(".team-slider").owlCarousel({
      
        loop: true,
        nav: false,
        dots: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ['<span class="fa-solid fa-arrow-left"></span>', '<span class="fa-solid fa-arrow-right"></span>'],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 1,
                nav: false
            }
        }
    });}
    
    
    /*carousel for testimonials section*/
 if ($(".testimonials-slider").length > 0){
    $(".testimonials-slider").owlCarousel({
        items: 1,
      
        loop: true,
        nav: false,
        dots: true,
       
         navText: ['<span class="fa-solid fa-arrow-left"></span>', '<span class="fa-solid fa-arrow-right"></span>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        
        responsive: {
            0: {
                items: 1,
                  margin:10,
               nav: true,
               dots:false
            },
            400: {
                items: 1,
               margin:20,
                nav: false
            },
             700: {
                     items: 2,
                nav: false,
                  margin: 30

                }
        }
       
       
    });
 }
    
   


  
  
    /*fancybox gallery*/
  
if ($(".counter").length > 0 && $('[data-fancybox="gallery"]').length > 0){
      
    
      
    Fancybox.bind('[data-fancybox="gallery"]', {
 
        loop: true, 
    animated: true,
    closeButton: true
    
 
    

     
});
}


/*counter up */
  if ($(".counter").length > 0){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
  }
});



 

     
      
        
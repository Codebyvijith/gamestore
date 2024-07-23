//  script-for-menu

     $( "span.menu" ).click(function() {
    $( "ul.nav1" ).slideToggle( 300, function() {
    // Animation complete.
        });
        });

// /script-for-menu 


// banner
// Slider-starts-Here
$(function () {
  $("#slider").responsiveSlides({
    auto:true,
    nav: false,
    speed: 500,
    namespace: "callbacks",
    pager:true,
  });
});



$(window).load(function() {			
 $("#flexiselDemo1").flexisel({
   visibleItems: 4,
   animationSpeed: 1000,
   autoPlay: true,
   autoPlaySpeed: 3000,    		
   pauseOnHover:true,
   enableResponsiveBreakpoints: true,
   responsiveBreakpoints: { 
       portrait: { 
           changePoint:480,
           visibleItems: 1
       }, 
       landscape: { 
           changePoint:640,
           visibleItems: 2
       },
       tablet: { 
           changePoint:768,
           visibleItems: 3
       }
   }
});
});


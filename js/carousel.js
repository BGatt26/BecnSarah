/* first carousel slidesshow */
 $('#carousel-1').carousel({
      // Amount of time to delay between cycling slide, If false, no cycle
      interval: false,

      // Pauses slide on mouse enter and resumes on mouseleave.
      pause: "hover",

      // Whether carousel should cycle continuously or have hard stops.
      wrap: false,

      // Whether the carousel should react to keyboard events.
      keyboard: true
 });
 
 
 /* second carousel slidesshow */
 $('#carousel-2').carousel({
      interval: 1000,
      wrap: true,
      keyboard: true
 });
 
 
 /* third carousel slidesshow */
 $('#carousel-3').carousel({
     interval: 2000,
     wrap: true,
     keyboard: true
 });
 
 
 /* forth carousel slidesshow */
 $('#carousel-4').carousel({
     interval: 3000,
     wrap: true,
     keyboard: true
 });
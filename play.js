// Initialize here and run showSlide() to give your lightbox a default state.

let slideIndex = 1;
showSlide(slideIndex);

// You are providing the functionality for your clickable content, which is 
// your previews, dots, controls and the close button.

function openLightbox() {
  document.getElementById('carousel-1').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('carousel-1').style.display = 'none';
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};


// This is your logic for the light box. It will decide which slide to show 
// and which dot is active.


function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1; 
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
};


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
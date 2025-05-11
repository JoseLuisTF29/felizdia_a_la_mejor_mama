$(document).ready(function() {
    let currentImage = 0;
    const images = $(".image-slider img");
  
    // Alternar entre las imágenes al hacer swipe o deslizar
    $(".image-slider").on("click touchstart", function() {
      currentImage = (currentImage + 1) % images.length;
      images.fadeOut(500);
      $(images[currentImage]).fadeIn(500);
    });
  });
  
  

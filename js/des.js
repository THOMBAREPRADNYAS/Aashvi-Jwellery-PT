// Get references to the main image and small images
const mainImage = document.querySelector('.bigcard img');
const smallImages = document.querySelectorAll('.smallcard img');

// Add click event listeners to small images
smallImages.forEach((smallImage) => {
  smallImage.addEventListener('click', function() {
    // Replace the main image with the clicked small image
    mainImage.src = this.src;

    // Reset opacity for all small images
    smallImages.forEach((img) => {
      img.style.opacity = '0.5';
    }
    );

    // Set opacity to 1 for the clicked small image
    this.style.opacity = '1';
  });
});






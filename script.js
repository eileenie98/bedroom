// //EXPANDED ABOUT BUTTON//
// const aboutContainer = document.querySelector('.about-container');
// const aboutButtonContainer = document.querySelector('.about-button-container');
// const textBox = document.querySelector('.introtext');

// const toggleContent = () => {
//   aboutContainer.classList.toggle('expanded');
//   aboutButtonContainer.classList.toggle('hide');
//   textBox.classList.toggle('show');
// };

// aboutButtonContainer.addEventListener('click', toggleContent);
// textBox.addEventListener('click', toggleContent);


document.addEventListener('DOMContentLoaded', () => {
    const hoverTexts = document.querySelectorAll('.hover-text');
  
    hoverTexts.forEach(text => {
      const targetId = text.dataset.target;
      const targetImage = document.getElementById(targetId);
  
      if (targetImage) {
        text.addEventListener('mouseenter', () => {
          targetImage.style.display = 'block';
        });
  
        text.addEventListener('mouseleave', () => {
          targetImage.style.display = 'none';
        });
      } else {
        console.warn(`No image found for target ID: ${targetId}`);
      }
    });
  });
  

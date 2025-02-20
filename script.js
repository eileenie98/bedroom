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
  

// toggle animation for collapsible box 
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".collapse");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let content = this.nextElementSibling;
            
            // Toggle text visibility
            content.classList.toggle("show");
            
            // Toggle active class on button
            if (content.classList.contains("show")) {
                this.classList.add("active");
            } else {
                this.classList.remove("active");
            }
        });
    });
});


function closePopup() {
  document.getElementById("popup").style.display = "none";
}
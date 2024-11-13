const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      // Get Currently active button
      let currentBtn = document.querySelectorAll(".active-btn");
      // Remove 'active-btn' class from the previously active button
      if (currentBtn.length > 0) {
        currentBtn[0].classList.remove("active-btn");
      }
      // Add "active-btn" class to the clicked button
      this.classList.add("active-btn");
    });
  }

  // Sections Active class
  allSections.addEventListener("click", (e) => {
    console.log(e.target);
  });
}

PageTransitions();

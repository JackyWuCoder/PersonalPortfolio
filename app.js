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

  // Sections Active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from the other buttons
      /*
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      */

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransitions();

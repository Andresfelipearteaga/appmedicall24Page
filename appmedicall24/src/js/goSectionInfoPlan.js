  document.addEventListener("DOMContentLoaded", () => {
    const scrollToButton = document.querySelector(".plan-btn-section");

    scrollToButton.addEventListener("click", () => {
      const targetSection = document.querySelector("#planes");
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });


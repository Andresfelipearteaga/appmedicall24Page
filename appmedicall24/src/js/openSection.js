
// Obtener referencias a todos los botones y secciones
const toggleButtons = document.querySelectorAll(".plan-btn");
const description = document.querySelector(".description");

toggleButtons.forEach((button) => {
  // Asociar cada botón con su sección correspondiente
  const targetSectionId = button.dataset.target;
  const hiddenSection = document.getElementById(targetSectionId);

  button.addEventListener("click", () => {
    console.log("Click en el botón:", button);
    if (hiddenSection) {
      console.log("Sección objetivo:", hiddenSection);
      if (
        hiddenSection.style.maxHeight === "0px" ||
        !hiddenSection.style.maxHeight
      ) {
        // Mostrar la sección
        hiddenSection.style.maxHeight = hiddenSection.scrollHeight + "px";
        button.textContent = "Crea tu plan";
        button.style.opacity = "0";
        button.setAttribute("disabled", true);
        button.style.cursor = "default";
        description.setAttribute("style", "display: none;");

           // Desplazarse a la sección
           hiddenSection.scrollIntoView({
              behavior: "smooth", // Animación suave
              block: "start", // Alinear la sección al inicio
          });
   
      } else {
        // Ocultar la sección
        hiddenSection.style.maxHeight = "0px";
        button.textContent = "Simular";
      }
    }
  });
});

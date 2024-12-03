
// Obtener referencias a todos los botones y secciones
const toggleButtons = document.querySelectorAll(".plan-btn");

toggleButtons.forEach((button) => {
  // Asociar cada botón con su sección correspondiente
  const targetSectionId = button.dataset.target; // Usamos un atributo `data-target` para identificar la sección
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
        button.textContent = "Cerrar simulador";

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

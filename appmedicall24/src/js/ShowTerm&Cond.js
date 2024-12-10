// Obtener referencias a los botones y divs
const buttons = document.querySelectorAll("[id^='btn-term-']");
const terms = document.querySelectorAll("[id^='term-']");

// Función para mostrar y ocultar divs
const showTerm = (termId) => {
  terms.forEach((term) => {
    if (term.id === termId) {
      term.classList.remove("hidden"); // Muestra el div correspondiente
    } else {
      term.classList.add("hidden"); // Oculta los demás
    }
  });
};

// Añadir eventos a los botones
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const termId = button.id.replace("btn-", "");
    showTerm(termId);
  });
});
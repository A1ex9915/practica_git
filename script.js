function mostrarInfo() {
  const infoBox = document.getElementById("infoBox");

  if (infoBox.style.display === "none" || infoBox.style.display === "") {
    infoBox.style.display = "block";
  } else {
    infoBox.style.display = "none";
  }
}


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.borderColor = "#38bdf8";
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderColor = "rgba(255, 255, 255, 0.15)";
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email  = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      mostrarMensaje('Por favor completa todos los campos.', 'error');
      return;
    }

    mostrarMensaje('Procesando...', 'exito');
  });
});

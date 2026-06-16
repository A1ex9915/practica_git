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
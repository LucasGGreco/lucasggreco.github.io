const bird = document.getElementById("bird");
const footer = document.getElementById("footer");

footer.addEventListener("mousemove", (e) => {
  const rect = footer.getBoundingClientRect();

  // posición del cursor dentro del footer
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // centro del footer
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // desplazamiento inverso (ajustá el factor para más/menos movimiento)
  const moveX = -(x - centerX) * 1;
  const moveY = -(y - centerY) * 0.5;

  bird.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
});

// volver al centro cuando el cursor sale del footer
footer.addEventListener("mouseleave", () => {
  bird.style.transform = "translate(-50%, -50%)";
});

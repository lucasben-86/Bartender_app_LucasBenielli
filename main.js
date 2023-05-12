const imagenAperitivos = document.getElementById("imagen-aperitivos");

imagenAperitivos.addEventListener('click', () => {
    window.location.href = "landing-page2.html";
  });
imagenAperitivos.addEventListener('mouseover', () => {
    imagenAperitivos.style.cursor = 'pointer';
    imagenAperitivos.style.opacity = '1';
  });
imagenAperitivos.addEventListener('mouseout', () => {
    imagenAperitivos.style.cursor = 'default';
    imagenAperitivos.style.opacity = '0.8';
  });

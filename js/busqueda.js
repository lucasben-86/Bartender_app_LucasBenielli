const textoBusqueda = document.querySelector("#buscar");
const botonBusqueda = document.querySelector("#btnBuscar");
const tituloBusqueda = document.querySelector("#titulo-busqueda");
const listaBusqueda = document.querySelector("#lista-busqueda");

botonBusqueda.addEventListener("click", () => {
  const nombreTrago = textoBusqueda.value;
  window.location.href = "lp-busqueda.html?nombre" + nombreTrago;
});

window.addEventListener("DOMContentLoaded", async () => {
  const urlBusqueda = new URLSearchParams(window.location.search);
  const tragoBuscado = urlBusqueda.get("nombre");

  const resp = await fetch("/js/tragos.json");
  const data = await resp.json();
});

const textoBusqueda = document.querySelector("#buscar");
const botonBusqueda = document.querySelector("#btnBuscar");
const tituloBusqueda = document.querySelector("#titulo-busqueda");
const listaBusqueda = document.querySelector("#lista-busqueda");
const tragoBuscado = document.querySelector("#trago-buscado");

botonBusqueda.addEventListener("click", async () => {
  const valorBusqueda = textoBusqueda.value.toLowerCase();
  
  const resp = await fetch("/js/tragos.json");
  const data = await resp.json();
  
  const resultado = data.filter(objeto => objeto.nombre.toLowerCase() === valorBusqueda);

  if (resultado.length > 0) {
    const nombreElegido = resultado[0].nombre;
    listaBusqueda.textContent = nombreElegido;
    const ul = document.createElement("ul");
        ul.innerHTML = `<div class="card text-center mt-4" style="width: 18rem;">
          <img src="${trago.imagen}" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-text text-center">${trago.nombre}</h5> 
          </div>
        </div>`;
      tragoBuscado.appendChild(ul);
  } else {
    listaBusqueda.textContent = "No hay resultados";
  }
});
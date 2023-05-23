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
    tragoBuscado.innerHTML = "";
    listaBusqueda.innerHTML = "";
    const tragoEncontrado = resultado[0];
    const ul = document.createElement("ul");
        ul.innerHTML = `<div class="card text-center mt-4" style="width: 18rem;">
          <img src="${tragoEncontrado.imagen}" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-text text-center">${tragoEncontrado.nombre}</h5> 
            <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#receta-modal">Ver receta</button>
            <div class="modal fade" id="receta-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title fs-5" id="staticBackdropLabel2">Receta</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h4 class="mb-3 fw-bold text-warning">${tragoEncontrado.nombre}</h4>
                    <p class="text-end"><em>${tragoEncontrado.comentario}</em></p>
                    <p class="text-start fw-bold text-warning"><u>Ingredientes:</u></p>
                    <ul class="text-start">${tragoEncontrado.ingredientes.map((cadaPaso) => `<li>${cadaPaso}</li>`).join("")}</ul>
                    <p class="text-start mt-4 fw-bold text-warning"><u>Preparación:</u></p>
                    <p class="text-justify">${tragoEncontrado.preparacion}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      tragoBuscado.appendChild(ul);
  } else {
    tragoBuscado.innerHTML = ""
    listaBusqueda.textContent = "No hay resultados";
  }
});
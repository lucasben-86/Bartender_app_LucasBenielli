const tragos = [
  {id: "aperitivo-busqueda", botella: "Aperitivos"},
  {id: "gin-busqueda", botella: "Gin"},
  {id: "ron-busqueda", botella: "Ron"},
  {id: "tequila-busqueda", botella: "Tequila"},
  {id: "vodka-busqueda", botella: "Vodka"},
  {id: "whisky-busqueda", botella: "Whisky"}
];

const listaTitulo = document.querySelector("#lista-titulo");
const listaTragos = document.querySelector("#lista-tragos");

tragos.forEach(trago => {
  const elementoTrago = document.querySelector(`#${trago.id}`);
  if (elementoTrago) {
    elementoTrago.addEventListener("mouseover", () => {
      elementoTrago.style.cursor = "pointer";
    });
    elementoTrago.addEventListener("mouseout", () => {
      elementoTrago.style.cursor = "auto";
    });
    elementoTrago.addEventListener("click", () => {
      window.location.href = "landing-page2.html?botella=" + trago.botella;
    });
  }
});

window.addEventListener("DOMContentLoaded", async () => {
    console.log("Se inicia correctamente landing-page2.html");
    const urlBusqueda = new URLSearchParams(window.location.search);
    const botellaElegida = urlBusqueda.get("botella");

    const resp = await fetch("/js/tragos.json");
    const data = await resp.json();

    const tragosFiltrados = data.filter(trago => trago.botella === botellaElegida);
    tragosFiltrados.forEach((trago, index) => {
      listaTitulo.innerHTML = `<h5 class="mt-3">Tragos con base alcohólica de ${botellaElegida}</h5>`;
      const li = document.createElement("li");
      li.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${trago.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text text-center">${trago.nombre}</p> 
          <button type="button" class="btn btn-outline-warning text-center" data-bs-toggle="modal" data-bs-target="#receta-modal-${index}">Ver receta</button>
          <div class="modal fade" id="receta-modal-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title fs-5" id="staticBackdropLabel2">Receta</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h4 class="mb-3 text-center fw-bold text-warning">${trago.nombre}</h4>
                <p class="text-end"><em>${trago.comentario}</em></p>
                <p class="fw-bold text-warning"><u>Ingredientes:</u></p>
                <ul>${trago.ingredientes.map((cadaPaso) => `<li>${cadaPaso}</li>`).join("")}</ul>
                <p class="mt-4 fw-bold text-warning"><u>Preparación:</u></p>
                <p class="text-justify">${trago.preparacion}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      listaTragos.append(li);
    });
  }
);

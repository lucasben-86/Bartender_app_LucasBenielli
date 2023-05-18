const tragos = [
  {idHTML: "aperitivo-busqueda", botella: "Aperitivos"},
  {idHTML: "gin-busqueda", botella: "Gin"},
  {idHTML: "ron-busqueda", botella: "Ron"},
  {idHTML: "tequila-busqueda", botella: "Tequila"},
  {idHTML: "vodka-busqueda", botella: "Vodka"},
  {idHTML: "whisky-busqueda", botella: "Whisky"}
];

const listaTitulo = document.querySelector("#lista-titulo");
const listaTragos = document.querySelector("#lista-tragos");

tragos.forEach(trago => {
  const elementoTrago = document.querySelector(`#${trago.idHTML}`);
  if (elementoTrago) {
    elementoTrago.addEventListener("mouseover", () => {
      elementoTrago.style.cursor = "pointer";
    });
    elementoTrago.addEventListener("mouseout", () => {
      elementoTrago.style.cursor = "auto";
    });
    elementoTrago.addEventListener("click", () => {
      window.location.href = "landing-page2.html?botella=" + trago.botella;
      //uso un query parameter para enviar el valor de trago.botella a lp2!!
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
      listaTitulo.innerHTML = `<h4 class="mt-3">Tragos con base alcohólica de ${botellaElegida}</h4>`;
      const ul = document.createElement("ul");
      ul.innerHTML = `<div class="card text-center mt-4" style="width: 18rem;">
        <img src="${trago.imagen}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-text text-center">${trago.nombre}</h5> 
          <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#receta-modal-${index}">Ver receta</button>
          <div class="modal fade" id="receta-modal-${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title fs-5" id="staticBackdropLabel2">Receta</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h4 class="mb-3 fw-bold text-warning">${trago.nombre}</h4>
                <p class="text-end"><em>${trago.comentario}</em></p>
                <p class="text-start fw-bold text-warning"><u>Ingredientes:</u></p>
                <ul class="text-start">${trago.ingredientes.map((cadaPaso) => `<li>${cadaPaso}</li>`).join("")}</ul>
                <p class="text-start mt-4 fw-bold text-warning"><u>Preparación:</u></p>
                <p class="text-justify">${trago.preparacion}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      listaTragos.append(ul);
    });
  }
);

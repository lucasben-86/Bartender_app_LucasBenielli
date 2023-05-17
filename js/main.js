const tragos = [
  {id: "aperitivo-busqueda", botella: "Aperitivos"},
  {id: "gin-busqueda", botella: "Gin"},
  {id: "ron-busqueda", botella: "Ron"},
  {id: "tequila-busqueda", botella: "Tequila"},
  {id: "vodka-busqueda", botella: "Vodka"},
  {id: "whisky-busqueda", botella: "Whisky"}
];

const listaTragos = document.querySelector("#lista-tragos");
const listaTitulo = document.querySelector("#lista-titulo");

tragos.forEach(trago => {
  const elementoTrago = document.querySelector(`#${trago.id}`);
  if (elementoTrago) {
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
    tragosFiltrados.forEach(trago => {
      listaTitulo.innerHTML = `<h3>Tragos con base alcohólica de ${botellaElegida}</h3>`
      const li = document.createElement("li");
      li.innerHTML = `<div class="card" style="width: 18rem;">
  			<img src="${trago.imagen}" class="card-img-top" alt="...">
  				<div class="card-body">
    				<p class="card-text">${trago.nombre}</p>
  			  </div>
		    </div>`;
      listaTragos.append(li);
      listaTitulo.append();
    });
  }
);


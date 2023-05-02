const tragoLista = JSON.parse(localStorage.getItem("tragosGuardados"));

console.log(tragoLista);

let listado = document.querySelector("#tragosGuardados");

for (const trago of tragoLista){
  const li = document.createElement("ul");
  li.innerHTML= `<h4><u>${trago.nombre}</u></h4><a href="${trago.recetaweb}" target="_blank" class="btn btn-outline-warning btn-sm">Ver Receta</a>`;
  listado.appendChild(li);
}

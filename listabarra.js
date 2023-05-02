const tragoLista = JSON.parse(localStorage.getItem("tragosGuardados"));

console.log(tragoLista);

let listado = document.querySelector("#tragosGuardados");

for (const trago of tragoLista){
  const li = document.createElement("ul");
  li.innerText = trago.nombre;
  listado.appendChild(li);
}

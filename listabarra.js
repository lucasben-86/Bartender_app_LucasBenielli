// Obtener el elemento donde queremos mostrar la información
const infoTrago = document.querySelector("#info-trago");

// Obtener la información almacenada en localStorage
const tragoGuardado = localStorage.getItem("tragoGuardado");

// Convertir la información de vuelta a un objeto JavaScript
const tragoObj = JSON.parse(tragoGuardado);

// Crear elementos HTML para cada propiedad del objeto y agregarlos al elemento padre
for (const prop in tragoObj) {
  const label = document.createElement("span");
  label.textContent = prop + ": ";
  const value = document.createElement("span");
  value.textContent = tragoObj[prop];
  infoTrago.appendChild(label);
  infoTrago.appendChild(value);
}

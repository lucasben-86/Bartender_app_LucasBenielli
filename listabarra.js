const tragoEnStorage = document.querySelector("#info-trago");

const tragoGuardado = localStorage.getItem("tragoGuardado");

const tragoObj = JSON.parse(tragoGuardado);

for (const prop in tragoObj) {
  const label = document.createElement("span");
  label.textContent = prop + ": ";
  const value = document.createElement("span");
  value.textContent = tragoObj[prop];
  infoTrago.appendChild(label);
  infoTrago.appendChild(value);
}

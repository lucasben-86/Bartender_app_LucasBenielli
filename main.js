class Trago {
  constructor (nombre, botella, complemento, terminacion, recetaweb) {
      this.nombre = nombre;  
      this.botella = botella;
      this.complemento = complemento;
      this.terminacion = terminacion;
      this.recetaweb = recetaweb;
  }
}

const trago1 = new Trago ("Fernet", "Fernet Branca", "Gaseosa Cola", "hielo", "https://www.recetas-argentinas.com/recetas/bebidas/fernet-con-coca");
const trago2 = new Trago ("Cubalibre", "Ron", "Gaseosa Cola", "hielo", "https://www.recetasdeescandalo.com/cubalibre-como-preparar-este-coctel-o-trago-tan-famoso/");
const trago3 = new Trago ("Margarita", "Cointreau", "Tequila", "limón","https://www.recetasderechupete.com/como-hacer-un-coctel-margarita-receta-y-un-poco-de-historia/31041/");
const trago4 = new Trago ("Amaretto Sour", "Amaretto", "Limón","almíbar","https://www.tragosdelmundo.cl/amaretto-sour-receta/");
const trago5 = new Trago ("Cardinale", "Campari", "Vermut Seco","Gin","https://www.cocinayvino.com/vinos-bebidas/cocteles-destilados/coctel-cardinale-italiano/");
const trago6 = new Trago ("Cynar Julep", "Cynar", "Pomelo", "menta","https://elgourmet.com/recetas/cynar-julep/");
const trago7 = new Trago ("Negroni", "Gin", "Vermut rosso","Campari","https://www.recetasderechupete.com/como-hacer-un-coctel-negroni/31416/");
const trago8 = new Trago ("Old Fashioned", "Whisky", "Angostura","hielo","https://www.faragulla.com/old-fashioned-un-coctel-clasico/");
const trago9 = new Trago ("Tequila Sunrise", "Tequila", "Granadina","naranja","https://www.quericavida.com/recetas/tequila-sunrise/ba443c3a-7f81-4063-bcba-d48df3f100c8");
const trago10 = new Trago ("Caipirinha", "Cachaza", "Lima","Azúcar","https://www.recetasderechupete.com/preparar-una-autentica-caipirina/16352/");

const listaDeTragos = [trago1,trago2,trago3,trago4,trago5,trago6,trago7,trago8,trago9,trago10];

const grupo = document.querySelector("#grupo-tragos");
const tragoSeleccionadoTitulo = document.querySelector("#trago-titulo")
const tragoSeleccionadoComplemento = document.querySelector("#trago-complemento")

for (const trago of listaDeTragos) {
  const btn = document.createElement("button");                  
  btn.className = "mt-2 btn btn-secondary";
  btn.innerText = trago.botella;

  btn.addEventListener('click', () => {
      tragoSeleccionadoTitulo.innerHTML = `<h2>Con una botella de ${trago.botella} 
      podés prepararte un: <u>${trago.nombre}</u></h2>`
      tragoSeleccionadoComplemento.innerHTML = `<h3>También lleva:</h3>
      <ul>
      <li>${trago.complemento}</li>
      <li>${trago.terminacion}</li>
      </ul>
      <a href="${trago.recetaweb}" target="_blank" class="btn btn-outline-warning btn-lg">Ver Receta</a>
      <br>
      <button type="button" class="btn btn-outline-warning btn-lg" id="guardarReceta">Guardar en la Barra</button>
      `
      const guardarRecetaBtn = document.querySelector("#guardarReceta");
      guardarRecetaBtn.addEventListener('click', () => {
        const tragoGuardado = JSON.stringify(trago);
        localStorage.setItem('tragoGuardado', tragoGuardado);
        alert("Guardado!");
      });
    });

  grupo.appendChild(btn);
}

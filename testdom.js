
class Trago {
    constructor (nombre, botella, complemento, terminacion) {
        this.nombre = nombre;  
        this.botella = botella;
        this.complemento = complemento;
        this.terminacion = terminacion;
    }
  }
  
  const trago1 = new Trago ("Fernet", "Fernet Branca", "Gaseosa Cola", "hielo");
  const trago2 = new Trago ("Cubalibre", "Ron", "Gaseosa Cola", "hielo");
  const trago3 = new Trago ("Margarita", "Cointreau", "Tequila", "limón");
  const trago4 = new Trago ("Amaretto Sour", "Amaretto", "Limón","almíbar");
  const trago5 = new Trago ("Cardinale", "Campari", "Vermut Seco","Gin");
  const trago6 = new Trago ("Cynar Julep", "Cynar", "Pomelo", "menta");
  const trago7 = new Trago ("Negroni", "Gin", "Vermut rosso","Campari");
  const trago8 = new Trago ("Old Fashioned", "Whisky", "Angostura","hielo");
  const trago9 = new Trago ("Tequila Sunrise", "Tequila", "Granadina","naranja");
  const trago10 = new Trago ("Caipirinha", "Cachaza", "Lima","Azúcar");

  const listaDeTragos = [trago1,trago2,trago3,trago4,trago5,trago6,trago7,trago8,trago9,trago10];


const grupo = document.querySelector("#grupo-tragos");
const tragoSeleccionadoTitulo = document.querySelector("#trago-titulo")
const tragoSeleccionadoComplemento = document.querySelector("#trago-complemento")


for (const trago of listaDeTragos) {
    const btn = document.createElement("button");                  
    btn.className = "mt-2 btn btn-secondary";
    btn.innerText = trago.botella;

    btn.addEventListener('click', () => {
        tragoSeleccionadoTitulo.innerText = `${trago.botella}`
        tragoSeleccionadoComplemento.innerText = `${trago.complemento}`

    })

    grupo.appendChild(btn)
}
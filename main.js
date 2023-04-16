// function ofrecerTrago(sabor, tamanio, intensidad) {
//   if (sabor === "dulce" && tamanio === "corto" && intensidad === "suave") {
//     return alert("Voy a prepararte un PATADA DE ENANO");
//   } else if (sabor === "dulce" && tamanio === "largo" && intensidad === "suave") {
//     return alert("Voy a prepararte un REGALIZ DE PERDIZ");
//   } else if (sabor === "dulce" && tamanio === "corto" && intensidad === "fuerte") {
//     return alert("Voy a prepararte un FRESITA");
//   } else if (sabor === "dulce" && tamanio === "largo" && intensidad === "fuerte") {
//     return alert("Voy a prepararte un EMPERADOR EN LA PERA");
//   } else if (sabor === "amargo" && tamanio === "corto" && intensidad === "suave") {
//     return alert("Voy a prepararte un NOSTALGIA DE INVIERNO");
//   } else if (sabor === "amargo" && tamanio === "largo" && intensidad === "suave") {
//     return alert("Voy a prepararte un NOVENO REGIMIENTO");
//   } else if (sabor === "amargo" && tamanio === "corto" && intensidad === "fuerte") {
//     return alert("Voy a prepararte un PETAQUERO CUAQUERO");
//   } else if (sabor === "amargo" && tamanio === "largo" && intensidad === "fuerte") {
//     return alert("Voy a prepararte un GROG SECRETO");
//   } else {
//     return "error";
//   }
// }

// const NOMBRE = prompt("¡Buenas noches! ¿Cómo te llamás?");
// const EDAD = parseInt(
//   prompt("Hola, " + NOMBRE + ". ¿Me podrías decir tu edad?")
// );

// if (isNaN(EDAD)) {
//   alert("No te entendí, ¿vamos de nuevo?");
// } else if (EDAD >= 18) {
//   alert("Ok! Te voy a ayudar a que encuentres tu trago favorito.");
//   let i = 0;
//   do {
//     alert("Vamos con el trago número " + (i + 1));
//     let sabor = prompt("¿Querés un trago dulce o amargo?");
//     let tamanio = prompt("Ok. ¿Lo querés en vaso corto o largo?");
//     let intensidad = prompt(
//       "Por último, ¿querés que sea un trago suave o fuerte?"
//     );
//     let respuesta = ofrecerTrago(sabor, tamanio, intensidad);
//     if (respuesta == "error") {
//       alert("No te entendí, ¿me lo repetís?");
//     } else {
//       let unoMas = prompt("¿Vas a querer otro trago?");
//       if (unoMas.toLowerCase() == "si") {
//         i++;
//       } else {
//         alert("Ok, acá está el QR, escaneá cuando quieras");
//         break;
//       }
//     }
//   } while (i < 3);
//   alert(NOMBRE + " ,creo que te haría bien salir a tomar un poco de aire");
// } else {
//   alert("Volvé cuando seas mayor de edad");
// }

function armarBarra () {
  const resultado = listaDeTragos.filter((el) => el.botella.includes(botellaElegida))
  return (listaPersonal.push(resultado));
}

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
const trago10 = new Trago ("Gimlet", "Gin", "Jugo de Lima","almíbar");
const trago11 = new Trago ("Gin Tonic", "Gin", "Gaseosa Tónica","hielo");
const trago12 = new Trago ("Caipirinha", "Cachaza", "Lima","Azúcar");
const trago13 = new Trago ("Piña colada", "Ron", "Crema de coco","ananá");
const trago14 = new Trago ("Mojito", "Ron", "Lima","Menta");
const trago15 = new Trago ("Manhattan", "Whisky", "Vermut rosso","Cereza");

const listaDeTragos = [trago1,trago2,trago3,trago4,trago5,trago6,trago7,trago8,
                      trago9,trago10,trago11,trago12,trago13,trago14,trago15];

const botellas = listaDeTragos.map(trago => trago.botella);
const botellasLista = botellas.join("\n");
let listaPersonal = [];

alert("Voy a indicarte qué tragos podés preparar con las botellas que tengas en tu casa");
do {
  botellaElegida= prompt("Elegí una de las siguientes opciones (para salir, escribí ESC):" + "\n" + botellasLista)
  armarBarra()}
  // alert("Elegiste: " + botellaElegida + " . Si tenés otra botella, ingresala a continuación")}
  while (botellaElegida != "ESC")
  //pulir quitando opciones en blanco y demases

console.log (listaPersonal);

const tragosElegidos = listaPersonal.forEach((num) => {
  
})

alert("podés prepararte un " + tragosElegidos)

//estaría bueno que me asista con los tragos para cada botella elegida
//onda: vamos primero con los tragos que podés preparar con "gin"
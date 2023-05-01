
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
  
  function armarBarra () {
    const resultado = listaDeTragos.filter((el) => el.botella.includes(botellaElegida))
    return (listaPersonal.push(resultado));
  }
  
  function mostrarTrago(trago) {
    const mensaje = "El trago " + trago.nombre + " se prepara con " + trago.botella + "\n" +
                    "También lleva " + trago.complemento + " y " + trago.terminacion
    return mensaje;
  }
  
  const botellas = listaDeTragos.map(trago => trago.botella);
  const botellasLista = botellas.join("\n");
  let listaPersonal = [];
  
  alert("Voy a indicarte qué tragos podés preparar con las botellas que tengas en tu casa");
    do {
    botellaElegida = prompt("Elegí una de las siguientes opciones (para salir, escribí ESC):" + "\n" + botellasLista)
      if (botellaElegida != "ESC") {
          armarBarra();
        }
    }while (botellaElegida != "ESC");
  
  alert("Ahora te muestro el detalle de cada uno de los tragos que podés prepararte: ");
  const todosLosTragosObjetos = listaPersonal.flat();
  
  console.log(todosLosTragosObjetos);

  todosLosTragosObjetos.forEach((trago) => {
    alert(mostrarTrago(trago));
  });
  
  alert("Visitá la sección Cómo lo preparo para aprender a hacerlos!");
  
  
  
  
  
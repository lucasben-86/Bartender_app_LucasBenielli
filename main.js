//***LEER COMENTARIOS EN ORDEN DE NUMERACIÓN***

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
  
  //1- Defino la clase Trago e instancio una serie de objetos con las propiedades de cada trago.
  //   A su vez, defino un array que incluya todos los objetos instanciados, para usar luego.
  
  function armarBarra () {
    const resultado = listaDeTragos.filter((el) => el.botella.includes(botellaElegida))
    return (listaPersonal.push(resultado));
  }
  
  //4- con armarBarra quise intentar un HOF que buscara entre la propiedad "nombre" de cada objeto
  //   y, en caso de encontrarla, retornara un push en el array vacío que definí antes.
  //   Básicamente quería probar si una función podía retornar un método de arrays, y para mi sorpresa
  //   y satisfacción, resultó.
  
  function mostrarTrago(trago) {
    const mensaje = "El trago " + trago.nombre + " se prepara con " + trago.botella + "\n" +
                    "También lleva " + trago.complemento + " y " + trago.terminacion
    return mensaje;
  }
  
  //6- Una función que recupera, dentro del forEach que la contiene, todas las propiedades de cada
  //   objeto, lo que me sirve para mostrar en pantalla la información resultante del script.
  
  const botellas = listaDeTragos.map(trago => trago.botella);
  const botellasLista = botellas.join("\n");
  let listaPersonal = [];
  
  //2- Para presentar en pantalla un listado prolijo de las botellas a usar en los tragos,
  //   creo un nuevo array que almacena los nombres de cada botella. Uso también el método join 
  //   para insertar un salto de línea entre cada botella, espaciando la información en pantalla.
  //   También creé un array vacío, que voy a ir completando con la data cargada por el usuario.
  
  alert("Voy a indicarte qué tragos podés preparar con las botellas que tengas en tu casa");
    do {
    botellaElegida = prompt("Elegí una de las siguientes opciones (para salir, escribí ESC):" + "\n" + botellasLista)
      if (botellaElegida != "ESC") {
          armarBarra();
        }
    }while (botellaElegida != "ESC");
  
  //3- El usuario ingresa vía prompts los nombres de las botellas (por cuestiones de tiempo
  //   no me dediqué a filtrar con iteraciones las entradas incorrectas o vacías, espero que el usuario tipee bien)
  //   el script ejecuta entonces la función armarBarra (salvo que ingrese ESC como primera información)
  
  console.log(listaPersonal);
  
  alert("Ahora te muestro el detalle de cada uno de los tragos que podés prepararte: ");
  const todosLosTragosObjetos = listaPersonal.flat();
  
  console.log(todosLosTragosObjetos);
  //5- Muestro las salidas de consola antes y después del método flat. Me trabé mucho en este paso,
  //   hasta que entendí que mi array nuevo contenía una lista de arrays, y no de objetos que pudiera recuperar
  //   con un forEach. Busqué y revisé y encontré que el método flat me permitía aplanar arrays anidados en un array.
  //   la variable todosLosTragosObjetos me permitió seguir con vida en la orquesta barroca que había creado jaja.
  
  todosLosTragosObjetos.forEach((trago) => {
    alert(mostrarTrago(trago));
  });
  
  alert("Visitá la sección Cómo lo preparo para aprender a hacerlos!");
  
  
  
  
  
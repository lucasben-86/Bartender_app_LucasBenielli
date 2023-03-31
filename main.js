
//Declaro función que pide 3 valores de string para ofrecer una bebida 
//entre 8 disponibles, de acuerdo a las preferencias del usuario
function ofrecerTrago(){
    let sabor = prompt("¿Querés un trago dulce o amargo?");
    let tamanio= prompt("Ok. ¿Lo querés en vaso corto o largo?");
    let intensidad= prompt("Por último, ¿querés que sea un trago suave o fuerte?");
    if (sabor == "dulce" && tamanio == "largo" && intensidad == "suave") {
        alert("Voy a prepararte un REGALIZ DE PERDIZ");
    }else{
        if (sabor == "dulce" && tamanio == "largo" && intensidad == "fuerte") {
            alert("Voy a prepararte un PATADA DE ENANO");
        }else{
            if (sabor == "dulce" && tamanio == "corto" && intensidad == "suave") {
                alert("Voy a prepararte un FRESITA");
            }else{
                if (sabor == "dulce" && tamanio == "largo" && intensidad == "fuerte") {
                    alert("Voy a prepararte un PATADA DE ENANO");
                }else{
                    if (sabor == "dulce" && tamanio == "corto" && intensidad == "fuerte") {
                        alert("Voy a prepararte un EMPERADOR EN LA PERA");
                    }else{
                        if (sabor == "amargo" && tamanio == "largo" && intensidad == "suave") {
                            alert("Voy a prepararte un NOSTALGIA DE INVIERNO");
                        }else{
                            if (sabor == "amargo" && tamanio == "largo" && intensidad == "fuerte") {
                                alert("Voy a prepararte un NOVENO REGIMIENTO");
                            }else{
                                if (sabor == "amargo" && tamanio == "corto" && intensidad == "suave") {
                                    alert("Voy a prepararte un PETAQUERO CUAQUERO");
                                }else{
                                    if (sabor == "amargo" && tamanio == "corto" && intensidad == "fuerte") {
                                        alert("Voy a prepararte un GROG SECRETO");
                                                                         
                                    }
                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
const NOMBRE= prompt("¡Buenas noches! ¿Cómo te llamás?");
const EDAD= parseInt(prompt("Hola, " + NOMBRE +". ¿Me podrías decir tu edad?"));

if (isNaN(EDAD)) {
    alert("La edad ingresada no es un número. Intente nuevamente");
    } else if (EDAD >= 18) {
    alert("Ok. Te voy a ayudar a que encuentres tu trago favorito.");    
    let i=0;
    do {
        ofrecerTrago();
        let unoMas= prompt("¿Vas a querer otro trago?");
        if (unoMas.toLowerCase() == "si") {
            i++;
        } else {
        alert("Ok, acá está el QR, escaneá cuando quieras");
        break;
        }
    } while (i<3);
    alert(NOMBRE + " ,creo que te haría bien salir a tomar un poco de aire");
//ver cómo hacer para que no salte siempre este alert,incluso luego del que cobra con qr?
}else{
    alert("Rajá de acá");
    }


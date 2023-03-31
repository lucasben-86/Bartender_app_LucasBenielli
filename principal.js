
function ofrecerTrago(sabor, tamanio, intensidad) {
    
    if (sabor === "dulce" && tamanio === "corto" && intensidad === "suave") {
        return alert("Voy a prepararte un PATADA DE ENANO");
    } else if (sabor === "dulce" && tamanio === "largo" && intensidad === "suave") {
        return alert("Voy a prepararte un REGALIZ DE PERDIZ");
    } else if (sabor === "dulce" && tamanio === "corto" && intensidad === "fuerte") {
        return alert("Voy a prepararte un FRESITA");
    } else if (sabor === "dulce" && tamanio === "largo" && intensidad === "fuerte") {
        return alert("Voy a prepararte un EMPERADOR EN LA PERA");
    } else if (sabor === "amargo" && tamanio === "corto" && intensidad === "suave") {
        return alert("Voy a prepararte un NOSTALGIA DE INVIERNO");
    } else if (sabor === "amargo" && tamanio === "largo" && intensidad === "suave") {
        return alert("Voy a prepararte un NOVENO REGIMIENTO");
    } else if (sabor === "amargo" && tamanio === "corto" && intensidad === "fuerte") {
        return alert("Voy a prepararte un PETAQUERO CUAQUERO");
    } else if (sabor === "amargo" && tamanio === "largo" && intensidad === "fuerte") {
        return alert("Voy a prepararte un GROG SECRETO");
    } else {
        return alert("No te escuché bien, empezá de nuevo!")
    }

}

const NOMBRE= prompt("¡Buenas noches! ¿Cómo te llamás?");
const EDAD= parseInt(prompt("Hola, " + NOMBRE +". ¿Me podrías decir tu edad?"));

if (isNaN(EDAD)) {
    alert("No te escuché bien, ¿vamos de nuevo?")
    } else if (EDAD >= 18) {
    alert("Ok! Te voy a ayudar a que encuentres tu trago favorito.");    
    let i=0;
    do {
        alert("Vamos con el trago número " + (i + 1));
        let sabor = prompt("¿Querés un trago dulce o amargo?");
        let tamanio = prompt("Ok. ¿Lo querés en vaso corto o largo?");
        let intensidad = prompt("Por último, ¿querés que sea un trago suave o fuerte?");
        ofrecerTrago(sabor, tamanio, intensidad);
        let unoMas= prompt("¿Vas a querer otro trago?");
        if (unoMas.toLowerCase() == "si") {
            i++;
        } else {
        alert("Ok, acá está el QR, escaneá cuando quieras");
        break;
        }
    } while (i<3);
    alert(NOMBRE + " ,creo que te haría bien salir a tomar un poco de aire");
}else{
    alert("Volvé cuando seas mayor de edad");
    }

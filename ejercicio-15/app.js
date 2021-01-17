// Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

// si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
// si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
// si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.
// El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

// Por ejemplo:

// Número aleatorio: 7 (No se muestra)
// Usuario presiona 3
// "El número es más grande. Número ingresado: 3"
// Usuario presiona 9
// "El número es más chico. Número ingresado: 9"
// Usuario presiona 7
// "Adivinaste. Número ingresado: 7"
// El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)


let contenedor = document.getElementById('contenedor');
let reset = document.getElementById('reset');
reset.style.display= 'none';

let aleatorio = Math.round(Math.random()*9);   
let juegoTerminado = false;

document.addEventListener('keydown', (e) =>{
    //Validación
    if (isNaN(e.key) || juegoTerminado){
        return;
    }
    let respuesta = '';
    let numeroIngresado = parseInt(e.key);
      if(aleatorio < numeroIngresado){
            respuesta = `El número es más chico. Número ingresado ${numeroIngresado}`;
      }else if(aleatorio > numeroIngresado){
            respuesta = `El número es más grande. Número ingresado ${numeroIngresado}`;
      }else if(aleatorio === numeroIngresado){
            respuesta = `Adivinaste!! El número es ${numeroIngresado}`;
            juegoTerminado=true;
            reset.style.display= '';
    };
    parrafo = document.createElement("p"); 
    parrafo.innerText = respuesta;
    contenedor.appendChild(parrafo);
});

//Asignacion.
//Meter un valor en una variable --> let numero = 10;

function reiniciarJuego(){
    contenedor.innerText = '';
    aleatorio = Math.round(Math.random()*9);   
    juegoTerminado= false; 
    reset.style.display= 'none';
}

// playlist
// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada


let songs = document.getElementById('songs');

let cancion1 = prompt('Ingrese su primer canción');
let cancion2 = prompt('Ingrese su segunda canción');
let cancion3 = prompt('Ingrese su tercera canción');
let cancion4 = prompt('Ingrese su cuarta canción');
let cancion5 = prompt('Ingrese su quinta canción');

const canciones = `
<li>${cancion1}</li>
<li>${cancion2}</li>
<li>${cancion3}</li>
<li>${cancion4}</li>
<li>${cancion5}</li>
`;


songs.innerHTML = canciones;



// OTRA MANERA DE RESOLVER

// let cancion = '';


//     for(let i = 0; i < 5; i ++){
//         cancion = prompt("Ingresa la " + (i + 1) + "° canción");
//         lista(cancion);
//     }

//     function lista(cancion){
//         let node = document.createElement("li");
//         let textnode = document.createTextNode(cancion);
//         node.appendChild(textnode);
//         document.getElementById("songs").appendChild(node);
//     }



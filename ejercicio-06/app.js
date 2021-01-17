// Crear un documento html con una barra de progreso (con un div dentro de otro)
// un elemento de texto que indique el progreso (p. ej. 50%)
// dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
// lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// el incremento/decremento es del 10%


let menos = document.getElementById('menos');
let mas = document.getElementById('mas');
let chica = document.getElementById('chica');
let porcentaje = document.getElementById('porcentaje');

let count = 50;
chica.style.width = `${count}%`;
porcentaje.innerHTML = count;

mas.addEventListener('click', () =>{
  if(count < 100){
    count = count + 10;
    // count += 10;
    // count = count + 1
    // coun += 1
    // count++
    chica.style.width = `${count}%`;
    porcentaje.innerHTML = count;
  }
})

menos.addEventListener('click', () =>{
  if(count > 0){
    count = count - 10;
    chica.style.width = `${count}%`;
    porcentaje.innerHTML = count;
  }
})

// Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.

// 1.crear 6 botones 
// 2.ponerle color de fondo distinto
// 3.crear div 
// 4.que cambie al mismo color del boton

let cajaGrande = document.getElementById('cajaGrande');

         // 1 MANERA DE RESOLUCION (CON UNA FUNCION)
// function colores(color){
//     cajaGrande.style.backgroundColor = color;
// }


         // CON UN ARROW
let changeColor = (color) => {
    cajaGrande.style.backgroundColor = color;
}


// OTRA MANERA MEDIANTE ARRAY SIN BOTONES CREADOS EN HTML Y SACANDO LOS ESTILOS DE CCS

let colores = ['pink','blue', 'green', 'orange', 'skyblue', 'red'];
let botones = document.getElementById('botones');

colores.map(color => {
    let button = document.createElement('button'); 
    button.style.backgroundColor = color;
    button.addEventListener('click',()=>{
        changeColor(color);
    })
    botones.appendChild(button);   
});

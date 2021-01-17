// Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).


document.getElementById("boton").focus();
let rectangulo=document.getElementById("body");  

function obtenerColorAleatorio() {  
    let a=Math.floor(Math.random()*255);  
    let b=Math.floor(Math.random()*255);  
    let c=Math.floor(Math.random()*255);  
    let x=Math.floor(Math.random()*255);  
    let y=Math.floor(Math.random()*255);  
    let z=Math.floor(Math.random()*255);  

 rectangulo.style.backgroundColor='rgb('+a+','+b+','+c+')';  
 rectangulo.style.color='rgb('+x+','+y+','+z+')';  
}  
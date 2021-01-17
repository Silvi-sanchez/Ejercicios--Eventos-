// En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto.

// Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".

// El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada.

// El botón de reiniciar debe borrar todos los dígitos del elemento de texto.

// El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.

agregarBotones();

function agregarBotones(){
    let botones = document.getElementById('botones');

   for(let i=1; i<10;i++)
   {
        crearBoton(i, botones);  
   }
   crearBoton(0, botones);  
   crearBoton('Borrar',botones);
   crearBoton('C',botones);
}



function crearBoton(nombre, padre){
    let number = document.createElement('button');
    number.innerText= nombre;
    number.addEventListener('click', ()=> {printToText(nombre)})  
    padre.appendChild(number);
}

function printToText(number){
    let texto = document.getElementById('texto');
    if(number ==='Borrar'){
        texto.value = texto.value.substring(0, texto.value.length - 1);
    }
    if(number ==='C'){
        texto.value = '';
    }
    if(texto.value.length >5){
        return;
    } 
    if(number !='Borrar' && number !='C' ){
        texto.value += number;
    }

}

function printToTextKey(target){
    if(isNaN(target.key))
        return;
    printToText(target.key);
}

function myFunction(e){
    e.preventDefault();
}
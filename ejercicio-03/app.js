// Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.


function checkAnswer(el){
     let botones = document.getElementsByTagName("button");
     for(let i=0; i<botones.length; i++)
     {
         if(botones[i].id === 'salada')
        {
            botones[i].style.background='green';
        }
        else
        {
            botones[i].style.background='red';
        }
}

let respuesta = document.getElementById("respuesta");
if(el.id === 'salada')
{
    respuesta.innerText = 'Correcto!!';
    respuesta.style.color = 'green';
}
else{
    respuesta.innerText = 'Le erraste!!';
    respuesta.style.color = 'red';
}
}